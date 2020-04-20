import React, { Component } from "react";
import Iphone from "../images/iphone6.png"
import dogimage from "../images/dog-img.jpg"
import ladyimage from "../images/lady-img.jpg"
import techcrunch from "../images/TechCrunch.png"
import tnw from "../images/tnw.png"
import bizinsider from "../images/bizinsider.png"
import mashable from "../images/mashable.png"


class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        
        <section class="colored-section" id="title">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <a class="navbar-brand" href="">
                SafeCity
              </a>
            </nav>
            <div></div>

            <div class="row">
              <div class="col-lg-6">
                <h1 class="big-heading">
                Lorem ipsum dolor sit amet</h1>
                <button
                  type="button"
                  class="btn btn-dark btn-lg download-button"
                >
                  <i class="fab fa-apple"></i> Download
                </button>
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg download-button"
                >
                  <i class="fab fa-google-play"></i> Download
                </button>
              </div>

              <div class="col-lg-6">
                <img
                  class="title-image"
                  src={Iphone}
                  alt="iphone-mockup"
                />
                
              </div>
            </div>
          </div>
        </section>

        <section class="white-section" id="features">
          <div class="container-fluid">
            <div class="row">
              <div class="feature-box col-lg-4">
                <i class="icon fas fa-check-circle fa-4x"></i>
                <h3 class="feature-title">Easy to use.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>

              <div class="feature-box col-lg-4">
                <i class="icon fas fa-bullseye fa-4x"></i>
                <h3 class="feature-title">Elite Clientele</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>

              <div class="feature-box col-lg-4">
                <i class="icon fas fa-heart fa-4x"></i>
                <h3 class="feature-title">Guaranteed to work.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
          </div>
        </section>
        <section class="colored-section" id="testimonials">
        <div id="testimonial-carousel" class="carousel slide" data-ride="false">
      <div class="carousel-inner">
        <div class="carousel-item active container-fluid">
          <h2 class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>
          <img class="testimonial-image" src={dogimage} alt="dog-profile"/>
          <em>Shahzaib, New York</em>
        </div>
        <div class="carousel-item container-fluid">
          <h2 class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>
          <img class="testimonial-image" src={ladyimage} alt="lady-profile"/>
          <em>Shayaan, Illinois</em>
        </div>
      </div>
      <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon"></span>
      </a>
    </div>


          </section>
          <section class="colored-section" id="press">
    <img class="press-logo" src={techcrunch} alt="tc-logo"/>
    <img class="press-logo" src={tnw} alt="tnw-logo"/>
    <img class="press-logo" src={bizinsider} alt="biz-insider-logo"/>
    <img class="press-logo" src={mashable} alt="mashable-logo"/>

  </section>

  <section class="white-section" id="pricing">

<h2 class="section-heading">A Plan for Everyone's Needs</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

<div class="row">

  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Card 1</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">Free</h2>
        <p>5 Matches Per Day</p>
        <p>10 Messages Per Day</p>
        <p>Unlimited App Usage</p>
        <button class="btn btn-lg btn-block btn-outline-dark" type="button">Sign Up</button>
      </div>
    </div>
  </div>

  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Card 2</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">$49 / mo</h2>
        <p>Unlimited Matches</p>
        <p>Unlimited Messages</p>
        <p>Unlimited App Usage</p>
        <button class="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
      </div>
    </div>
  </div>

  <div class="pricing-column col-lg-4">
    <div class="card">
      <div class="card-header">
        <h3>Card 3</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">$99 / mo</h2>
        <p>Pirority Listing</p>
        <p>Unlimited Matches</p>
        <p>Unlimited Messages</p>
        <p>Unlimited App Usage</p>
        <button class="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>

      </div>
    </div>
  </div>



</div>

</section>

<section class="colored-section" id="cta">

    <div class="container-fluid">

      <h3 class="big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h3>
      <button class="download-button btn btn-lg btn-dark" type="button"><i class="fab fa-apple"></i> Download</button>
      <button class="download-button btn btn-lg brn-light" type="button"><i class="fab fa-google-play"></i> Download</button>
    </div>
  </section>

  <footer class="white-section" id="footer">
    <div class="container-fluid">
      <i class="social-icon fab fa-facebook-f"></i>
      <i class="social-icon fab fa-twitter"></i>
      <i class="social-icon fab fa-instagram"></i>
      <i class="social-icon fas fa-envelope"></i>
      <p>© Copyright 2020 Shayaan</p>
    </div>
  </footer>


      </div>
    );
  }
}

export default Home;
