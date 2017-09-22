import React, { Component } from 'react';
import './App.css';

import { ParallaxComponent } from './parralaxComponents/ParralaxBackground';
import { Header } from './headerComponents/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer.js';

import { SocialMedia } from './components/fixedComponents/SocialMedia';
import { Navigation } from './components/fixedComponents/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <SocialMedia />
        <div className='fixHeight'>
          <Header />
          <ParallaxComponent />
        </div>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
