import React, { Component } from "react";
import NavBar from "../navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cityNews.css";
import image from "./img/user.png";
import Footer from "../HomePage/footer";
import Posts from "../CityNewsComponents/PostsSubmit";

class cityNews extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <link href="css/bootstrap.css" rel="stylesheet" />

          <section>
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">Wall</h3>
                  </div>
                  <div class="panel-body">
                    <form>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          placeholder="Write on the wall"
                        ></textarea>
                      </div>

                      <button type="submit" class="btn btn-default">
                        Submit
                      </button>
                      
                    </form>
                  </div>
                </div>
                <Posts></Posts>
                <Posts></Posts>
               <Posts></Posts>
               <Posts></Posts>
              </div>
             </div>
          </div>
        </section>
      </div>
    );
  }
}

export default cityNews;
