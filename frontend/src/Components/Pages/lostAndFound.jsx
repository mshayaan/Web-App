import React, { Component } from "react";
import NavBar from "../navbar";
import Posts from "../CityNewsComponents/PostsSubmit";

class LostAndFound extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>

          <section>
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">Lost and Found</h3>
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

export default LostAndFound;
