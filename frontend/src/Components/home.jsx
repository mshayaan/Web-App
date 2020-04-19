import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="jumbotron text-center">
          <h1>SafeCity App Home Page</h1>
          <p> </p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
