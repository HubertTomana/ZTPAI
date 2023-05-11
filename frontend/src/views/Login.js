import React from 'react';
import logo from './logo.svg';
import "../css/Style.css"

const Login = () => {

    return (
        <div className="content">
            <div className="container">
                <div className="upper">
                    <img src={logo} className="App-logo" alt="logo"/>
                    PUZZLE
                    CAKE
                </div>
                <div className ="login-container">
                    <form class="login">
                        <input name="email" type="text" placeholder="Email"/>
                        <input name="password" type="password" placeholder="Password"/>
                            <button>LOGIN</button>
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