package com.example.RecipeBookApp.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    @Query("select r from Recipe r where r.id = ?1")
    Optional<Recipe> findById(Integer recipeId);

    void deleteByUser(User user);

    List<Recipe> findAllByUser(User user);

    List<Recipe> findAllByType(String Type);

    Integer countAllByUser(User user);

}
