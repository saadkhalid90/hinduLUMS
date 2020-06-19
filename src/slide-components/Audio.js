import React, { Component } from 'react';
import styles from './css-modules/audio_video.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './css-modules/overwrite_audio_player.scss';

class AudioLink extends Component {
  constructor(props) {
    super(props);
    this.state = {color: '#D00024'}
  }

  componentDidMount() {
    if (this.props.inverted === true) {
      this.setState({
        color: '#FFEB3B'
      })
    }
  }

  render () {
    return (
      <div className={styles.audioLink_container}>
        {this.props.audio_title && <p className={styles.audioLinkMessage} style={{color: this.state.color}}>Listen to <i>{this.props.audio_title}</i> narrated by {this.props.narrated_by}</p>}
        {this.props.source && <p className={styles.audioLinkSource} style={{color: this.state.color}}>Source: {this.props.source}</p>}
        {this.props.link &&   <AudioPlayer showJumpControls={false} showLoopControl={false} src={this.props.link} onPlay={e => console.log("onPlay")}/>
}
      </div>
    )
  }
}

export default AudioLink;
