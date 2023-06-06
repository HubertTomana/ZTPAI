import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import "../css/Profile.css"
import {useState, useEffect} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const Profile = () => {
    const token = sessionStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.userid;
    const role = decodedToken.role;
    const [message, setMessage] = useState('');
    const [post, setPost] = useState('')

    function getLink(userId) {
        return "users/" + userId
    }


    const handleInput = (event) => {
        setPost(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(post)
        const deleteData = {
            userToDeleteId: post
        }
        console.log(typeof post)
        console.log(deleteData)
        axios.post("users/delete", deleteData)
            .then(response => {
                console.log(response)
                setMessage(response.data)
            })
            .catch(err => console.log(err))

    }

    const [userDetails, setUserDetails] = useState([])
    useEffect(() => {
        axios.get(getLink(userId))
            .then(res => {
                console.log(res)
                setUserDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])


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
                                {userDetails.name}
                            </div>
                            <div className="profile-menu-bar">
                                {userDetails.surname}
                            </div>
                            <div className="profile-menu-bar">
                                {userDetails.email}
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
                                {userDetails.amountOfRecipes}
                            </div>
                            {role === 'ADMIN' &&

                                <form className="recipes" onSubmit={handleSubmit}>
                                    {message}
                                    <input className="id" name="userToDeleteId" type="search-placeholder"
                                           placeholder="Choose ID to delete" onChange={handleInput}/>
                                    <button className="profile-button" type="submit">
                                        <i className="fa-solid fa-trash-can"></i> &nbsp; Delete
                                    </button>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;