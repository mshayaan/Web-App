import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./Components/loginForm";
import NavBar from "./Components/navbar";
import Home from "./Components/home";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/signup" component={LoginForm} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
