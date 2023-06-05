package com.example.RecipeBookApp.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    @Query("select r from Recipe r where r.id = ?1")
    Optional<Recipe> findById(Integer recipeId);

    @Modifying
    @Query("delete from Recipe r where r.user = ?1")
    void deleteRecipesByUser(User user);
}
