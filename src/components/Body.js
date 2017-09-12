import React, { Component } from 'react';

import{ BodyContainer, GreatText, CenteredContainer } from './bodyComponents/BodyStyles';

export class Body extends Component {
  render() {
    return(
      <div>
        <BodyContainer>
          <CenteredContainer>
            <GreatText>
              WEIL GUTE IDEEN ZEITLOS SIND
            </GreatText>
          </CenteredContainer>
        </BodyContainer>
      </div>
    );
  }
}
