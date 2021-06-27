import RegistrationForm from "./RegistrationForm";
import "./Register.css"

export default function Register(props){
    return (<div className="register">
        <h1>Rejestracja</h1>
        <RegistrationForm className="registrationForm"/>
    </div>)
}