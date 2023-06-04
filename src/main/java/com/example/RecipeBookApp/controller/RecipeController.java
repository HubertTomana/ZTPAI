package com.example.RecipeBookApp.controller;

import com.example.RecipeBookApp.model.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RecipeController {
    //TODO TOKEN Z ID
    int id_user = 2;

    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;
    private final IngredientRepository ingredientRepository;

    public RecipeController(RecipeRepository recipeRepository, UserRepository userRepository, IngredientRepository ingredientRepository) {
        this.recipeRepository = recipeRepository;
        this.userRepository = userRepository;
        this.ingredientRepository = ingredientRepository;
    }

    @GetMapping("/recipes")
    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    record NewRecipeRequest(
            String recipeType,
            String title,
            String ingredients,
            String instruction
    ) {

    }

    @PostMapping("/recipes")
    public ResponseEntity<String> addRecipe(@RequestBody NewRecipeRequest request) {
        Recipe recipe = new Recipe();
        recipe.setTitle(request.title());
        recipe.setType(request.recipeType());
        recipe.setInstruction(request.instruction());
        recipe.setUser(userRepository.getReferenceById(id_user));
        recipeRepository.save(recipe);
        System.out.println(userRepository.getReferenceById(id_user));
        return ResponseEntity.ok("recipe added");
    }

    @GetMapping("/ingredients")
    public List<Ingredient> getIngredients() {
        System.out.println(ingredientRepository.findAll());
        return ingredientRepository.findAll();
    }
}
