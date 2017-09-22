import React, { Component } from 'react';

import { InlineHandyCenterContainer, Beschreibung, LogoContainer, Logo } from './TeamStyle';
import Tele from '../../img/tele-logo.png';
import Mail from '../../img/mail-logo.png';
import Face from '../../img/face-logo.png';
import Insta from '../../img/insta-logo.png';


export class SpecImage extends Component {
  render() {
    return(
      <div>
        <InlineHandyCenterContainer>
          <Beschreibung textMark />
          <Beschreibung blur />
          <Beschreibung first>
            <p className='fixedP'>
            <span className='bold'>Sandra-Bacher Schönfelder</span> <br />
          </p>
          <p className='fixedP topP'>
            Leitende Grafik-Designerin bei <br />
            DesignInTime
          </p>
          </Beschreibung>

          <LogoContainer first>
            <a href='tel:+4369919010202' >
              <Logo src={Tele}/>
            </a>
            <a href='mailto:office@designintime.at'>
              <Logo src={Mail}/>
            </a>
            <a target='_blank' href='https://www.facebook.com/search/top/?q=designintime'>
              <Logo src={Face}/>
            </a>
            <a target='_blank' href='https://www.instagram.com/designintime.at/?hl=de'>
              <Logo src={Insta}/>
            </a>
          </LogoContainer>
        </InlineHandyCenterContainer>
      </div>
    );
  }
}

export class SpecImage2 extends Component {
  render() {
    return(
      <div>
        <InlineHandyCenterContainer>
          <Beschreibung textMark />
          <Beschreibung blur />
          <Beschreibung second>
            <p className='fixedP'>
            <span className='bold'>Wenghofer Dominik</span> <br />
          </p>
          <p className='fixedP topP'>
            Front-End Developer bei <br />
            DesignInTime
          </p>
          </Beschreibung>
          <LogoContainer second>
            <a href='tel:+4369919010202' >
              <Logo src={Tele}/>
            </a>
            <a href='mailto:office@designintime.at'>
              <Logo src={Mail}/>
            </a>
            <a target='_blank' href='https://www.facebook.com/search/top/?q=designintime'>
              <Logo src={Face}/>
            </a>
            <a target='_blank' href='https://www.instagram.com/designintime.at/?hl=de'>
              <Logo src={Insta}/>
            </a>
          </LogoContainer>
        </InlineHandyCenterContainer>
      </div>
    );
  }
}
