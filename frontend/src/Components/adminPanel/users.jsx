import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
          <div className="container">
            <Link to="/admin" className="navbar-brand">
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
                  <Link to="/admin" className="nav-link">
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
                  <Link to="/admin/users" className="nav-link active">
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
                    <Link to="profile.html" className="dropdown-item">
                      <FontAwesome className="fas fa-user-circle"></FontAwesome>{" "}
                      Profile
                    </Link>
                    <Link to="settings.html" className="dropdown-item">
                      <FontAwesome className="fas fa-cog"></FontAwesome>{" "}
                      Settings
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="login.html" className="nav-link">
                    <FontAwesome className="fas fa-user-times"></FontAwesome>{" "}
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <!-- HEADER --> */}
        <header id="main-header" className="py-2 bg-warning text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <FontAwesome className="fas fa-users"></FontAwesome> Users
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- SEARCH --> */}
        <section id="search" className="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Users..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-warning">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- USERS --> */}
        <section id="users">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h4>Latest Users</h4>
                  </div>
                  <table className="table table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>jdoe@gmail.com</td>
                        <td>
                          <Link to="details.html" className="btn btn-secondary">
                            <FontAwesome className="fas fa-angle-double-right"></FontAwesome>{" "}
                            Details
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Harry White</td>
                        <td>harry@yahoo.com</td>
                        <td>
                          <Link to="details.html" className="btn btn-secondary">
                            <FontAwesome className="fas fa-angle-double-right"></FontAwesome>{" "}
                            Details
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Mary Johnson</td>
                        <td>mary@gmail.com</td>
                        <td>
                          <Link to="details.html" className="btn btn-secondary">
                            <FontAwesome className="fas fa-angle-double-right"></FontAwesome>{" "}
                            Details
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- FOOTER --> */}
        <footer id="main-footer" className="bg-dark text-white mt-5 p-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="lead text-center">
                  Copyright &copy;
                  <span id="year"></span>
                  Blogen
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Users;
