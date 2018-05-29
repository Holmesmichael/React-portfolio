import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <nav>
          <ul>
            <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}


export default Navigation;

