import React, { Component } from 'react';
import './App.css';
import './rsz_devcall_353x419.png';
import './rsz_1rps_353x419.png';
import './rsz_outdoorfilm_353x419.png';
import './naturescape_2_70.png';


class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <div className="whoami">
        <h2>Who am I?</h2>
          <br />
          <p>Hello! My name is Michael and I'm a Racine based software developer. I am passionate about code while expanding my skillset. Enjoy looking at my projects below to see what I can do.</p>
          <br />
          <br />
          <br />
        </div>
        <h2 className="jobs">Experience</h2>
            <br />
          <h3>Outdoor Film Festival</h3>
            <br/>
            <img src={require('./rsz_outdoorfilm_353x419.png')} className="Exp-logo" alt="logo" href="https://github.com/Holmesmichael/Outdoor-Film-Festival"/>
            <br />
            <p>Web demo for film festival using: HTML | CSS | Bootstrap</p>
            <br />
          <h3>Naturescape</h3>
            <br/>
            <img src={require('./naturescape_2_70.png')} className="Exp-logo" alt="logo" ahref="https://github.com/Holmesmichael/landscape" />
            <br />
            <p>Website refresh. Front-end: HTML | CSS | JS | Bootstrap | Back-end: Ruby on Rails</p>
            <br />
          <h3>Rock Paper Scissors</h3>
            <br/>
            <img src={require('./rsz_1rps_353x419.png')} className="Exp-logo" alt="logo" href="https://github.com/Holmesmichael/Rock-Paper-Scissors" />
            <br />
            <p>Command line game created in: | Pure Ruby |</p>
            <br />
          <h3>Dev Call</h3>
            <br/>
            <img src={require('./rsz_devcall_353x419.png')} className="Exp-logo" alt="logo" ahref="https://github.com/Holmesmichael/Dev_call" />
            <br />
            <p>Meetup.com Clone using: Front-end: HTML | CSS | Bootstrap Back-end: Ruby on Rails </p>
            <br />
            
          
      </div>
    );
  }
}

export default Experience;