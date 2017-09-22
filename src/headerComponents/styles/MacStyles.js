import styled, { css, keyframes } from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `
}

const scale = keyframes`
  0% {
    transform: scale(0.25);
    opacity: 0;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    transform: scale(1.0);
  }
`;

const animate = keyframes`
  from {
    border: 2px solid white;
    opacity: 1;
  }
  to {
    border: 2px solid white;
    transform: scale(1.4);
    opacity: 0;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: black;
  opacity: 0.8;
  z-index: 20;
  ${props => props.videoZoom && css`
    animation: ${scale} 2s;
  `}
`;

export const CenterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: absolute;
`;

export const Mac = styled.img`
  max-width: 600px;
  width: 100%;
  z-index:9;
  ${ media.handheld`
    width: 100%;
    min-width: 280px;
  ` }
`;

export const MacContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  width: 100%;
  top: 450px;
  ${ media.handheld`
    top: 350px;
  ` }
`;

export const VideoAnimateEffect = styled.div`
  border: 2px solid white;
  max-width: 125px;
  max-height: 125px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  z-index: 10;

  animation: ${animate} 2s infinite;
  ${ media.handheld`
    max-width: 80px;
    max-height: 80px;
  `}
`;

export const VideoToggleButton = styled.button`
  max-width: 130px;
  max-height: 130px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  z-index: 11;

  ${ media.handheld`
    max-width: 90px;
    max-height: 90px;
  ` }
  ${props => props.effect && css`
    border: 5px solid white;
    background-color: rgba(0,0,0,0);
    transition: 200ms;

    &:hover {
      background-color: white;
      transition: 200ms;
      cursor: pointer;
    }
  `}
`;

export const Triangle = styled.div`
margin-left: 37px;
width: 0;
height: 0;
border-style: solid;
border-width: 30px 0 30px 60px;
border-color: transparent transparent transparent #007bff;
line-height: 0px;
border-color: rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) rgba(255,255,255,1);
filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');

${ media.handheld`
  margin-left: 30px;
  border-width: 15px 0 15px 30px;
` }
`;

export const Frame = styled.iframe`
  position: fixed;
  z-index: 21;
  max-width: 950px;
  max-height: 600px;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  ${props => props.ifFrameZoom && css`
    animation: ${scale} 2s;
  `}
  ${ media.handheld`
    max-height: 250px;
    max-width: 420px;
  `}
`;
