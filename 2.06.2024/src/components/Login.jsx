

import React from 'react';
import "../styles/Login.css"
function Login({goToMain, goToRegister}) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleLoginClick(){
        if (username === "" || password === ""){
            alert("Заполните поля");
            return;
        }
        goToMain();
    }
    return (
      <div className="container">
          <h1>Log In</h1>
          <div className="data">
              <input
                  className="username"
                  type="text"
                  placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}/>
              <input
                  className="password"
                  type="password"
                  placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}/>
              <button onClick={handleLoginClick} className="loginbutton">Log In</button>
              <button onClick={goToRegister} className="registerbutton">Register</button>
          </div>

      </div>
    );
}

export default Login;