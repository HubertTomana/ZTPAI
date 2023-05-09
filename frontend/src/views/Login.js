import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"

const Login = () => {
    return (
        <div class="content">
            <div class="container">
                <div class="upper">
                    <img src={logo} className="App-logo" alt="logo"/>
                    PUZZLE
                    CAKE
                </div>
                <div class="login-container">
                    <form class="login">
                        <div class="messages">
                        </div>
                        <input name="email" type="text" placeholder="Email"/>
                        <input name="password" type="password" placeholder="Password"/>
                        <a class="login" href="http://localhost:3000/recipes">
                            <button>LOGIN</button>
                        </a>
                    </form>
                    <a class="login" href="http://localhost:3000/registration">
                        <button>REGISTER</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;