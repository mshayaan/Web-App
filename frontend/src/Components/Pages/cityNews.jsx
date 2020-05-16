import React, { Component } from "react";
import NavBar from "../navbar";

class cityNews extends Component {
  state = {};
  render() {
    return (
      <div>
        )<NavBar></NavBar>
        <h1>City News Component</h1>
        <nav class="navbar navbar-default">
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="members.html">Members</a>
                </li>
                <li>
                  <a href="groups.html">Groups</a>
                </li>
                <li>
                  <a href="photos.html">Photos</a>
                </li>
                <li>
                  <a href="profile.html">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
                      <div class="pull-right">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default">
                            <i class="fa fa-pencil"></i> Text
                          </button>
                          <button type="button" class="btn btn-default">
                            <i class="fa fa-file-image-o"></i> Image
                          </button>
                          <button type="button" class="btn btn-default">
                            {" "}
                            <i class="fa fa-file-video-o"></i> Video
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="panel panel-default post">
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-sm-2">
                        <a class="post-avatar thumbnail" href="profile.html" />
                        <img src="img/user.png" />
                        <div class="text-center" />
                        DevUser1
                      </div>{" "}
                      {/* </a>*/}
                      <div class="likes text-center">7 Likes</div>
                    </div>
                    <div class="col-sm-10">
                      <div class="bubble">
                        <div class="pointer">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In tincidunt eget ante eget feugiat. Praesent
                            adipiscing tortor eu tincidunt tempus. Sed convallis
                            est in ante sodales, sit amet consectetur leo
                            commodo.{" "}
                          </p>
                        </div>
                        <div class="pointer-border"></div>
                      </div>
                      <p class="post-actions">
                        <a href="#">Comment</a> - <a href="#">Like</a> -{" "}
                        <a href="#">Follow</a> - <a href="#">Share</a>{" "}
                      </p>
                      <div class="comment-form">
                        <form class="form-inline">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputName2"
                              placeholder="Enter Comment"
                            />
                          </div>
                          <button type="submit" class="btn btn-default">
                            Add
                          </button>
                        </form>
                      </div>
                      <div class="clearfix"></div>

                      <div class="comments">
                        <div class="comment">
                          <a class="comment-avatar pull-left" href="#">
                            <img src="img/user.png" />
                          </a>
                          <div class="comment-text">
                            <p>
                              Sed convallis est in ante sodales, sit amet
                              consectetur leo commodo.
                            </p>
                          </div>
                        </div>
                        <div class="clearfix"></div>

                        <div class="comment">
                          <a class="comment-avatar pull-left" href="#">
                            <img src="img/user.png" />
                          </a>
                          <div class="comment-text">
                            <p>
                              Sed convallis est in ante sodales, sit amet
                              consectetur leo commodo.
                            </p>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="panel panel-default post">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-sm-2">
                      <a class="post-avatar thumbnail" href="profile.html">
                        <img src="img/user.png" />
                        <div class="text-center">DevUser2</div>
                      </a>
                      <div class="likes text-center">7 Likes</div>
                    </div>
                    <div class="col-sm-10">
                      <div class="bubble">
                        <div class="pointer">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In tincidunt eget ante eget feugiat. Praesent
                            adipiscing tortor eu.{" "}
                          </p>
                        </div>
                        <div class="pointer-border"></div>
                      </div>
                      <p class="post-actions">
                        <a href="#">Comment</a> - <a href="#">Like</a> -{" "}
                        <a href="#">Follow</a> - <a href="#">Share</a>{" "}
                      </p>
                      <div class="comment-form">
                        <form class="form-inline">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputName2"
                              placeholder="Enter Comment"
                            />
                          </div>
                          <button type="submit" class="btn btn-default">
                            Add
                          </button>
                        </form>
                      </div>
                      <div class="clearfix"></div>

                      <div class="comments">
                        <div class="comment">
                          <a class="comment-avatar pull-left" href="#">
                            <img src="img/user.png" />
                          </a>
                          <div class="comment-text">
                            <p>
                              Sed convallis est in ante sodales, sit amet
                              consectetur leo commodo.
                            </p>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="panel panel-default post">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-sm-2">
                      <a class="post-avatar thumbnail" href="profile.html" />
                      <img src="img/user.png" />
                      <div class="text-center" />
                      DevUser3
                    </div>
                    <div class="likes text-center">2 Likes</div>
                  </div>
                  <div class="col-sm-10">
                    <div class="bubble">
                      <div class="pointer">
                        <p>
                          Adipiscing elit. In tincidunt eget ante eget feugiat.
                          Praesent adipiscing tortor eu tincidunt tempus. Sed
                          convallis est in ante sodales, sit amet consectetur
                          leo commodo.{" "}
                        </p>
                      </div>
                      <div class="pointer-border"></div>
                    </div>
                    <p class="post-actions">
                      <a href="#">Comment</a> - <a href="#">Like</a> -{" "}
                      <a href="#">Follow</a> - <a href="#">Share</a>{" "}
                    </p>
                    <div class="comment-form">
                      <form class="form-inline">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputName2"
                            placeholder="Enter Comment"
                          />
                        </div>
                        <button type="submit" class="btn btn-default">
                          Add
                        </button>
                      </form>
                    </div>
                    <div class="clearfix"></div>

                    <div class="comments">
                      <div class="comment">
                        <a class="comment-avatar pull-left" href="#">
                          <img src="img/user.png" />
                        </a>
                        <div class="comment-text">
                          <p>
                            Sed convallis est in ante sodales, sit amet
                            consectetur leo commodo.
                          </p>
                        </div>
                      </div>
                      <div class="clearfix"></div>

                      <div class="comment">
                        <a class="comment-avatar pull-left" href="#">
                          <img src="img/user.png" />
                        </a>
                        <div class="comment-text">
                          <p>
                            Sed convallis est in ante sodales, sit amet
                            consectetur leo commodo.
                          </p>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="panel panel-default friends">
            <div class="panel-heading">
              <h3 class="panel-title">My Friends</h3>
            </div>
            <div class="panel-body">
              <ul>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
                <li>
                  <a class="thumbnail" href="profile.html">
                    <img src="img/user.png" />
                  </a>
                </li>
              </ul>
              <div class="clearfix"></div>
              <a class="btn btn-primary" href="#">
                View All Friends
              </a>
            </div>
          </div>

          <div class="panel panel-default groups">
            <div class="panel-heading">
              <h3 class="panel-title">Latest Groups</h3>
            </div>
            <div class="panel-body">
              <div class="group-item">
                <img src="img/group.png" />
                <h4>
                  <a href="#">Sample Group One</a>
                </h4>
                <p>This is a Dobble social network sample group</p>
              </div>
              <div class="clearfix"></div>
              <div class="group-item">
                <img src="img/group.png" />
                <h4>
                  <a href="#">Sample Group One</a>
                </h4>
                <p>This is a Dobble social network sample group</p>
              </div>
              <div class="clearfix"></div>
              <div class="group-item">
                <img src="img/group.png" />
                <h4>
                  <a href="#">Sample Group One</a>
                </h4>
                <p>This is a Dobble social network sample group</p>
              </div>
              <div class="clearfix"></div>
              <a class="btn btn-primary" href="#">
                View All Groups
              </a>
            </div>
          </div>
        </div>
      </div>
      //   </div>
      //   </section>

      // <footer>
      //   <div class="container">
      //     <p>Dobble Copyright &copy; 2015, All Rights Reserved</p>
      //   </div>
      // </footer>

      //         </div>
      //         </div>
    );
  }
}

export default cityNews;
