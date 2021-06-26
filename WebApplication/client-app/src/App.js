import {Switch, Route} from "react-router-dom";
import Login from "./features/authentication/login/Login";
import Home from "./app/Home"
import Register from "./features/authentication/registration/Register"

function App() {
  return (<Switch>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register} />
    <Route path="/" component={Home}/>
  </Switch>);
}

export default App;
