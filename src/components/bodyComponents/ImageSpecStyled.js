import React, { Component } from 'react';

import { Image, InlineHandyCenterContainer, Beschreibung, LogoContainer } from './TeamStyle';


export class SpecImage extends Component {
  render() {
    return(
      <div>
        <InlineHandyCenterContainer>
          <Image foto first/>
          <Beschreibung first>
            Sandra-Bacher Schönfelder <br />
            Leitende Grafik-Designerin bei <br />
            DesignInTime
          </Beschreibung>
          <LogoContainer first>

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
          <Image foto second/>
          <Beschreibung second>
            Wenghofer Dominik <br />
            Front-End Developer bei <br />
            DesignInTime
          </Beschreibung>
          <LogoContainer second>

          </LogoContainer>
        </InlineHandyCenterContainer>
      </div>
    );
  }
}
