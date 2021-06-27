import {AppBar, AppBarSection} from "@progress/kendo-react-layout";
import {Link, NavLink} from "react-router-dom";
import "./header.css";
import SearchBar from "../../features/foodSearch/searchBar";

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
            <div className={"itemsContainer"}>
                <AppBarSection className="barSection">
                    <Link className="navLink clickable" to="/">
                        <h2 className="title">Demeter</h2>
                    </Link>
                </AppBarSection>
                <AppBarSection className="barSection">
                    <SearchBar/>
                </AppBarSection>
                <AppBarSection className="barSection">
                    <NavButtonList buttons={buttons}/>
                </AppBarSection>
            </div>
        </AppBar>;
}