import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar"

class categories extends Component {
  state = {};
  render() {
    return (
      <div>
       <NavigationBar></NavigationBar>

        {/* <!-- HEADER --> */}
        <header id="main-header" className="py-2 bg-success text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <FontAwesome className="fas fa-folder"></FontAwesome> Categories
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
                    placeholder="Search Categories..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-success">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- CATEGORIES --> */}
        <section id="categories">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h4>Latest Categories</h4>
                  </div>
                  <table className="table table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Web Development</td>
                        <td>May 10 2018</td>
                        <td>
                          <Link to="details.html" className="btn btn-secondary">
                            <FontAwesome className="fas fa-angle-double-right"></FontAwesome> Details
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Tech Gadgets</td>
                        <td>May 11 2018</td>
                        <td>
                          <Link to="details.html" className="btn btn-secondary">
                            <FontAwesome className="fas fa-angle-double-right"></FontAwesome> Details
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Business</td>
                        <td>May 13 2018</td>
                        <td>
                          <Link to="details.html" className="btn btn-secondary">
                            <FontAwesome className="fas fa-angle-double-right"></FontAwesome> Details
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Health & Wellness</td>
                        <td>May 15 2018</td>
                        <td>
                          <Link to="details.html" className="btn btn-secondary">
                            <FontAwesome className="fas fa-angle-double-right"></FontAwesome> Details
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

export default categories;
