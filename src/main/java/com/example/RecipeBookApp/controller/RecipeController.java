package com.example.RecipeBookApp.controller;

import com.example.RecipeBookApp.model.Recipe;
import com.example.RecipeBookApp.model.RecipeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {
    //TODO TOKEN Z ID
    Long id_user = 1L;

    private final RecipeRepository recipeRepository;

    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping
    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    record NewRecipeRequest(
            String title
    ) {

    }

    @PostMapping
    public void addRecipe(@RequestBody NewRecipeRequest request) {
        Recipe recipe = new Recipe();
        recipe.setId(id_user);
        recipe.setTitle(request.title());
        recipeRepository.save(recipe);
    }
}
