import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Admin extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> Hello I am Admin, Whatupppppppp! </h1>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
          <div class="container">
            <a href="index.html" class="navbar-brand">
              Blogen
            </a>
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav">
                <li class="nav-item px-2">
                  <a href="index.html" class="nav-link active">
                    Dashboard
                  </a>
                </li>
                <li class="nav-item px-2">
                  <a href="posts.html" class="nav-link">
                    Posts
                  </a>
                </li>
                <li class="nav-item px-2">
                  <a href="categories.html" class="nav-link">
                    Categories
                  </a>
                </li>
                <li class="nav-item px-2">
                  <a href="users.html" class="nav-link">
                    Users
                  </a>
                </li>
              </ul>

              <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown mr-3">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i class="fas fa-user"></i> Welcome Brad
                  </a>
                  <div class="dropdown-menu">
                    <a href="profile.html" class="dropdown-item">
                      <i class="fas fa-user-circle"></i> Profile
                    </a>
                    <a href="settings.html" class="dropdown-item">
                      <i class="fas fa-cog"></i> Settings
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="login.html" class="nav-link">
                    <i class="fas fa-user-times"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header id="main-header" class="py-2 bg-primary text-white">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1>
                  <i class="fas fa-cog"></i> Dashboard
                </h1>
              </div>
            </div>
          </div>
        </header>
        <section id="actions" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <a
                  href="#"
                  class="btn btn-primary btn-block"
                  data-toggle="modal"
                  data-target="#addPostModal"
                >
                  <i class="fas fa-plus"></i> Add Post
                </a>
              </div>
              <div class="col-md-3">
                <a
                  href="#"
                  class="btn btn-success btn-block"
                  data-toggle="modal"
                  data-target="#addCategoryModal"
                >
                  <i class="fas fa-plus"></i> Add Category
                </a>
              </div>
              <div class="col-md-3">
                <a
                  href="#"
                  class="btn btn-warning btn-block"
                  data-toggle="modal"
                  data-target="#addUserModal"
                >
                  <i class="fas fa-plus"></i> Add User
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="posts">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="card">
                  <div class="card-header">
                    <h4>Latest Posts</h4>
                  </div>
                  <table class="table table-striped">
                    <thead class="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Post One</td>
                        <td>Web Development</td>
                        <td>May 10 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Post Two</td>
                        <td>Tech Gadgets</td>
                        <td>May 11 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Post Three</td>
                        <td>Web Development</td>
                        <td>May 13 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Post Four</td>
                        <td>Business</td>
                        <td>May 15 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Post Five</td>
                        <td>Web Development</td>
                        <td>May 17 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Post Six</td>
                        <td>Health & Wellness</td>
                        <td>May 20 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card text-center bg-primary text-white mb-3">
                  <div class="card-body">
                    <h3>Posts</h3>
                    <h4 class="display-4">
                      <i class="fas fa-pencil-alt"></i> 6
                    </h4>
                    <a href="posts.html" class="btn btn-outline-light btn-sm">
                      View
                    </a>
                  </div>
                </div>

                <div class="card text-center bg-success text-white mb-3">
                  <div class="card-body">
                    <h3>Categories</h3>
                    <h4 class="display-4">
                      <i class="fas fa-folder"></i> 4
                    </h4>
                    <a
                      href="categories.html"
                      class="btn btn-outline-light btn-sm"
                    >
                      View
                    </a>
                  </div>
                </div>

                <div class="card text-center bg-warning text-white mb-3">
                  <div class="card-body">
                    <h3>Users</h3>
                    <h4 class="display-4">
                      <i class="fas fa-users"></i> 4
                    </h4>
                    <a href="users.html" class="btn btn-outline-light btn-sm">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="main-footer" class="bg-dark text-white mt-5 p-5">
          <div class="container">
            <div class="row">
              <div class="col">
                <p class="lead text-center">
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
    //This is a comment
  }
}

export default Admin;
