import React, {useState} from 'react';
import logo from './logo.svg';
import "../css/Style.css"
import axios from 'axios'

const Registration = () => {

    const [newUser, setNewUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    const handleInput = (event) => {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }

    /*
        function handleSubmit(event){
          event.preventDefault();

            const options ={
            method: 'POST',
            url: 'users/add',
            headers: {'Content-Type': 'application/json'},
            data:{
              name: newUser.name,
              surname: newUser.surname,
              email: newUser.email,
              password: newUser.password
            }
          }

          console.log("Nowy user to:" + newUser);
          axios.request(options)
          .then(response => console.log(response))
          .catch(err => console.log(err));
        } */

    function handleSubmit(event) {
        event.preventDefault()
        console.log(newUser)
        axios.post('users/add', newUser)
            .then(function (response) {
                console.log(response.data.token);
                //sessionStorage.setItem('token', response.data.token);
                window.location.href = '/';
            })
            .catch(function (error) {
                console.log("Brak dostepu");
            });

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
                    <form className="login-elem" onSubmit={handleSubmit}>
                        <input className="name" name="name" type="text" placeholder="Your Name" onChange={handleInput}/>
                        <input className="surname" name="surname" type="text" placeholder="Your Surname"
                               onChange={handleInput}/>
                        <input className="email" name="email" type="text" placeholder="Write Your email"
                               onChange={handleInput}/>
                        <input className="password" name="password" type="password" placeholder="Set Password"
                               onChange={handleInput}/>
                        <button type="submit">REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;