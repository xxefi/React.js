
import React from 'react';
import "../styles/Register.css"
function Register({goToMain, goToLogin}) {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit() {
        if (username === "" || email === "" || password === "") {
            alert("Заполните поля");
            return;
        }
        goToMain();
    }
    return (
        <div className="container-register">
            <h1>Register</h1>
            <div className="data-register">
                <input className="username" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                <input className="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input className="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={handleSubmit} className="registerbutton">Register</button>
                <button onClick={goToLogin} className="loginbutton">Log In</button>
            </div>
        </div>
    );
}
export default Register;