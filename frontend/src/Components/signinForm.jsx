import React, { Component } from "react";
import http from "../services/httpService";
import { login } from "../services/authService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";
import config from "../config.json";
import NavBar from "./navbar";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .email({
        minDomainAtoms: 2,
      })
      .label("Email"),

    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .label("Password"),
  };

  doSubmit = async () => {
    //call the server
    const { email, password } = this.state.data;
    try {
      const { data: jwt } = await login(email, password);
      console.log(jwt);
      localStorage.setItem("token", jwt);
      // this.props.history.push("/");
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <h1> Login </h1>{" "}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}

          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>{" "}
      </div>
    );
  }
}

export default LoginForm;
