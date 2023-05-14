package com.example.RecipeBookApp.model;

import jakarta.persistence.*;

import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    private String name;

    private String surname;

    private String email;

    private String password;

    private Integer amountOfRecipes = 0;

    private String role = "client";

    @ManyToMany
    @JoinTable(name = "users_recipes",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "recipes_id"))
    private Set<Recipe> recipes = new LinkedHashSet<>();


    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }

    public Integer getAmountOfRecipes() {
        return amountOfRecipes;
    }

    public Set<Recipe> getRecipes() {
        return recipes;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setAmountOfRecipes(Integer amountOfRecipes) {
        this.amountOfRecipes = amountOfRecipes;
    }

    public void setRecipes(Set<Recipe> recipes) {
        this.recipes = recipes;
    }

    public void addRecipes(Recipe recipe) {
        recipes.add(recipe);
        amountOfRecipes = amountOfRecipes + 1;
    }
}