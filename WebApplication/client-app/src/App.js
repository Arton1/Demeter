import {Switch, Route, Link, NavLink} from "react-router-dom";
import Login from "./features/authentication/Login";
import Home from "./app/Home"
import Register from "./features/authentication/Register"

function App() {
  return (<Switch>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register} />
    <Route path="/" component={Home}/>
  </Switch>);
}

export default App;
