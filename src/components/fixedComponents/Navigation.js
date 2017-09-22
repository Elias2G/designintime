import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';

const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `
}

const spawn1 = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const spawn2 = keyframes`
  10% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const spawn3 = keyframes`
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const spawn4 = keyframes`
  30% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const NavContainer = styled.div`
  box-sizing: border-box;
  width: 220px;
  height: 220px;
  /*border: 1px solid #2b2b2b;*/
  position: fixed;
  top: calc((100% / 280) + 33%);
  z-index: 10000;

  ${props => props.open && css`
    background-color: rgba(255,255,255,0.5);
    animation: ${spawn4} 5s foreward;
  `}
`;

const MenüButton = styled.p`
  font-size: 18pt;
  text-align: center;
  width: 100px;
  height: 30px;
  transform: rotate(-90deg);
  position: inherit;
  z-index: 5;
  /*border: 1px solid #2b2b2b;*/
  cursor: pointer;
  margin-top: 85px;
  transition: 400ms;
  border-bottom: 1px solid #ebebeb;

  &:hover {
    border-bottom: 1px solid #2b2b2b;
    transition: 200ms;
  }

  ${props => props.list && css`
    opacity: 0;
    transform: rotate(0deg);
    left: 100px;
    position: relative;
    margin-top: 0px;
    border-bottom: 1px solid #ebebeb;
  `}

  ${props => props.first && css `
    animation: ${spawn1} 5s forwards;
    margin-top: 9px;
  `}
  ${props => props.second && css `
    animation: ${spawn2} 4s forwards;
  `}
  ${props => props.third && css `
    animation: ${spawn3} 4s forwards;
  `}
  ${props => props.fourth && css `
    animation: ${spawn4} 4s forwards;
  `}
`;

export class Navigation extends Component {
  state = {
    navOpen: false
  }

  handleOnClick = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    if(this.state.navOpen) {
      return(
        <div>
          <NavContainer open>
            <MenüButton onClick={this.handleOnClick}>
              CLOSE
            </MenüButton>
            <MenüButton list first>Agentur</MenüButton>
            <MenüButton list second>Portfolio</MenüButton>
            <MenüButton list third>Kunden</MenüButton>
            <MenüButton list fourth>Kontakt</MenüButton>
          </NavContainer>
        </div>
      );
    } else {
      return(
        <div>
          <NavContainer>
            <MenüButton onClick={this.handleOnClick}>
              MENÜ
            </MenüButton>
          </NavContainer>
        </div>
      );
    }
  }
}
