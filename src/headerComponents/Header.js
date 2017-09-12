import React, { Component } from 'react';

import { Container, Image } from './styles/HeaderStyles';
import Logo from '../img/logo.png';

import { MacImgContainer } from './MacImg';

export class Header extends Component {
  render() {
    return(
      <div>
        <Container>
          <Image src={Logo} />
        </Container>
        <MacImgContainer />
      </div>
    );
  }
}
