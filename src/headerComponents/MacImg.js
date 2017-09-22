import React, { Component } from 'react';

import { Mac, MacContainerImg, VideoToggleButton, VideoAnimateEffect, VideoContainer, CenterContent, Frame, Triangle } from './styles/MacStyles';

import MacImg from '../img/mac.png';

export class MacImgContainer extends Component {
  state = {
    videoToggle: false,
    animate: false
  }

  handleClick = () => {
    this.setState({
      videoToggle: !this.state.videoToggle,
      animate: true
    })
  }

  render() {
    if(!this.state.videoToggle) {
      return(
        <div>
          <MacContainerImg>
            <Mac src={MacImg} />
            <div className='fixIt'>
              <VideoToggleButton effect onClick={this.handleClick}>
                <Triangle />
              </VideoToggleButton>
              <VideoAnimateEffect />
            </div>
          </MacContainerImg>
        </div>
      );
    }else {
      return(
        <div>
          <MacContainerImg>
            <Mac src={MacImg} />
          </MacContainerImg>
          <div>
            <VideoContainer onClick={this.handleClick} videoZoom={this.state.animate}/>
          </div>
          <CenterContent>
            <Frame ifFrameZoom src="https://www.youtube.com/embed/cCPT9Yx70gU" frameBorder="0" allowFullScreen>
            </Frame>
          </CenterContent>
        </div>
      );
    }
  }
}
