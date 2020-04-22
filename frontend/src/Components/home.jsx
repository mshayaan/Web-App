import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Iphone from "../images/iphone6.png";
import dogimage from "../images/dog-img.jpg";
import ladyimage from "../images/lady-img.jpg";
import techcrunch from "../images/TechCrunch.png";
import tnw from "../images/tnw.png";
import NavBar from "./navbar";
import bizinsider from "../images/bizinsider.png";
import mashable from "../images/mashable.png";
import "react-fontawesome"
import FontAwesome from "react-fontawesome";


class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <section className="colored-section" id="title">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="">
                Safe City
              </a>
            </nav>
            <div></div>

            <div className="row">
              <div className="col-lg-6">
                <h1 className="big-heading">Lorem ipsum dolor sit amet</h1>
                <button
                  type="button"
                  className="btn btn-dark btn-lg download-button"
                >
                  <FontAwesome className="fab fa-apple"></FontAwesome> Download
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg download-button"
                >
                  <FontAwesome className="fab fa-google-play"></FontAwesome> Download
                </button>
              </div>

              <div className="col-lg-6">
                <img className="title-image" src={Iphone} alt="iphone-mockup" />
              </div>
            </div>
          </div>
        </section>

        <section className="white-section" id="features">
          <div className="container-fluid">
            <div className="row">
              <div className="feature-box col-lg-4">
                <FontAwesome className="icon fas fa-check-circle fa-4x"></FontAwesome>
                <h3 className="feature-title">Easy to use.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>

              <div className="feature-box col-lg-4">
                <FontAwesome className="icon fas fa-bullseye fa-4x"></FontAwesome>
                <h3 className="feature-title">Elite Clientele</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>

              <div className="feature-box col-lg-4">
                <FontAwesome className="icon fas fa-heart fa-4x"></FontAwesome>
                <h3 className="feature-title">Guaranteed to work.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="colored-section" id="testimonials">
          <div
            id="testimonial-carousel"
            className="carousel slide"
            data-ride="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active container-fluid">
                <h2 className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </h2>
                <img
                  className="testimonial-image"
                  src={dogimage}
                  alt="dog-profile"
                />
                <em>Lorem, New York</em>
              </div>
              <div className="carousel-item container-fluid">
                <h2 className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </h2>
                <img
                  className="testimonial-image"
                  src={ladyimage}
                  alt="lady-profile"
                />
                <em>Shayaan, Illinois</em>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#testimonial-carousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#testimonial-carousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </section>
        <section className="colored-section" id="press">
          <img className="press-logo" src={techcrunch} alt="tc-logo" />
          <img className="press-logo" src={tnw} alt="tnw-logo" />
          <img className="press-logo" src={bizinsider} alt="biz-insider-logo" />
          <img className="press-logo" src={mashable} alt="mashable-logo" />
        </section>

        <section className="white-section" id="pricing">
          <h2 className="section-heading">A Plan for Everyone's Needs</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>

          <div className="row">
            <div className="pricing-column col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>Card 1</h3>
                </div>
                <div className="card-body">
                  <h2 className="price-text">Free</h2>
                  <p>5 Matches Per Day</p>
                  <p>10 Messages Per Day</p>
                  <p>Unlimited App Usage</p>
                  <button
                    className="btn btn-lg btn-block btn-outline-dark"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div className="pricing-column col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>Card 2</h3>
                </div>
                <div className="card-body">
                  <h2 className="price-text">$49 / mo</h2>
                  <p>Unlimited Matches</p>
                  <p>Unlimited Messages</p>
                  <p>Unlimited App Usage</p>
                  <button
                    className="btn btn-lg btn-block btn-dark"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div className="pricing-column col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3>Card 3</h3>
                </div>
                <div className="card-body">
                  <h2 className="price-text">$99 / mo</h2>
                  <p>Pirority Listing</p>
                  <p>Unlimited Matches</p>
                  <p>Unlimited Messages</p>
                  <p>Unlimited App Usage</p>
                  <button
                    className="btn btn-lg btn-block btn-dark"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="colored-section" id="cta">
          <div className="container-fluid">
            <h3 className="big-heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </h3>
            <button
              className="download-button btn btn-lg btn-dark"
              type="button"
            >
              <FontAwesome className="fab fa-apple"></FontAwesome> Download
            </button>
            <button
              className="download-button btn btn-lg brn-light"
              type="button"
            >
              <FontAwesome className="fab fa-google-play"></FontAwesome> Download
            </button>
          </div>
        </section>

        <footer className="white-section" id="footer">
          <div className="container-fluid">
            <FontAwesome className="social-icon fab fa-facebook-f"></FontAwesome>
            <FontAwesome className="social-icon fab fa-twitter"></FontAwesome>
            <FontAwesome className="social-icon fab fa-instagram"></FontAwesome>
            <FontAwesome className="social-icon fas fa-envelope"></FontAwesome>
            <p>© Copyright 2020 Shayaan</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
