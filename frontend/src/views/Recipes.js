import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import "../css/Recipes.css"

const Recipes = () => {
    return (
        <div class="content">
            <div class="base-container">
                <nav>
                    <a href="http://localhost:3000/recipes" class="button">
                        <div class="buttonNav-Bold">
                            My Book
                        </div>
                    </a>
                    <a href="http://localhost:3000/profile" class="button">
                        <div class="buttonNav-NoBold">
                            My Profile
                        </div>
                    </a>
                </nav>
                <div class="rectangle">
                    <div class="search-menu">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <a href="tops" class="button">
                            <div class="search-menu-button">
                                TOPS
                            </div>
                        </a>
                        <a href="masses" class="button">
                            <div class="search-menu-button">
                                MASSES
                            </div>
                        </a>
                        <a href="bottoms" class="button">
                            <div class="search-menu-button">
                                BOTTOMS
                            </div>
                        </a>
                        <a href="http://localhost:3000/recipes" class="button">
                            <div class="search-menu-button">
                                ALL RECIPES
                            </div>
                        </a>
                    </div>
                    <div class="recipe-menu">
                        <header>
                            <div class="search-bar">
                                <input type="search-placeholder" placeholder="Search Recipe"/>
                            </div>
                            <a class="add-recipe" href="http://localhost:3000/addRecipe">
                                Add Recipe
                            </a>
                        </header>
                        <section class="recipes">
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;