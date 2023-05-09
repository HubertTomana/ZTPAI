import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import "../css/Profile.css"

const Profile = () => {
    return (
        <div class="content">
            <div class="base-container">
                <nav>
                    <a href="http://localhost:3000/recipes" class="button">
                        <div class="buttonNav-NoBold">
                            My Book
                        </div>
                    </a>
                    <a href="http://localhost:3000/profile" class="button">
                        <div class="buttonNav-Bold">
                            My Profile
                        </div>
                    </a>
                </nav>
                <div class="rectangle-profile">
                    <div class="profile-menu">
                        <div class="profile-menu-rectangle">
                            <div class="profile-menu-bar">
                                IMIE
                            </div>
                            <div class="profile-menu-bar">
                                NAZWISKO
                            </div>
                            <div class="profile-menu-bar">
                                EMAIL
                            </div>
                            <a class="profile-button" href="http://localhost:3000/">
                                LOGOUT
                            </a>
                        </div>
                    </div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div class="statistics-menu">
                        <div class="statistics-rectangle">
                            Number Of My Recipes
                            <div class="statistics-bar">
                                10
                            </div>
                            <p></p>
                            Number Of All Recipes
                            <div class="statistics-bar">
                                15
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;