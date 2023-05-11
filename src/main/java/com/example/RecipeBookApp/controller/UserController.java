package com.example.RecipeBookApp.controller;

import com.example.RecipeBookApp.model.User;
import com.example.RecipeBookApp.model.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    record NewUserRequest(
            String name,
            String surname,
            String email,
            String password

    ) {

    }

    @PostMapping
    public void addUser(@RequestBody NewUserRequest request) {
        User user = new User();
        user.setName(request.name());
        user.setSurname(request.surname());
        user.setEmail(request.email());
        user.setPassword(request.password());
        userRepository.save(user);
    }
}
