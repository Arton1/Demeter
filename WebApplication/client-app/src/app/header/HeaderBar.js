import {AppBar, AppBarSection, TabStrip, TabStripTab} from "@progress/kendo-react-layout";
import {Link, NavLink} from "react-router-dom";
import "./header.css";

const buttons = [
    {
        name: "Login",
        href: "/login"
    },
    {
        name: "Rejestracja",
        href: "/register"
    }
]

function NavButtonList(props) {
    return <ul className="navButtonList">
        {props.buttons.map(({name, href}) => 
            <li>
                <NavLink className="listItem navLink clickable" to={href} activeClassName="selectedButton" exact>
                    {name}
                </NavLink>
            </li>
        )}
    </ul>
}

export default function HeaderBar(props){
    return <AppBar className="bar">
        <AppBarSection>
            <Link className="navLink clickable" to="/"><h2 className="title">Hello</h2></Link>
        </AppBarSection>
        <AppBarSection>
            <NavButtonList buttons={buttons}/>
        </AppBarSection>
    </AppBar>;
}