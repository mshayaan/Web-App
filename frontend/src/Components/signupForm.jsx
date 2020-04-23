import React, { Component } from "react";
import http from "../services/httpService";
import * as userService from "../services/userService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";
import config from "../config.json";
import NavBar from "./navbar";

class RegistrationForm extends Form {
  state = {
    data: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    firstName: Joi.string().min(3).required().label("First Name"),
    middleName: Joi.string().required().label("Middle Name"),
    lastName: Joi.string().min(3).required().label("Last Name"),
    email: Joi.string()
      .email({
        minDomainAtoms: 2,
      })
      .label("Email"),
    mobileNumber: Joi.string()
      .regex(/^[0-9]{3,30}$/)
      .min(11)
      .max(11)
      .label("Mobile Number"),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .label("Password"),
  };

  // firstName = React.createRef();
  // middleName = React.createRef();
  // lastName = React.createRef();
  // email = React.createRef();
  // mobileNumber = React.createRef();
  // password = React.createRef();

  doSubmit = async () => {
    //call the server
    try {
      console.log("I might go in the exception loops");
      await userService.register(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("I have reached the exception loop");
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
    console.log("Looks like I didn't go in the exception loop");
  };

  render() {
    return (
      <div>
        <NavBar />
        <h1> Signup </h1>{" "}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("middleName", "Middle Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("mobileNumber", "Mobile Number")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Sign Up")}
        </form>{" "}
      </div>
    );
  }
}

export default RegistrationForm;
