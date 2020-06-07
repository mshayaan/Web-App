import React, { Component } from "react";
import NavBar from "../navbar.jsx";
import "./about.css";
import jwtDecode from "jwt-decode";
import Footer from "../HomePage/footer";
import shahzaib from "./img/shahzaib.jpg";
import shayaan from "./img/shayaan.jpg";
import mark from "./img/mark.jpg";
import sundar from "./img/sundar.jpg";
import company from "./img/company.jpg";

class About extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
    } catch (ex) {}
  }
  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        <div id="page">
          <section
            id="home"
            class="video-hero"
            //style="height: 500px; background-image: url(images/cover_img_1.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;"
            data-section="home"
          >
            <div class="overlay"></div>
            <div class="display-t display-t2 text-center">
              <div class="display-tc display-tc2">
                <div class="container">
                  <div class="col-md-12 col-md-offset-0">
                    <div class="animate-box">
                      <h2>Services</h2>
                      <p class="breadcrumbs">
                        <span>{/* <a href="index.html">Home</a> */}</span>{" "}
                        {/* <span>Services</span> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="colorlib-about">
            <div class="container">
              <div class="row row-pb-lg">
                <div class="col-md-6 animate-box">
                  <div
                    class="video colorlib-video"
                    // style="background-image: url(images/about.jpg);"
                  >
                    <img class="popup-vimeo" src={company} alt="" />

                    <div class="overlay"></div>
                  </div>
                </div>
                <div class="col-md-6 animate-box">
                  <h2>About SafeCity</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent sed dignissim tortor. Proin arcu mauris, euismod
                    quis accumsan in, sagittis eget augue. Donec maximus diam
                    metus, eget pretium eros mattis ut. Praesent convallis orci
                    id consectetur ornare. Integer facilisis mauris nibh, quis
                    commodo lectus gravida id. Etiam ultricies ex sapien, eget
                    pulvinar massa laoreet suscipit. Vestibulum sit amet
                    tincidunt ligula. Morbi a ultrices libero. Nunc non finibus
                    dolor, sit amet maximus diam.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                  <h2>Meet the team behind this awesome website</h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 text-center animate-box">
                  <div class="staff-entry">
                    <img src={shayaan} class="staff-img" alt="" />
                    <div class="desc">
                      <h3>Muhammad Shayaan</h3>
                      <span>Developer</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                      <p>
                        <ul class="colorlib-social-icons">
                          <li>
                            <a href="#">
                              <i class="icon-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-dribbble"></i>
                            </a>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 text-center animate-box">
                  <div class="staff-entry">
                    <img src={shahzaib} class="staff-img" alt="" />

                    <div class="desc">
                      <h3>Shahzaib Saleem</h3>
                      <span>Developer</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                      <p>
                        <ul class="colorlib-social-icons">
                          <li>
                            <a href="#">
                              <i class="icon-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-dribbble"></i>
                            </a>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 text-center animate-box">
                  <div class="staff-entry">
                    <img src={mark} class="staff-img" alt="" />

                    <div class="desc">
                      <h3>Mark Zuckerberg</h3>
                      <span>Developer</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                      <p>
                        <ul class="colorlib-social-icons">
                          <li>
                            <a href="#">
                              <i class="icon-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-dribbble"></i>
                            </a>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 text-center animate-box">
                  <div class="staff-entry">
                    <img src={sundar} class="staff-img" alt="" />

                    <div class="desc">
                      <h3>Sundar Pichai</h3>
                      <span>Developer</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                      <p>
                        <ul class="colorlib-social-icons">
                          <li>
                            <a href="#">
                              <i class="icon-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-dribbble"></i>
                            </a>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
