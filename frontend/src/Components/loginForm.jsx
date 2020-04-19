import React, { Component } from "react";
import Input from "./common/input";
import axios from "axios";

const apiEndpoint = "http://localhost:3000/api/signup";
class LoginForm extends Component {
  state = {
    account: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.firstName.trim() === "")
      errors.firstName = "First Name is required.";
    if (account.lastName.trim() === "")
      errors.lastName = "Last Name is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "firstName") {
      if (value.trim() === "") return "Username is required.";
      // ...
    }

    if (name === "email") {
      if (value.trim() === "") return "Email is required.";
      // ...
    }
  };
  // firstName = React.createRef();
  // middleName = React.createRef();
  // lastName = React.createRef();
  // email = React.createRef();
  // mobileNumber = React.createRef();
  // password = React.createRef();

  handleSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;
    // const firstName = this.firstName.current.value;
    // const middleName = this.middleName.current.value;
    // const lastName = this.lastName.current.value;
    // const email = this.email.current.value;
    // const mobileNumber = this.mobileNumber.current.value;
    // const password = this.password.current.value;

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

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1> Signup </h1>{" "}
        <form onSubmit={this.handleSubmit}>
          <Input
            name="firstName"
            value={account.firstName}
            label="First Name"
            onChange={this.handleChange}
            error={errors.firstName}
          />
          <Input
            name="middelName"
            value={account.middelName}
            label="Middle Name"
            onChange={this.handleChange}
          />
          <Input
            name="lastName"
            value={account.lastName}
            label="Last Name"
            onChange={this.handleChange}
            error={errors.lastName}
          />
          <Input
            name="email"
            value={account.email}
            label="Email"
            onChange={this.handleChange}
            // error={errors.email}
          />
          <Input
            name="mobileNumber"
            value={account.mobileNumber}
            label="Mobile Number"
            onChange={this.handleChange}
            // error={errors.mobileNumber}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            // error={errors.password}
          />
          <button type="submit" className="btn btn-primary">
            Login{" "}
          </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default LoginForm;
