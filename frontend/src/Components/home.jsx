import React, { Component } from "react";
class Home extends Component {
  
  state = {};
  render() {
   return (
   <div>
   <div>
    <div class="jumbotron text-center">
      <h1>SafeCity App Home Page</h1>
      <p> </p>
    </div>
    <div class="row">

    <div class="col-lg-6">
      <h1 class="big-heading">Meet new and interesting dogs nearby.</h1>
      <button type="button" class="btn btn-dark btn-lg download-button"><i class="fab fa-apple"></i> Download</button>
      <button type="button" class="btn btn-outline-light btn-lg download-button"><i class="fab fa-google-play"></i> Download</button>
    </div>

    <div class="col-lg-6">
      <img class="title-image" src="../../images/iphone6.png" alt="iphone-mockup" />>
    </div>

  </div>

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
    )
      
    }
}

export default Home;
