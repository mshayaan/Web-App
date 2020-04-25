import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class details extends Component {
  state = {};
  render() {
    return (
      <div>
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
                  <a href="index.html" class="nav-link">
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
                    <FontAwesome class="fas fa-user"></FontAwesome> Welcome Brad
                  </a>
                  <div class="dropdown-menu">
                    <a href="profile.html" class="dropdown-item">
                      <FontAwesome class="fas fa-user-circle"></FontAwesome> Profile
                    </a>
                    <a href="settings.html" class="dropdown-item">
                      <FontAwesome class="fas fa-cog"></FontAwesome> Settings
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="login.html" class="nav-link">
                    <FontAwesome class="fas fa-user-times"></FontAwesome> Logout
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
                <h1>Post One</h1>
              </div>
            </div>
          </div>
        </header>

        <section id="actions" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <a href="index.html" class="btn btn-light btn-block">
                  <FontAwesome class="fas fa-arrow-left"></FontAwesome> Back To Dashboard
                </a>
              </div>
              <div class="col-md-3">
                <a href="index.html" class="btn btn-success btn-block">
                  <FontAwesome class="fas fa-check"></FontAwesome> Save Changes
                </a>
              </div>
              <div class="col-md-3">
                <a href="index.html" class="btn btn-danger btn-block">
                  <FontAwesome class="fas fa-trash"></FontAwesome> Delete Post
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="details">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card">
                  <div class="card-header">
                    <h4>Edit Post</h4>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label for="title">Title</label>
                        <input
                          type="text"
                          class="form-control"
                          value="Post One"
                        />
                      </div>
                      <div class="form-group">
                        <label for="category">Category</label>
                        <select class="form-control">
                          <option value="" selected>
                            Web Development
                          </option>
                          <option value="">Tech Gadgets</option>
                          <option value="">Business</option>
                          <option value="">Health & Wellness</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="image">Upload Image</label>
                        <div class="custom-file">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="image"
                          />
                          <label for="image" class="custom-file-label">
                            Choose File
                          </label>
                        </div>
                        <small class="form-text text-muted">Max Size 3mb</small>
                      </div>
                      <div class="form-group">
                        <label for="body">Body</label>
                        <textarea name="editor1" class="form-control">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellat culpa nam cumque voluptatum. Possimus
                          recusandae porro architecto officiis illo dignissimos
                          ratione aut officia reprehenderit! Iure cum numquam
                          fugit doloremque quis ullam illo odit, odio voluptates
                          non quisquam laboriosam consectetur quasi
                          perspiciatis! Sapiente minus aperiam nobis molestias
                          autem ut praesentium laudantium?
                        </textarea>
                      </div>
                    </form>
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

        <div class="modal fade" id="addPostModal">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header bg-primary text-white">
                <h5 class="modal-title">Add Post</h5>
                <button class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="category">Category</label>
                    <select class="form-control">
                      <option value="">Web Development</option>
                      <option value="">Tech Gadgets</option>
                      <option value="">Business</option>
                      <option value="">Health & Wellness</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="image">Upload Image</label>
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="image" />
                      <label for="image" class="custom-file-label">
                        Choose File
                      </label>
                    </div>
                    <small class="form-text text-muted">Max Size 3mb</small>
                  </div>
                  <div class="form-group">
                    <label for="body">Body</label>
                    <textarea name="editor1" class="form-control"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" data-dismiss="modal">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="addCategoryModal">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header bg-success text-white">
                <h5 class="modal-title">Add Category</h5>
                <button class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button class="btn btn-success" data-dismiss="modal">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="addUserModal">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header bg-warning text-white">
                <h5 class="modal-title">Add User</h5>
                <button class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="password2">Confirm Password</label>
                    <input type="password" class="form-control" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button class="btn btn-warning" data-dismiss="modal">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default details;
