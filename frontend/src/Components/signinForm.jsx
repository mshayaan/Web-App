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
import "./signinForm.css"
import "bootstrap/dist/css/bootstrap.min.css";


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

        {/* Original Code is commented below, remove the other code below to return to original */}
        {/* <h1> Login </h1>{" "}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}

          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>{" "} */}

<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-b-160 p-t-50">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-43">
						Account Login
					</span>
					
					<div className="wrap-input100 rs1 validate-input" data-validate = "Username is required">
						<input className="input100" type="text" name="username"/>
						<span className="label-input100">Email</span>
					</div>
					
					
					<div className="wrap-input100 rs2 validate-input" data-validate="Password is required">
						<input className="input100" type="password" name="pass"/>
						<span className="label-input100">Password</span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Sign in
						</button>
					</div>
					
				
				</form>
			</div>
		</div>
	</div>
	

      </div>
    );
  }
}

export default LoginForm;
