package com.example.RecipeBookApp.dto;

import com.example.RecipeBookApp.model.Recipe;


import java.util.List;

public class RecipeResponseDto {
    String title;
    String type;
    String instruction;
    List<IngredientDto> listOfIngredients;

    public RecipeResponseDto() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getInstruction() {
        return instruction;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }

    public List<IngredientDto> getListOfIngredients() {
        return listOfIngredients;
    }

    public void setListOfIngredients(List<IngredientDto> listOfIngredients) {
        this.listOfIngredients = listOfIngredients;
    }

    @Override
    public String toString() {
        return "RecipeResponseDto{" +
                "title='" + title + '\'' +
                ", type='" + type + '\'' +
                ", instruction='" + instruction + '\'' +
                ", listOfIngredients=" + listOfIngredients +
                '}';
    }
}
