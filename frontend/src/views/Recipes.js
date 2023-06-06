import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import "../css/Recipes.css"
import axios from 'axios'

const Recipes = () => {

    const [posts, setPosts] = useState([])
    const [recipeDetails, setRecipeDetails] = useState(null);

    const handleAllRecipes = () => {
        setRecipeDetails(null)
        axios.get("api/recipes")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleTops = () => {
        setRecipeDetails(null)
        axios.get("api/recipes/types/tops")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleMasses = () => {
        setRecipeDetails(null)
        axios.get("api/recipes/types/masses")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleBottoms = () => {
        setRecipeDetails(null)
        axios.get("api/recipes/types/bottoms")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
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
                        <button className="search-menu-button" onClick={handleTops}>
                            TOPS
                        </button>
                        <button className="search-menu-button" onClick={handleMasses}>
                            MASSES
                        </button>
                        <button className="search-menu-button" onClick={handleBottoms}>
                            BOTTOMS
                        </button>
                        <button className="search-menu-button" onClick={handleAllRecipes}>
                            ALL RECIPES
                        </button>
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
                                            <div>
                                                {recipeDetails.listOfIngredients.map(ingredient => (
                                                    <span key={ingredient.name}>
                                                <p>{ingredient.name} : {ingredient.quantity} </p>
                                                </span>
                                                ))}
                                            </div>
                                            <p>{recipeDetails.instruction}</p>
                                        </div>
                                    )
                                    : posts.map(post => (
                                        <div id="recipe-1" key={post.id} onClick={() => handleRecipeClick(post.id)}>
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