import React, { Component } from "react";
import NavBar from "../navbar";
import "./reportCrime.css";
import { reportCrime } from "../../services/reportCrimeService";
import jwtDecode from "jwt-decode";

class ReportCime extends Component {
  state = {
    data: {
      type: "Snatching",
      description: "",
      area: "",
      mobile_number: "",
      victimOrWitness: "Victim",
      reportedPolice: "Yes",
    },
    user: {},
  };

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
    } catch (ex) {}
  }

  onSubmit = async () => {
    const { data } = this.state;
    try {
      console.log("Submit clicked");
      const { data: crime } = await reportCrime(data);

      this.setState({
        data: {
          type: "Snatching",
          description: "",
          area: "",
          mobile_number: "",
          victimOrWitness: "Victim",
          reportedPolice: "Yes",
        },
        error: {},
        submissionSuccessful: true,
      });
    } catch (ex) {
      this.setState({ submissionSuccessful: false });

      console.log("Error");
    }
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        {/* <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100">
              <div class="login100-form-title">
                <span class="login100-form-title-1">Report your Crime </span>
              </div>

              <form class="login100-form validate-form">
                <div
                  class="wrap-input100 validate-input m-b-26"
                  data-validate="Username is required"
                >
                  <span class="label-input100">Name</span>
                  <input
                    class="input100"
                    type="text"
               yy     name="username"
                    placeholder="Enter username"
                  />
                  <span class="focus-input100"></span>
                  
                </div>

                <div
                  class="wrap-input100 validate-input m-b-18"
                >
                  <span class="label-input100">Age</span>
                  <input
                    class="input100"
                    type="password"
                    name="pass"
                    placeholder="Enter password"
                  />
                  <span class="focus-input100"></span>
                </div>
                

                <div class="flex-sb-m w-full p-b-30"> */}
        {/* <div class="contact100-form-checkbox">
                    <input
                      class="input-checkbox100"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                    />
                    <label class="label-checkbox100" for="ckb1">
                      Remember me
                    </label>
                  </div> */}

        {/* <div>
                    <a href="#" class="txt1">
                      Forgot Password?
                    </a>
                  </div> */}
        {/* </div>
<br>
</br>
<br></br>
                <div class="container-login100-form-btn">
                  <button class="login100-form-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br></br>
        <br></br> */}

        {/* Design 2 is here */}
        <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
          <div class="wrapper wrapper--w790">
            <div class="card card-5">
              <div class="card-heading">
                <h2 class="title">Crime Reporting Form</h2>
              </div>
              <div class="card-body">
                {/* <div class="form-row m-b-55">
                          <div class="form-row">
                            <div class="name">Name</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text" name="name"/>
                                </div>
                            </div>
                          </div>
                        </div> */}
                <div class="form-row">
                  <div class="name">Type of Crime</div>
                  <div class="value">
                    <div class="input-group">
                      <div class="rs-select2 js-select-simple select--no-search">
                        <select
                          value={this.state.data.type}
                          onChange={this.handleChange}
                          name="type"
                        >
                          <option disabled="disabled" selected="selected">
                            Choose option
                          </option>
                          <option>Snatching</option>
                          <option>Murder</option>
                          <option>Kidnapping</option>
                          <option>Assault</option>
                          <option>Rape</option>
                          <option>Child Abuse</option>
                          <option>Burglary</option>
                          <option>Abuse of Power</option>
                          <option>
                            Other (Mention details in description)
                          </option>
                        </select>
                        <div class="select-dropdown"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="name">Description</div>
                  <div class="value">
                    <div class="input-group">
                      <input
                        value={this.state.data.description}
                        onChange={this.handleChange}
                        name="description"
                        class="input--style-5"
                        type="text"
                        name="description"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="name">Area of Crime</div>
                  <div class="value">
                    <div class="input-group">
                      <input
                        value={this.state.data.area}
                        onChange={this.handleChange}
                        name="area"
                        class="input--style-5"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="name">Email</div>
                  <div class="value">
                    <div class="input-group">
                      <input
                        value={this.state.user.email}
                        class="input--style-5"
                        type="email"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="name">Phone</div>
                  <div class="value">
                    <div class="input-group">
                      <div class="input-group">
                        <input
                          value={this.state.data.mobile_number}
                          onChange={this.handleChange}
                          name="mobile_number"
                          class="input--style-5"
                          type="tel"
                          id="phone"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="name">Were you a victim or witness?</div>
                  <div class="value">
                    <div class="input-group">
                      <div class="rs-select2 js-select-simple select--no-search">
                        <select
                          value={this.state.data.victimOrWitness}
                          onChange={this.handleChange}
                          name="victimOrWitness"
                        >
                          <option disabled="disabled" selected="selected">
                            Choose option
                          </option>
                          <option>Victim</option>
                          <option>Witness</option>
                        </select>
                        <div class="select-dropdown"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="name"> Did you report to the police </div>
                  <div class="value">
                    <div class="input-group">
                      <div class="rs-select2 js-select-simple select--no-search">
                        <select
                          value={this.state.data.reportedPolice}
                          onChange={this.handleChange}
                          name="reportedPolice"
                        >
                          <option disabled="disabled" selected="selected">
                            Choose option
                          </option>
                          <option> Yes </option>
                          <option> No </option>
                        </select>
                        <div class="select-dropdown"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={this.onSubmit}
                    class="btn btn--radius-2 btn--red"
                    type="submit"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  <!-- MODAL --> */}
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal Title</h5>
                <button class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              {this.state.submissionSuccessful && (
                <div class="modal-body">Submission Successful</div>
              )}

              {!this.state.submissionSuccessful && (
                <div class="modal-body">Unable to submit the Crime Form</div>
              )}

              <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportCime;
