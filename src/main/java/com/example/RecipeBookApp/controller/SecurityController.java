package com.example.RecipeBookApp.controller;

import com.example.RecipeBookApp.dto.AuthResponseDto;
import com.example.RecipeBookApp.dto.LoginDto;
import com.example.RecipeBookApp.dto.RegisterDto;
import com.example.RecipeBookApp.dto.UserProfileDto;
import com.example.RecipeBookApp.model.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;


@RestController
@RequestMapping("/users")
@Transactional
public class SecurityController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final RecipeRepository recipeRepository;
    private final RecipeIngredientRepository recipeIngredientRepository;
    private static final String KEY = "d04jr0NIz4j0zURu0Euy3QtqFFZcpnrLol6HpyYtV6SMcYGBOwL9A41b355meW7";

    public SecurityController(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, RecipeRepository recipeRepository, RecipeIngredientRepository recipeIngredientRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.recipeRepository = recipeRepository;
        this.recipeIngredientRepository = recipeIngredientRepository;
    }

    @PostMapping("/get")
    public ResponseEntity<AuthResponseDto> getUsers(@RequestBody LoginDto loginDto) {
        Authentication authetication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getEmail(),
                        loginDto.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authetication);
        User user = userRepository.findByEmail(loginDto.getEmail()).orElse(null);

        String token = Jwts
                .builder()
                .setClaims(new HashMap<>())
                .claim("userid", user.getId())
                .claim("role", user.getRole())
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(Keys.hmacShaKeyFor(Base64.getDecoder().decode(KEY)), SignatureAlgorithm.HS256)
                .compact();
        return ResponseEntity.ok(AuthResponseDto.builder().token(token).build());
    }

    @PostMapping("/add")
    public ResponseEntity<Object> addUser(@RequestBody RegisterDto registerDto) {
        User user = new User();
        user.setName(registerDto.getName());
        user.setSurname(registerDto.getSurname());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        try {
            userRepository.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(null);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserProfileDto> getUserById(@PathVariable Integer userId) {
        User user = userRepository.findById(userId).orElse(null);
        UserProfileDto userProfileDto = new UserProfileDto();
        if (user != null) {
            userProfileDto.setName(user.getName());
            userProfileDto.setSurname(user.getSurname());
            userProfileDto.setEmail(user.getEmail());
            userProfileDto.setAmountOfRecipes(recipeRepository.countAllByUser(user));
            return ResponseEntity.ok(userProfileDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    record DeleteUserRecord(
            String userToDeleteId
    ) {

    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteUser(@RequestBody DeleteUserRecord record) {
        Integer userId = Integer.parseInt(record.userToDeleteId());
        User user = userRepository.findById(userId).orElse(null);
        System.out.println("User id to : " + userId);
        if (user != null) {
            for (Recipe recipe : recipeRepository.findAllByUser(user)) {
                recipeIngredientRepository.deleteByIdRecipe(recipe);
            }
            recipeRepository.deleteByUser(user);
            userRepository.deleteById(user.getId());
            return ResponseEntity.ok("User with id " + record.userToDeleteId() + " is deleted");
        } else {
            return ResponseEntity.ok("User with this id doesn't exist");
        }
    }
}
