import styled, { css } from 'styled-components';
import React, { Component } from 'react';

import { SpecImage, SpecImage2 } from './ImageSpecStyled';

import Handy from '../../img/iphone.png';

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
  transition: 300ms;
  ${props => props.firstStyle && css`
    margin-left: 50px;
  `}
  ${props => props.firstDown && css`
    &:hover {
      background-color: red;
      transform: translateX(50px);
      transition: 300ms;
    }
  `}
  ${props => props.first && css`
    z-index: 1;
  `}
  ${props => props.secondStyle && css`
    margin-left: -50px;
  `}
  ${props => props.secondDown && css`
    &:hover {
      background-color: red;
      transform: translateX(-50px);
      transition: 300ms;
    }
  `}
  ${props => props.second && css`
    z-index: 0;
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
    /*background-color: rgba(255,255,255,0.5);*/
    width: 245px;
    height: 287px;
    position: absolute;
    top: 72px;
    border-radius: 10px;
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
  padding: 5px 10px;
  width: 245px;
  height: 100px;
  position: absolute;
  top: calc(321px + 40px);
  color: #2b2b2b;
  font-family: Helvetica;
  font-size: 12pt;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.4);
  line-height: 18pt;
  ${props => props.blur && css`
    filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 1;
  `}
  ${props => props.textMark && css`
    height: 30px;
    z-index: 1;
    border-radius: 10px 10px 0 0;
  `}
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
  background-color: rgba(50, 50, 50, 0.7);
  ${props => props.first && css`
    z-index: 2;
  `}
  ${props => props.second && css`
    z-index: 1;
  `}
`;

export const Logo = styled.img`
  width:55px;
  margin-left: 7px;
  margin-top: 4px;
`;


export class SwitchableContainer extends Component {
  state = {
    toggleIndex1: true,
    toggleIndex2: false
  }

  handleOnClick1 = () => {
    if(!this.state.toggleIndex1) {
      this.setState({
        toggleIndex1: true,
        toggleIndex2: false
      })
    }else {
      this.setState({
        toggleIndex1: true,
        toggleIndex2: false
      })
    }
  }

  handleOnClick2 = () => {
    if(!this.state.toggleIndex2) {
      this.setState({
        toggleIndex1: false,
        toggleIndex2: true
      })
    }else {
      this.setState({
        toggleIndex1: false,
        toggleIndex2: true
      })
    }
  }


  render() {
    return(
      <div>
        <PositionContainer>
          <ImageContainer firstDown={this.state.toggleIndex2} firstStyle first={this.state.toggleIndex1} second={this.state.toggleIndex2}>
            <SpecImage />
            <Image src={Handy} onClick={this.handleOnClick1}/>
          </ImageContainer>

          <ImageContainer secondDown={this.state.toggleIndex1} secondStyle second={this.state.toggleIndex1} first={this.state.toggleIndex1}>
            <SpecImage2 />
            <Image src={Handy} onClick={this.handleOnClick2}/>
          </ImageContainer>
        </PositionContainer>
      </div>
    );
  }
}
