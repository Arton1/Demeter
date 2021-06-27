import "./Login.css"
import LoginForm from "./LoginForm";

export default function Login(props){
    return (<div className="login">
        <h1>Logowanie</h1>
        <LoginForm className="loginForm"/>
    </div>)
}