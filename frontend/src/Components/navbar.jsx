import React, { Component } from "react";
import Dropdown from "react-dropdown";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    const { user } = this.props;
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
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/reportcrime">
                Report a Crime
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/safezones">
                View Safe Zones
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/citynews">
                City News
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/lostandfound">
                Lost and Found
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
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
            </li> */}
          </ul>
          <ul className="navbar-nav justify-content-end ">
            {!user && (
              <React.Fragment>
                <li className="nav-item active">
                  <Link className="nav-link" to="/user/signin">
                    Login
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/user/signup">
                    Signup
                  </Link>
                </li>
              </React.Fragment>
            )}
            {/* {user && (
              <React.Fragment>
                <li className="nav-item active">
                  <Link className="nav-link" to="/user/profile">
                    Hi {user.first_name}
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/user/logout">
                    Logut
                  </Link>
                </li>
              </React.Fragment>
            )} */}
            {user && (
              <React.Fragment>
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
                    {user.first_name} {user.last_name}
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/user/logout">
                      Logout
                    </Link>
                    <Link className="dropdown-item" to="/user/profile">
                      My Profile
                    </Link>
                  </div>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
