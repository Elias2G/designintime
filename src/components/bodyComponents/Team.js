import React, { Component } from 'react';

import { TeamContainer } from './TeamStyle';
import { ImageH } from './ImageH';

export class Team extends Component {
  render() {
    return(
      <div>
        <TeamContainer>
          <ImageH />
        </TeamContainer>
      </div>
    );
  }
}
