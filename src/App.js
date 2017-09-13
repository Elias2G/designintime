import React, { Component } from 'react';
import './App.css';

import { ParallaxComponent } from './parralaxComponents/ParralaxBackground';
import { Header } from './headerComponents/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
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
