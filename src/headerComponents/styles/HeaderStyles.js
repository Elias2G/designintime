import styled, { css } from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 500px) {
      ${ css(...args) }
    }
  `
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index:5;
  width: 100%;
`;

export const Image = styled.img`
  width: 500px;
  ${ media.handheld`
    width: 100%;
  ` }
`;
