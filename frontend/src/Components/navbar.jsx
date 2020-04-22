import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">
          SafeCity
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="#">
                About Us
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Report a Crime
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                View Safe Zones
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                City News
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Lost and Found
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#">
                Disabled
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-end ">
            <li className="nav-item active">
              <Link className="nav-link" to="/user/signup">
                Login/SignUp
              </Link>
            </li>
            {/* <li className="nav-item active">
              <a className="nav-link" to="/signup">
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
