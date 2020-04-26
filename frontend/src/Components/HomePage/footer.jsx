import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";

class Footer extends Component {
    state = {  }
    render() { 
        return ( <div>
            <footer className="white-section" id="footer">
          <div className="container-fluid">
            <FontAwesome className="social-icon fab fa-facebook-f"></FontAwesome>
            <FontAwesome className="social-icon fab fa-twitter"></FontAwesome>
            <FontAwesome className="social-icon fab fa-instagram"></FontAwesome>
            <FontAwesome className="social-icon fas fa-envelope"></FontAwesome>
            <p>© Copyright 2020 Shayaan</p>
          </div>
        </footer>

        </div> );
    }
}
 
export default Footer;