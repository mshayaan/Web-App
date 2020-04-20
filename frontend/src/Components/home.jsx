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
                  Meet new and interesting dogs nearby.
                </h1>
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
                  src="images/iphone6.png"
                  alt="iphone-mockup"
                />
                >
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
                <p>So easy to use, even your dog could do it.</p>
              </div>

              <div class="feature-box col-lg-4">
                <i class="icon fas fa-bullseye fa-4x"></i>
                <h3 class="feature-title">Elite Clientele</h3>
                <p>We have all the dogs, the greatest dogs.</p>
              </div>

              <div class="feature-box col-lg-4">
                <i class="icon fas fa-heart fa-4x"></i>
                <h3 class="feature-title">Guaranteed to work.</h3>
                <p>Find the love of your dog's life or your money back.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="colored-section" id="testimonials">
        <div id="testimonial-carousel" class="carousel slide" data-ride="false">
      <div class="carousel-inner">
        <div class="carousel-item active container-fluid">
          <h2 class="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
          <img class="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>>
          <em>Pebbles, New York</em>
        </div>
        <div class="carousel-item container-fluid">
          <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img class="testimonial-image" src="images/lady-img.jpg" alt="lady-profile"/>>
          <em>Beverly, Illinois</em>
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


      </div>
    );
  }
}

export default Home;
