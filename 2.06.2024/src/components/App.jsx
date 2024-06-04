
import '../styles/App.css';
import Login from "./Login"
import Register from "./Register"
import Main from "./Main"
import {useState} from "react";

function App() {
    const [page, setPage] = useState("main");

    function goToMain() {
        setPage("main");
    }

    function goToRegister() {
        setPage("register");
    }

    function goToLogin(){
        setPage("login");
    }

    return (
        <div className="App">
            {page === "login" && (
                <Login
                    goToMain={goToMain}
                    goToRegister={goToRegister}/>
            )}
            {page === "main" &&(
                <Main
                    goToLogin={goToLogin}
                    goToRegister={goToRegister}/>
            )}
            {page === "register" && (
                <Register
                    goToLogin={goToLogin}
                    goToMain={goToMain}/>
            )}
        </div>
    );
}

export default App;
