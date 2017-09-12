import styled, { css } from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `
}

export const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;
  ${ media.handheld`

  ` }
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
`;

export const GreatText = styled.h1`
  font-family: Helvetica;
  font-size: 40pt;
`;
