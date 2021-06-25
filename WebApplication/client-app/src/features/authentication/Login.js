import "./Login.css"

export default function Login(props){
    return (<div className="login">
        <h1>Strona logowania</h1>
        <form>
            <div className="row">
                <label form="userName">Nazwa użytkownika</label>
                <input type="text" id="userName" name="userName"/>
            </div>
            <div className="row">
                <label form="password">Hasło</label>
                <input type="password" id="password" name="password"/>
            </div>
            <button>Zaloguj</button>
        </form>
    </div>)
}