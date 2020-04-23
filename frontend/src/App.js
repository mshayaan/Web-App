import React, {
  Component
} from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Switch
} from "react-router-dom";

import RegistrationForm from "./Components/signupForm";
import LoginForm from "./Components/signinForm";
import Logout from "./Components/logout";
import NavBar from "./Components/navbar";
import Home from "./Components/home";
import Admin from "./Components/adminPanel/admin";
import "./App.css";
import "./css/styles.css";

class App extends Component {
  state = {};



  render() {
    return ( <
        div >
        <
        div className = "content" >
        <
        Switch >
        <
        Route path = "/user/signup"
        component = {
          RegistrationForm
        }
        />{" "} <
        Route path = "/user/signin"
        component = {
          LoginForm
        }
        />{" "} {
        " "
      } <
      Route path = "/user/logout"
    component = {
      Logout
    }
    />{" "}  <
    Route path = "/admin"
    component = {
      Admin
    }
    />{" "} <
    Route path = "/"
    component = {
      Home
    }
    /> < /
    Switch > {
        " "
      } <
      /div>{" "} < /
    div >
  );
}
}

export default App;