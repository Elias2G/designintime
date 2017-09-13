import styled, { css } from 'styled-components';
import React, { Component } from 'react';
import { Team } from './Team';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `
}

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;
  ${ media.handheld`

  ` }
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
`;

const GreatText = styled.h1`
  font-family: Helvetica;
  font-size: 40pt;
  ${ media.handheld`
    font-size: 20pt;
  ` }
`;

export class BodyStyle extends Component {
  render() {
    return(
      <div>
        <BodyContainer>
          <CenteredContainer>
            <GreatText>
              WEIL GUTE IDEEN ZEITLOS SIND
            </GreatText>
          </CenteredContainer>
          <div>
            <Team />
          </div>
        </BodyContainer>
      </div>
    );
  }
}
