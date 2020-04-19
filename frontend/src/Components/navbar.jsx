import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          SafeCity
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Report a Crime
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                View Safe Zones
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                City News
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Lost and Found
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <ul class="navbar-nav justify-content-end ">
            <li class="nav-item active">
              <Link class="nav-link" to="/signup">
                Login/SignUp
              </Link>
            </li>
            {/* <li class="nav-item active">
              <a class="nav-link" href="/signup">
                Login/SignUp
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
