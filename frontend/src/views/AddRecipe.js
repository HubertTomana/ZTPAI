import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import "../css/Recipes.css"
import { useState } from 'react'
import axios from 'axios'

const AddRecipe = () => {

    const [post, setPost] = useState({
        recipeType: '',
        title : '',
        ingredients : '',
        instruction : ''
    })
    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(post)
        axios.post('api/recipes', post)
        .then(response => console.log(response))
        .catch(err => console.log(err))

    }

    return (
        <div className="content">
            <div className="base-container">
                <nav>
                    <a href="http://localhost:3000/recipes" className="button">
                        <div className="buttonNav-Bold">
                            My Book
                        </div>
                    </a>
                    <a href="http://localhost:3000/profile" className="button">
                        <div className="buttonNav-NoBold">
                            My Profile
                        </div>
                    </a>
                </nav>
                <div className="rectangle">
                    <div className="search-menu">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <a href="#" className="button">
                            <div className="search-menu-button">
                                TOPS
                            </div>
                        </a>
                        <a href="#" className="button">
                            <div className="search-menu-button">
                                MASSES
                            </div>
                        </a>
                        <a href="#" className="button">
                            <div className="search-menu-button">
                                BOTTOMS
                            </div>
                        </a>
                        <a href="http://localhost:3000/recipes" className="button">
                            <div className="search-menu-button">
                                ALL RECIPES
                            </div>
                        </a>
                    </div>
                    <div className="recipe-menu">
                        <header>
                            <div className="search-bar">
                                <input type="search-placeholder" placeholder="Search Recipe"/>
                            </div>
                            <a className="add-recipe" href="http://localhost:3000/addRecipe">
                                <i className="fas fa-plus"></i>
                                Add Recipe
                            </a>
                        </header>
                        <section className="recipe-form">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="recipeType">Choose a type of recipe:</label>
                                <select id="recipeType" name="recipeType" onChange={handleInput}>
                                    <option value="">Select a type</option>
                                    <option value="tops">Tops</option>
                                    <option value="masses">Masses</option>
                                    <option value="bottoms">Bottoms</option>
                                    <option value="full-recipe">Full Recipe</option>
                                </select>
                                <input name="title" type="text" placeholder="Title" onChange={handleInput}/>
                                <textarea name="ingredients" rows="4" placeholder="Ingredients" onChange={handleInput}></textarea>
                                <textarea name="instruction" rows="5" placeholder="Directions" onChange={handleInput}></textarea>
                                <button type="submit">Save</button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe;