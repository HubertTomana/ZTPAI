import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="content">
    <div className="container">
        <div className="upper">
        <img src={logo} className="App-logo" alt="logo" />
            PUZZLE
            CAKE
        </div>
        <div className="login-container">
            <form className="login" action="login" method="POST">
                <div className="messages">
                </div>
                <input name="email" type="text" placeholder="Email"></input>
                <input name="password" type="password" placeholder="Password"></input>
                <button type="submit">LOGIN</button>
            </form>
            <a className="login" href="http://localhost:8080/registration">
                <button>REGISTER</button>
            </a>
        </div>
    </div>
</div>
  );
}

export default App;
