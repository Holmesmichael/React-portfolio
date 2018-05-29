import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom'


// Import sections //
import Navigation from './navigation.js';
import Main from './main.js';
import Header from './header.js';
import Experience from './experience.js';
import Education from './education.js';


// Import images //
import image from './sergei-akulich-39018-unsplash.jpg';
import devcall from './rsz_devcall_353x419.png';
import rps from './rsz_1rps_353x419.png';
import outdoorfilm from './rsz_outdoorfilm_353x419.png';
import naturescape from './naturescape_2_70.png';


class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="wrapper">
            <Navigation />
            <Main />
          </div>
        </div>
    );
  }
}

export default App;

