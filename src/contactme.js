import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom'

class Contactme extends Component {
  render() {
    return (
      <div className="contact">
        <h3>Contact Me</h3>
        <p>You can reach me via email: <strong>Holmes.M.Andrew@gmail.com</strong></p>
      </div>
    );
  }
}


export default Contactme;