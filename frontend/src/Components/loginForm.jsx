import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";
import NavBar from "./navbar";
import axios from "axios";

const apiEndpoint = "http://localhost:3000/api/signup";
class LoginForm extends Form {
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

  doSubmit = () => {
    // //call the server
    // const obj = {
    //   first_name: firstName,
    //   middle_name: middleName,
    //   last_name: lastName,
    //   email: email,
    //   mobile_number: mobileNumber,
    //   password: password,
    //   confirm_password: password,
    // };
    // const { data: user } = await axios.post(apiEndpoint, obj);
    // console.log("submitted");
    // console.log(user);
    //------------------------------
    // console.log(`first name is ${firstName}`);
    // console.log(`middle name is ${middleName}`);
    // console.log(`last name name is ${lastName}`);
    // console.log(`email is ${email}`);
    // console.log(`mobile number name is ${mobileNumber}`);
    // console.log(`password is ${password}`);
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <NavBar />
        <h1> Signup </h1>{" "}
        <form onSubmit={this.handleSubmit}>
          <Input
            name="firstName"
            value={data.firstName}
            label="First Name"
            onChange={this.handleChange}
            error={errors.firstName}
          />
          <Input
            name="middleName"
            value={data.middelName}
            label="Middle Name"
            onChange={this.handleChange}
          />
          <Input
            name="lastName"
            value={data.lastName}
            label="Last Name"
            onChange={this.handleChange}
            error={errors.lastName}
          />
          <Input
            name="email"
            value={data.email}
            label="Email"
            onChange={this.handleChange}
            error={errors.email}
          />
          <Input
            name="mobileNumber"
            value={data.mobileNumber}
            label="Mobile Number"
            onChange={this.handleChange}
            error={errors.mobileNumber}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Login{" "}
          </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default LoginForm;
