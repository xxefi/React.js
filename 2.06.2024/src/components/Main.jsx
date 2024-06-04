
import React from 'react';
import "../styles/Main.css"
function Main({goToLogin, goToRegister}) {
    return (
        <div>
            <div className="navbar-main">
                <div className="navbar-button">
                    <button onClick={goToLogin} className="login-button">Log In</button>
                    <button onClick={goToRegister} className="register-button">Register</button>
                </div>
            </div>
            <div className="form-one">
                <p>тут форма для добавления</p>
            </div>
            <div className="form-two">
                <p>тут список задач</p>
            </div>
        </div>
    )
}
export default Main;