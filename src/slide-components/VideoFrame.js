import React, { Component } from 'react';
import styles from './css-modules/audio_video.module.css';
import Iframe from 'react-iframe'

class VideoFrame extends Component {
  render () {
    return (
      <div className={styles.video_container}>
        <Iframe className={styles.video_iframe} url={this.props.link}></Iframe>
      </div>
    )
  }
}

export default VideoFrame;
