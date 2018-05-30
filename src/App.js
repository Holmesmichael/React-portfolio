import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation.js';
import Main from './main.js';



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

