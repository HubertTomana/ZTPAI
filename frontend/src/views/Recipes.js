import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import "../css/Recipes.css"
import axios from 'axios'

const Recipes = () => {

    const token = sessionStorage.getItem('token')
    const [posts, setPosts] = useState([])
    const [recipeDetails, setRecipeDetails] = useState(null);
    function getLink(recipeId) {
        return "api/recipes/" + recipeId
    }

    const handleRecipeClick = async (recipeId) => {
    try {
      const response = await axios.get(`api/recipes/${recipeId}`);
      setRecipeDetails(response.data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

    useEffect(() => {
        axios.get("api/recipes")
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        
    }, [])

function getLink(id_recipe) {
    return "http://localhost:3000/recipes/" + id_recipe
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
                        <a href="tops" className="button">
                            <div className="search-menu-button">
                                TOPS
                            </div>
                        </a>
                        <a href="masses" className="button">
                            <div className="search-menu-button">
                                MASSES
                            </div>
                        </a>
                        <a href="bottoms" className="button">
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
                                Add Recipe
                            </a>
                        </header>
                        <section className="recipes">
                        {
                                    recipeDetails ? 
                                    (
                                        <div>
                                            <h2>{recipeDetails.title}</h2>
                                            <p>{recipeDetails.type}</p>
                                            <p>{recipeDetails.instruction}</p>
                                            <p>{recipeDetails.listOfIngredients.map(ingredient => (
                                                <p>{ingredient.name} : {ingredient.quantity}</p>
                                            ))}
                                            </p>
                                            
                                    </div>
                                    )
                                    : posts.map(post => (
                                        <div id="recipe-1" onClick={() => handleRecipeClick(post.id)}>
                                            <img></img>
                                                <div>
                                                    <h2>
                                                    {post.title}                                                    
                                                    </h2>                                                   
                                                </div>                                            
                                        </div>
                                    ))
                                }

                                        
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;