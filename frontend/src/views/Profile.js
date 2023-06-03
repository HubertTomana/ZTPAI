import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import "../css/Profile.css"
import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const Profile = () => {
    const token = sessionStorage.getItem('token');
    const decodedToken = jwt_decode(token);

    const [post, setPost] = useState({
        id: ''
    })
    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    async function handleSubmit(id, event) {
        event.preventDefault()
        console.log(post)
        axios.delete('api/user/1')
        .then(response => console.log(response))
        .catch(err => console.log(err))

    }

 /*   async function handleLogout(e) {
        e.preventDefault()
        console.log("Logout")
        .then(function (response){
            console.log(response);
            sessionStorage.removeItem('token');
            window.location.href = '/login';
          })
          .catch(function(error){
            console.log(error)
          })

    }
*/
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <div className="content">
            <div className="base-container">
                <nav>
                    <a href="http://localhost:3000/recipes" className="button">
                        <div className="buttonNav-NoBold">
                            My Book
                        </div>
                    </a>
                    <a href="http://localhost:3000/profile" className="button">
                        <div className="buttonNav-Bold">
                            My Profile
                        </div>
                    </a>
                </nav>
                <div className="rectangle-profile">
                    <div className="profile-menu">
                        <div className="profile-menu-rectangle">
                            <div className="profile-menu-bar">
                            {decodedToken.userid}
                            </div>
                            <div className="profile-menu-bar">
                                NAZWISKO
                            </div>
                            <div className="profile-menu-bar">
                                EMAIL
                            </div>
                            <button className="profile-button" onClick={handleLogout}>
                                LOGOUT
                            </button>
                        </div>
                    </div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="statistics-menu">
                        <div className="statistics-rectangle">
                            Number Of My Recipes
                            <div className="statistics-bar">
                                10
                            </div>
                            <form className="recipes" onSubmit={handleSubmit}>
                            <input name="id" type="search-placeholder" placeholder="Choose ID to delete" onChange={handleInput}/>
                            <button className="profile-button" type="submit">
                                <i className="fa-solid fa-trash-can"></i> &nbsp; Delete
                            </button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;