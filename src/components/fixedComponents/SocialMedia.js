import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Facebook from '../../img/face-logo.png';
import Instagram from '../../img/insta-logo.png';
import Youtube from '../../img/youtube-logo.png';
import Pinterest from '../../img/pin-logo.png';
import Google from '../../img/google-logo.png';

const media = {
  handheld: (...args) => css`
    @media (max-width: 750px) {
      ${ css(...args) }
    }
  `
}

var SiteBar = styled.div`
  box-sizing: border-box;
  width: 60px;
  height: 280px;
  /*border: 1px solid #2b2b2b;*/
  position: fixed;
  z-index: 100000;
  right: 0;
  min-height: 280px;
  top: calc((100% / 280) + 33%);
  padding: 3px;

  ${media.handheld`
    width: 280px;
    height: 60px;
    min-height: 60px;
    bottom: 0;
    top: none;
    border: 1px solid black;
  `}
`;

var LogoContainer = styled.div`
  width:50px;
  height:50px;
  /*border: 1px solid #2b2b2b;*/
  margin-bottom: 3px;
`;

var Logo = styled.img`
  width: inherit;
  height: auto;
`;

export class SocialMedia extends Component {
  render() {
    return(
      <div>
        <SiteBar>
          <LogoContainer>
            <Logo src={Facebook}/>
          </LogoContainer>
          <LogoContainer>
            <Logo src={Instagram}/>
          </LogoContainer>
          <LogoContainer>
            <Logo src={Youtube}/>
          </LogoContainer>
          <LogoContainer>
            <Logo src={Pinterest}/>
          </LogoContainer>
          <LogoContainer>
            <Logo src={Google}/>
          </LogoContainer>
        </SiteBar>
      </div>
    );
  }
}
