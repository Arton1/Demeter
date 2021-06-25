import "./Login.css";

export default function Register(props){
    return (<div className="login">
        <h1>Strona rejestracji</h1>
        <form>
            <div className="row">
                <label form="userName">Nazwa użytkownika</label>
                <input type="text" id="userName" name="userName"/>
            </div>
            <div className="row">
                <label form="password">Hasło</label>
                <input type="password" id="password" name="password"/>
            </div>
            <button>Zarejestruj</button>
        </form>
    </div>)
}