package com.example.RecipeBookApp.model;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "recipe_ingredient")
public class RecipeIngredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "id_ingredient", nullable = false)
    private Ingredient idIngredient;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "id_recipe", nullable = false)
    private Recipe idRecipe;

    private String amount;

    public Integer getId() {
        return id;
    }

    public Ingredient getIdIngredient() {
        return idIngredient;
    }

    public Recipe getIdRecipe() {
        return idRecipe;
    }

    public String getAmount() {
        return amount;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setIdIngredient(Ingredient idIngredient) {
        this.idIngredient = idIngredient;
    }

    public void setIdRecipe(Recipe idRecipe) {
        this.idRecipe = idRecipe;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }
}
