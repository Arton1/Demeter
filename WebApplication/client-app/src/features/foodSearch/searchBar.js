import {Input} from "@progress/kendo-react-inputs";
import {Button} from "@progress/kendo-react-buttons"
import "./search.css"

export default function SearchBar(props){
    return <div className="searchBar">
        <Input className={"search-input"} placeholder="Wyszukaj"/>
        <Button className="search-button">Szukaj</Button>
    </div>
}