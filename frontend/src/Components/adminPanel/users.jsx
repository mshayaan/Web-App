import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import http from "../../services/httpService";
import { getUsers } from "../../services/getUsersService";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";

class Users extends Component {
  state = {
    users: [],
    pageSize: 8,
    currentPage: 1,

    count: 0,
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }
  counter = () => this.state.count + 1;

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { pageSize, currentPage, noOfUsers, users: allUsers } = this.state;
    const users = paginate(allUsers, currentPage, pageSize);
    return (
      <div>
        <NavigationBar></NavigationBar>

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
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td></td>
                          <td>
                            {user.first_name} {user.last_name}
                          </td>
                          <td>{user.email}</td>
                          <td>
                            <Link
                              to="details.html"
                              className="btn btn-secondary"
                            >
                              <FontAwesome className="fas fa-angle-double-right"></FontAwesome>{" "}
                              Details
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination
                    userCount={allUsers.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                  />
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
