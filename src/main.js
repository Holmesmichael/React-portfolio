import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './header.js';
import Experience from './experience.js';
import Education from './education.js';
import Contactme from './contactme.js';

class Main extends Component {
  render() {
    return (
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={Contact}></Route>
            </Switch>
    );
  }
}


export default Main;

const Home = () => (
    <div className='home'>
      <Header />
    </div>
  );
  
  const About = () => (
    <div className='about'>
      <Experience />
      <Education />
    </div>
  );
  
  const Contact = () => (
    <div className='contact'>
      <Contactme />
    </div>
  );