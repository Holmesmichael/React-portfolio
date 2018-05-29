import React, { Component } from 'react';
import './App.css';
import image from './sergei-akulich-39018-unsplash.jpg';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <div className="Header-image">
            <img src={require('./sergei-akulich-39018-unsplash.jpg')} className="App-logo" />
            <h1>Michael Holmes</h1>
            <h5>Software Developer</h5>
          </div>
        </header>
    );
  }
}

export default Header;