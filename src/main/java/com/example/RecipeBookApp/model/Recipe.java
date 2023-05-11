package com.example.RecipeBookApp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Recipe {

    @Id
    private Long id;
    private String title;
    //TODO private User createdby;


    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
