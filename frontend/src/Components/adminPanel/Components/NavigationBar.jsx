import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "react-fontawesome";
import FontAwesome from "react-fontawesome";
import Modal from "react-modal";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
          <div className="container">
            <Link to="index.html" className="navbar-brand">
              SafeCity{" "}
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item px-2">
                  <Link to="/admin" className="nav-link active">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/admin/posts" className="nav-link">
                    Posts
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/admin/categories" className="nav-link">
                    Categories
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/admin/users" className="nav-link">
                    Users
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown mr-3">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <FontAwesome className="fas fa-user"></FontAwesome> Welcome
                    Brad
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/user/profile" className="dropdown-item">
                      <FontAwesome className="fas fa-user-circle"></FontAwesome>{" "}
                      Profile
                    </Link>
                    <Link to="/user/setting" className="dropdown-item">
                      <FontAwesome className="fas fa-cog"></FontAwesome>{" "}
                      Settings
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/user/signin" className="nav-link">
                    <FontAwesome className="fas fa-user-times"></FontAwesome>{" "}
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
