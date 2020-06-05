import React from 'react';

import placeHolder from './images/place-holder.jpg';
import img1 from './images/stars.PNG';
import img2 from './images/wifi-cats.PNG';
import img3 from './images/seulgi-psycho.PNG';
import img4 from './images/q-camp.PNG';

import './stylesheets/Artworks.css';

function Artworks() {
  return (
    <div className="row">
      <div className="column">
        <div className = "imgWithText">
          <img src= {img1}/>
          <div className ="title">Title here</div>
        </div>
        <div className = "imgWithText">
          <img src= {img2}/>
          <div className ="title">Title here</div>
        </div>
        <div className = "imgWithText">
          <img src= {img3}/>
          <div className ="title">Title here</div>
        </div>
        <div className = "imgWithText">
          <img src= {img4}/>
          <div className ="title">Title here</div>
        </div>
      </div>
      <div className="column">
      <div className = "imgWithText">
        <img src= {placeHolder}/>
        <div className ="title">Title here</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <div className ="title">Title here</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <div className ="title">Title here</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <div className ="title">Title here</div>
      </div>
      </div>
      <div className="column">
      <div className = "imgWithText">
        <img src= {placeHolder}/>
        <div className ="title">Title here</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <div className ="title">Title here</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <div className ="title">Title here</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <div className ="title">Title here</div>
      </div>
      </div>
    </div>
  );
};

export default Artworks;
