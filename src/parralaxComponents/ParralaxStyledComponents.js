import styled, { css } from 'styled-components';

import BgFlower from '../img/flower_1.png';
import BgFlowerFace from '../img/flower_face.png';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `
}

export const MainBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  ${props => props.imgFlower && css`
    background-image: url(${BgFlower});
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;
    width: 75%;
    margin-left: -430px;
    margin-top: -510px;
    ${ media.handheld`
      opacity: 0;
    ` }
  `}

  ${props => props.imgFace && css`
    background-image: url(${BgFlowerFace});
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;
    width: 75%;
    margin-left: 565px;
    margin-top: -300px;
    ${ media.handheld`
      opacity: 0;
    ` }
  `}
`;

export const Img = styled.img`
  width: 100%;
  opacity: 0.5;
  background-size: cover;
  position: absolute;
  z-index: 0;
`;
