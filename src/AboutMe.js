import React from 'react';

import './stylesheets/AboutMe.css';

import placeHolder from './images/place-holder.jpg';

function AboutMe() {
  return (
    <div className = "aboutContainer">
      <div className= "aboutColumn">
        <img src = {placeHolder} alt = "my face"/>
      </div>
      <div className = "aboutColumn">
        <div className = "aboutText">
          <h1> about me </h1>
          <div id = "about"> Hi there! I'm Trang and abtmeabtmeabtmeabtmeabtmeabtme
          abtmeabtmeabtmeabtmeabtmeabtmeabtmeabtmeabtme
          abtmeabtmeabtmeabtmeabtmeabtmeabtmeabtmeabtme!</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
