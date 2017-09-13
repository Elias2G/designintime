import styled, { css } from 'styled-components';
import React, { Component } from 'react';

import { SpecImage, SpecImage2 } from './ImageSpecStyled';

export const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  background-color: #ebebeb;
  position: absolute;
`;

const PositionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 700px;
  background-color: #2b2b2b;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: auto;
  background-color: grey;
  float: left;
  position: absolute;
  ${props => props.first && css`
    z-index: 1;
    margin-left: 50px;
  `}
  ${props => props.second && css`
    z-index: 0;
    margin-left: -50px;
  `}
`;

export const InlineHandyCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center:
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  position: relative;
  ${props => props.foto && css`
    background-color: rgba(255,255,255,0.5);
    width: 255px;
    height: 287px;
    position: absolute;
    top: 72px;
    outline: none;
  `}
  ${props => props.first && css`
    z-index: 2;
  `}
  ${props => props.second && css`
    z-index: 1;
  `}
`;

export const Beschreibung = styled.p`
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  width: 255px;
  height: 100px;
  position: absolute;
  top: calc(321px + 40px);
  background-color: rgba(255,255,255,0.5);
  ${props => props.first && css`
    z-index: 2;
  `}
  ${props => props.second && css`
    z-index: 1;
  `}
`;

export const LogoContainer = styled.div`
  width: 255px;
  height: 65px;
  position: absolute;
  top: calc(423px + 40px);
  background-color: rgba(255,255,255,0.5);
  ${props => props.first && css`
    z-index: 2;
  `}
  ${props => props.second && css`
    z-index: 1;
  `}
`;


export class SwitchableContainer extends Component {
  render() {
    return(
      <div>
        <PositionContainer>
          <ImageContainer first>
            <SpecImage />
          </ImageContainer>

          <ImageContainer second>
            <SpecImage2 />
          </ImageContainer>
        </PositionContainer>
      </div>
    );
  }
}
