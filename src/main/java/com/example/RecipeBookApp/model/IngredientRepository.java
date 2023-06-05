package com.example.RecipeBookApp.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {

    @Query("select i from Ingredient i where i.name = ?1")
    Optional<Ingredient> findByName(String name);
}
