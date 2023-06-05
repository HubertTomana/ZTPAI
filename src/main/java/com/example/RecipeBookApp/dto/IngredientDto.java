package com.example.RecipeBookApp.dto;

import lombok.Builder;

@Builder
public class IngredientDto {
    private String name;
    private String quantity;

    public String getName() {
        return name;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
