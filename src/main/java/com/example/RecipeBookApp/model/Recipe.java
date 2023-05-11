package com.example.RecipeBookApp.model;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.LinkedHashSet;
import java.util.Set;

@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String title;

    private String instruction;

    private String image;

    private String type;

    @OneToMany(mappedBy = "idRecipe")
    private Set<RecipeIngredient> recipeIngredients = new LinkedHashSet<>();


    public String getInstruction() {
        return instruction;
    }

    public String getImage() {
        return image;
    }

    public String getType() {
        return type;
    }

    public Set<RecipeIngredient> getRecipeIngredients() {
        return recipeIngredients;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setRecipeIngredients(Set<RecipeIngredient> recipeIngredients) {
        this.recipeIngredients = recipeIngredients;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
