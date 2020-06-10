import React from 'react';
import LightboxImage from "./LightboxImage"

import placeHolder from './images/place-holder.jpg';
import img1 from './images/stars.PNG';
import img2 from './images/wifi-cats.PNG';
import img3 from './images/seulgi-psycho.PNG';
import img4 from './images/q-camp.PNG';

import './stylesheets/Artworks.css';

class Artworks extends React.Component {
  render() {
  return (
    <div className="row">
      <div className="column">
        <div className = "imgWithText">
          <img src= {img1}/>
          <LightboxImage fullImage={img1}/>
          <div className ="title">Title here <br/>(click to see more)</div>
        </div>
        <div className = "imgWithText">
          <img src= {img2}/>
          <LightboxImage fullImage={img2}/>
          <div className ="title">Title here <br/>(click to see more)</div>
        </div>
        <div className = "imgWithText">
          <img src= {img3}/>
          <LightboxImage fullImage={img3}/>
          <div className ="title">Title here <br/>(click to see more)</div>
        </div>
        <div className = "imgWithText">
          <img src= {img4}/>
          <LightboxImage fullImage={img4}/>
          <div className ="title">Title here <br/>(click to see more)</div>
        </div>
      </div>
      <div className="column">
      <div className = "imgWithText">
        <img src= {placeHolder}/>
        <LightboxImage fullImage={placeHolder}/>
        <div className ="title">Title here <br/>(click to see more)</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <LightboxImage fullImage={placeHolder}/>
        <div className ="title">Title here <br/>(click to see more)</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <LightboxImage fullImage={placeHolder}/>
        <div className ="title">Title here <br/>(click to see more)</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <LightboxImage fullImage={placeHolder}/>
        <div className ="title">Title here <br/>(click to see more)</div>
      </div>
      </div>
      <div className="column">
      <div className = "imgWithText">
        <img src= {placeHolder}/>
        <LightboxImage fullImage={placeHolder}/>
        <div className ="title">Title here <br/>(click to see more)</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <LightboxImage fullImage={placeHolder}/>
        <div className ="title">Title here <br/>(click to see more)</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <LightboxImage fullImage={placeHolder}/>
        <div className ="title">Title here <br/>(click to see more)</div>
      </div><div className = "imgWithText">
        <img src= {placeHolder}/>
        <LightboxImage fullImage={placeHolder}/>
        <div className ="title">Title here <br/>(click to see more)</div>
      </div>
      </div>
    </div>
  );
};
};

export default Artworks;
