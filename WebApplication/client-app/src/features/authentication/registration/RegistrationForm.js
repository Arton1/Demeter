import {Field, Form, FormElement} from "@progress/kendo-react-form";
import {Input} from "@progress/kendo-react-inputs";
import {Button} from "@progress/kendo-react-buttons";
import {Error, FloatingLabel, Label} from "@progress/kendo-react-labels";
import {useState} from "react";
import {Redirect} from "react-router-dom";


export default function RegistrationForm(props){
    const [redirectPath, redirect] = useState(null);
    
    async function onSubmit(data){
        let response = await fetch(window.location.origin + "/api/authentication/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(response.ok)
            redirect("/login");
    }
    
    function passwordValidator(password){
        if(!password) return "Proszę wpisać hasło";
        if(password.length < 10) return "Hasło musi być dłuższe niż 9 znaków";
    }
    
    return <>
        {redirectPath && <Redirect to={redirectPath}/>}
        <Form onSubmit={onSubmit} render={(renderProps) =>
            <FormElement className={props.className}>
                <Field name="userName" label="Nazwa użytkownika" component={Input}/>
                <Field name="password" label="Hasło" component={Input} validator={passwordValidator}/>
                <div className={"k-form-buttons k-buttons-end"}>
                    <Button type="submit" disabled={!renderProps.allowSubmit}>Zarejestruj</Button>
                </div>
            </FormElement>
        }/>
    </>
}