import React, { Component } from 'react';

import { Image, InlineHandyCenterContainer, Beschreibung, LogoContainer } from './TeamStyle';
import Handy from '../../img/iphone.png';

export class SpecImage extends Component {
  render() {
    return(
      <div>
        <InlineHandyCenterContainer>
          <Image foto first/>
          <Beschreibung first>
            Hi
          </Beschreibung>
          <LogoContainer first>

          </LogoContainer>
        </InlineHandyCenterContainer>
        <Image src={Handy} />
      </div>
    );
  }
}

export class SpecImage2 extends Component {
  render() {
    return(
      <div>
        <InlineHandyCenterContainer>
          <Image foto second/>
          <Beschreibung second>
            Hi
          </Beschreibung>
          <LogoContainer second>

          </LogoContainer>
        </InlineHandyCenterContainer>
        <Image src={Handy} />
      </div>
    );
  }
}
