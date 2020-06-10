import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import './stylesheets/LightboxImage.css';

import placeHolder from './images/place-holder.jpg';
import img1 from './images/stars.PNG';
import img2 from './images/wifi-cats.PNG';
import img3 from './images/seulgi-psycho.PNG';
import img4 from './images/q-camp.PNG';

const images = [
  img1, img2
];

export default class LightboxImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullImage: props.fullImage,
      isOpen: false,
    };
  }

  render() {
    const { fullImage, isOpen } = this.state;

    return (
      <div>
        <div className="seeMore" type="button" onClick={() => this.setState({ isOpen: true })}>
    
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={fullImage}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}
