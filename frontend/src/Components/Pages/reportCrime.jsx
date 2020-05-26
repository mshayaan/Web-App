import React, { Component } from "react";
import NavBar from "../navbar";
import "./reportCrime.css";

class ReportCime extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="limiter">
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
                    name="username"
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
                

                <div class="flex-sb-m w-full p-b-30">
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
                </div>
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
        <br></br>
      </div>
    );
  }
}

export default ReportCime;
