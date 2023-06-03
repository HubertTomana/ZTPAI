package com.example.RecipeBookApp.controller;

import com.example.RecipeBookApp.model.User;
import com.example.RecipeBookApp.model.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/apitest")
public class UserController {



    /*

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
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

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Integer id) {
        if(!userRepository.existsById(id)) {
            return null;
        }
        //TODO dodac error
        return userRepository.findById(id).orElse(null);


    }

    @PostMapping("/users")
    public void addUser(@RequestBody NewUserRequest request) {
        User user = new User();
        user.setName(request.name());
        user.setSurname(request.surname());
        user.setEmail(request.email());
        user.setPassword(request.password());
        userRepository.save(user);
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Integer id) {
        if(!userRepository.existsById(id)) {
            //TODO dodac error
            return "There is no user with this id";
        }
        userRepository.deleteById(id);
        return "User with id "+ id + " has been deleted";
    }

     */
}
