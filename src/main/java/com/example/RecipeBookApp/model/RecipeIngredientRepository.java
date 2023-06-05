package com.example.RecipeBookApp.model;

import com.example.RecipeBookApp.dto.IngredientDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface RecipeIngredientRepository extends JpaRepository<RecipeIngredient, Integer> {

    //@Query("select RecipeIngredient.idIngredient, RecipeIngredient.amount from RecipeIngredient where RecipeIngredient.idRecipe = ?1")
    //Optional<Map<Ingredient, String>> getListOfIngredients(Integer recipeId);
    @Query("SELECT new com.example.RecipeBookApp.dto.IngredientDto(i.name, ri.amount) FROM RecipeIngredient ri JOIN ri.idIngredient i where ri.idRecipe = ?1")
    //@Query("SELECT new com.example.RecipeBookApp.dto.IngredientDto(Ingredient.name, RecipeIngredient.amount) from RecipeIngredient join Ingredient on RecipeIngredient.idIngredient.id = Ingredient.id where RecipeIngredient.idRecipe.id = ?1")
    Optional<List<IngredientDto>> getListOfIngredients(Recipe recipe);

    void deleteByIdRecipe(Recipe recipe);

}
