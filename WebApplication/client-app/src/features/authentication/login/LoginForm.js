import {Field, Form, FormElement} from "@progress/kendo-react-form";
import {Input} from "@progress/kendo-react-inputs";
import {Button} from "@progress/kendo-react-buttons";
import {useState} from "react";
import {Error, FloatingLabel} from "@progress/kendo-react-labels";
import {Redirect} from "react-router-dom"

export default function LoginForm(props) {
    const [successfulLogin, setSuccessfulLogin] = useState(null);
    
    async function onSubmit(data) {
        let response = await fetch(window.location.origin + "/api/authentication/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: "follow",
            body: JSON.stringify(data)
        });
        setSuccessfulLogin(response.ok);
    }

    return <>
        {successfulLogin && <Redirect to="/"/>}
        <Form onSubmit={onSubmit} render={(renderProps) =>
                <FormElement className={props.className}>
                    <Field name="userName" label="Nazwa użytkownika" component={Input}/>
                    <Field name="password" label="Hasło" component={Input}/>
                    {successfulLogin === false && <Error>Nieudane logowanie, proszę spróbować ponownie</Error>}
                    <div className={"k-form-buttons k-buttons-end"}>
                        <Button type="submit">Zaloguj</Button>
                    </div>
                </FormElement>
        }/>
    </>
}