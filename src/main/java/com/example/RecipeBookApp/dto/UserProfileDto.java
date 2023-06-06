package com.example.RecipeBookApp.dto;

public class UserProfileDto {
    String name;
    String surname;
    String email;
    Integer amountOfRecipes;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAmountOfRecipes() {
        return amountOfRecipes;
    }

    public void setAmountOfRecipes(Integer amountOfRecipes) {
        this.amountOfRecipes = amountOfRecipes;
    }


}
