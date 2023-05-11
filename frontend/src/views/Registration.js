import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import { useState } from 'react'
import axios from 'axios'

const Registration = () => {

    const [post, setPost] = useState({
        name: '',
        surname : '',
        email : '',
        password : ''
    })
    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(post)
        axios.post('api', post)
        .then(response => console.log(response))
        .catch(err => console.log(err))

    }

    return (
        <div className="content">
            <div className="container">
                <div className="upper">
                    <img src={logo} className="App-logo" alt="logo"/>
                    PUZZLE
                    CAKE
                </div>
                <div className="login-container">
                    <form  className="login" onSubmit={handleSubmit}>
                        <input name="name" type="text" placeholder="Your Name" onChange={handleInput} />
                        <input name="surname" type="text" placeholder="Your Surname" onChange={handleInput} />
                        <input name="email" type="text" placeholder="Write Your email" onChange={handleInput} />
                        <input name="password" type="password" placeholder="Set Password" onChange={handleInput} />
                        <input name="confirmedPassword" type="password" placeholder="Confirm password"/>
                        <button type="submit">REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;