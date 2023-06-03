import logo from './logo.svg';
import "../css/Style.css"
import React, { useState } from 'react'; 
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [noAccess, setNoAccess] = useState('');

    async function handleLogin(e){
    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'users/get',
      headers: {'Content-Type': 'application/json'},
      data: {
        email: email,
        password: password
      }
    };
    axios.request(options)
    .then(function (response){
      console.log(response.data.token);
      sessionStorage.setItem('token', response.data.token);
      window.location.href = '/recipes';
    })
    .catch(function(error){
      setNoAccess("Wrong login or password");
    })
  }  


    return (
        <div className="content">
            <div className="container">
                <div className="upper">
                    <img src={logo} className="App-logo" alt="logo"/>
                    PUZZLE
                    CAKE
                </div>
                <div className ="login-container">                    
                    <form className="login-elem">
                        <div>{noAccess}</div>
                        <input 
                            className="email"
                            name="email"
                            type="text" 
                            placeholder="Email"
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                            />
                        <input 
                            className="password" 
                            name="password"
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                            <button onClick={handleLogin}>LOGIN</button>
                    </form>
                    <a className="login" href="/registration">
                        <button>REGISTER</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;