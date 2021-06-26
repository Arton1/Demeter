import {Switch, Route} from "react-router-dom";
import "@progress/kendo-theme-default/dist/all.css"

import Login from "./features/authentication/login/Login";
import Home from "./app/Home"
import Register from "./features/authentication/registration/Register"
import HeaderBar from "./app/header/HeaderBar";

function App() {
  return (<>
      <HeaderBar/>
      <div className="body">
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register} />
            <Route path="/" component={Home}/>
          </Switch>
      </div>
    </>);
}

export default App;
