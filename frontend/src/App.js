import React, {
  Component
} from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Switch
} from "react-router-dom";
import "react-fontawesome"
import LoginForm from "./Components/loginForm";
import NavBar from "./Components/navbar";
import Home from "./Components/home";
import Admin from "./Components/adminPanel/admin";
import "./App.css";
import "./css/styles.css";
import Posts from "./Components/adminPanel/posts";
import categories from "./Components/adminPanel/categories";
import Users from "./Components/adminPanel/users";

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
      />
      <
      Route path = "/admin/categories"
      component = {
        categories
      }
      />
      <
      Route path = "/admin/users"
      component = {
        Users
      }
      />
      <
      Route path = "/admin/posts"
      component = {
        Posts
      }
      />
        <
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