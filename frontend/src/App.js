import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

import RegistrationForm from "./Components/signupForm";
import LoginForm from "./Components/signinForm";
import Logout from "./Components/logout";
import "react-fontawesome";
import NavBar from "./Components/navbar";
import Home from "./Components/home.jsx";
import Admin from "./Components/adminPanel/admin";
import "./App.css";
import "./css/styles.css";
import Posts from "./Components/adminPanel/posts";
import categories from "./Components/adminPanel/categories";
import Users from "./Components/adminPanel/users";

// Note for Shayan: App.js is upto date, my code an your code was merged successfully
class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="content">
          <Switch>
            <Route path="/admin/categories" component={categories} />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/posts" component={Posts} />
            <Route path="/admin" component={Admin} />
            <Route path="/user/signup" component={RegistrationForm} />{" "}
            <Route path="/user/signin" component={LoginForm} />{" "}
            <Route path="/user/logout" component={Logout} />{" "}
            <Route path="/admin" component={Admin} />{" "}
            <Route path="/" component={Home} />{" "}
          </Switch>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
