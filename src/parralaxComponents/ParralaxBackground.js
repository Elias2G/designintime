import React, { Component } from 'react';

import { MainBackground, Img } from './ParralaxStyledComponents.js';
import Bg_1 from '../img/bg_1.png';
import Bg_2 from '../img/bg_2.png';

import Parallax from 'parallax-js';

export class ParallaxComponent extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene)
  }
  componentWillUnmount() {
    this.parallax.disable()
  }

  render() {
    return(
      <div>
      <div className='overFlowHidden'>
        <div ref={div => this.scene = div} className='parallaxContainer'>
          <Img src={Bg_1} data-depth='0.10' />
          <Img src={Bg_2} data-depth='0.05' />
          <MainBackground data-depth='0.15' imgFlower />
          <MainBackground imgFace data-depth='0.15'/>
        </div>
      </div>
    </div>
    );
  }
}
