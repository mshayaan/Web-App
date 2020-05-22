import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import RegistrationForm from "./Components/signupForm";
import jwtDecode from "jwt-decode";
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
import Details from "./Components/adminPanel/details";
import Profile from "./Components/adminPanel/profile";
import Settings from "./Components/adminPanel/settings";
import cityNews from "./Components/Pages/cityNews";
import LostAndFound from "./Components/Pages/lostAndFound";
import ReportCime from "./Components/Pages/reportCrime";
import ViewSafeZone from "./Components/Pages/viewSafeZone";
import About from "./Components/Pages/about";

// Note for Shayan: App.js is upto date, my code an your code was merged successfully
class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
    } catch (ex) {
      console.log("Exception occured");
    }
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <div className="content">
          <Switch>
            <Route path="/citynews" component={cityNews} />
            <Route path="/lostandfound" component={LostAndFound} />{" "}
            <Route path="/reportcrime" component={ReportCime} />{" "}
            <Route path="/safezones" component={ViewSafeZone} />{" "}
            <Route path="/about" component={About} />{" "}
            <Route path="/admin/categories" component={categories} />{" "}
            <Route path="/admin/users" component={Users} />{" "}
            <Route path="/admin/posts" component={Posts} />{" "}
            <Route
              path="/admin"
              component={Admin}
              //   render = {
              //     props => {
              //       if (!user.isAdmin) return <Redirect to = "/user/signin" / > ;
              //       return <Admin {
              //         ...props
              //       }
              //       />
              //     }
              // }
            />{" "}
            <Route path="/details" component={Details} />{" "}
            <Route path="/user/profile" component={Profile} />{" "}
            <Route path="/user/setting" component={Settings} />
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
