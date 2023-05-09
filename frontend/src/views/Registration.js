import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"

const Registration = () => {
    return (
        <div class="content">
            <div class="container">
                <div class="upper">
                    <img src={logo} className="App-logo" alt="logo"/>
                    PUZZLE
                    CAKE
                </div>
                <div class="login-container">
                    <form class="login" action="register" method="POST">
                        <div class="messages">
                        </div>
                        <input name="name" type="text" placeholder="Your Name"/>
                        <input name="surname" type="text" placeholder="Your Surname"/>
                        <input name="email" type="text" placeholder="Write Your email"/>
                        <input name="password" type="password" placeholder="Set Password"/>
                        <input name="confirmedPassword" type="password" placeholder="Confirm password"/>
                        <button type="submit">REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;