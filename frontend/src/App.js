import React, {
  Component
} from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Switch
} from "react-router-dom";
import LoginForm from "./Components/loginForm";
import NavBar from "./Components/navbar";
import Home from "./Components/home";
import Admin from "./Components/adminPanel/admin";
import "./App.css";
import "./css/styles.css";

class App extends Component {
  state = {};

  render() {
    return ( <div >
      <div className = "content" >
      < Switch >
      <
      Route path = "/user/signup"
      component = {
        LoginForm
      }
      /> <
      Route path = "/admin"
      component = {
        Admin
      }
      /> <
      Route path = "/"
      component = {
        Home
      }
      />

      </Switch> </div> </div>
    );
  }
}

export default App;