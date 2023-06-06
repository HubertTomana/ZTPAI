import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import "../css/Recipes.css"
import {useState, useEffect} from 'react'
import axios from 'axios'
import Select from 'react-select';
import jwt_decode from 'jwt-decode'

const AddRecipe = () => {

    const token = sessionStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeType, setRecipeType] = useState('');
    const [recipeInstruction, setRecipeInstruction] = useState('');
    const [recipeImage, setRecipeImage] = useState('');

    useEffect(() => {
        axios.get('api/ingredients')
            //.then(response => response.json())
            .then(res => {
                console.log(res.data)
                setIngredients(res.data)
            })
            .catch(error => console.log(error));
    }, []);

    const handleIngredientChange = selectedOptions => {
        setSelectedIngredients(selectedOptions);
        console.log(selectedOptions)
    };

    const handleQuantityChange = (ingredientId, quantity) => {
        const updatedIngredients = selectedIngredients.map(ingredient => {
            if (ingredient.value === ingredientId) {
                return {...ingredient, quantity};
            }
            return ingredient;
        });
        setSelectedIngredients(updatedIngredients);
    };

    const handleNewIngredientChange = event => {
        setNewIngredient(event.target.value);
    };

    const handleRecipeTitleChange = event => {
        setRecipeTitle(event.target.value);
    };

    const handleRecipeTypeChange = event => {
        setRecipeType(event.target.value);
    };

    const handleRecipeInstructionChange = event => {
        setRecipeInstruction(event.target.value);
    };

    const handleRecipeImageChange = event => {
        setRecipeImage(event.target.value);
    };

    const handleAddNewIngredient = () => {
        if (newIngredient) {
            const newIngredientObj = {
                value: newIngredient.toLowerCase(),
                label: newIngredient.toLowerCase(),
                isNew: true
            };
            setSelectedIngredients([...selectedIngredients, newIngredientObj]);
            setNewIngredient('');
        }
    };

    const handleSubmit = event => {
        event.preventDefault()
        console.log('Wybrane składniki:', selectedIngredients)
        const recipeData = {
            userID: decodedToken.userid,
            title: recipeTitle,
            type: recipeType,
            ingredients: selectedIngredients.map(ingredient => ({
                name: ingredient.label,
                quantity: ingredient.quantity
            })),
            instruction: recipeInstruction,
//            image: recipeImage
        };
        console.log(recipeData.image)
        axios.post("api/recipes", recipeData)
            .then(response => {
                console.log('Przepis został dodany:', response.data);
                window.location.href = '/recipes'
            })
            .catch(error => console.error(error));
            
    };

    const ingredientOptions = ingredients.map(ingredient => ({
        value: ingredient.id,
        label: ingredient.name
    }));


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
                                Add Recipe
                            </a>
                        </header>
                        <section className="recipe-form">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="recipeType">Choose a type of recipe:</label>
                                <select id="recipeType" className="recipeType" onChange={handleRecipeTypeChange}>
                                    <option value="">Select a type</option>
                                    <option value="tops">Tops</option>
                                    <option value="masses">Masses</option>
                                    <option value="bottoms">Bottoms</option>
                                    <option value="full-recipe">Full Recipe</option>
                                </select>
                                <input type="text" value={recipeTitle} placeholder="Title"
                                       onChange={handleRecipeTitleChange}/>
                                <Select
                                    placeholder="Ingredients"
                                    className='ingredient-select'
                                    isMulti
                                    options={ingredientOptions}
                                    value={selectedIngredients}
                                    onChange={handleIngredientChange}
                                />
                                {selectedIngredients.map(ingredient => (
                                    <div key={ingredient.value}>
                                        <label>
                                            {ingredient.label}
                                            <input
                                                value={ingredient.quantity || ''}
                                                onChange={e => handleQuantityChange(ingredient.value, e.target.value)}
                                            />
                                        </label>
                                    </div>
                                ))}
                                <textarea value={recipeInstruction} rows="5" placeholder="Instruction"
                                          onChange={handleRecipeInstructionChange}></textarea>
                                <button type="submit">Save</button>
                                <input type="file" className="image" onChange={handleRecipeImageChange}></input>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe;