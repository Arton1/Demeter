



export default function RegistrationForm(props){
    
    async function onSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData.entries());
        let response = await fetch(window.location.origin + "/api/authentication/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
    }
    
    return <form onSubmit={onSubmit}>
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
}