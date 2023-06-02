import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import "../css/Recipes.css"
import axios from 'axios'

const Recipes = () => {

    const [posts, setPosts] = useState([])

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
    return "http://localhost:3000/" + id_recipe
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
                                    posts.map(post => (
                                        <div id="recipe-1">
                                            <img></img>
                                                <div>
                                                    <h2>
                                                        <a href={getLink(post.id)}> {post.title} </a>
                                                    </h2>
                                                    <p> {post.instruction} </p>
                                                    
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