import React, { Component } from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';


class Contactme extends Component {
  render() {
    return (
      <div className="contact">
        <h3>Contact Me</h3>
        <p>You can reach me via email: <strong>Holmes.M.Andrew@gmail.com</strong></p>
        <SocialIcon url="http://github.com/Holmesmichael" />  <SocialIcon url="http://instagram.com/holmes__michael/?hl=en" />
      </div>
    );
  }
}


export default Contactme;
