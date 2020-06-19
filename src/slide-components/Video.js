import React, { Component } from 'react';
import styles from './css-modules/audio_video.module.css';
import slideStyles from './css-modules/slide.module.css';
import { MdChevronRight } from "react-icons/md";

class VideoLink extends Component {
  constructor(props) {
    super(props);
    this.state = {color: '#D00024', sourceColor: '#D00024'}
  }

  componentDidMount() {
    if (this.props.inverted === true) {
      this.setState({
        color: '#FFEB3B',
        sourceColor: '#FFEB3B'
      })
    }
  }

  executeMouseOver = () => {
    var chev = document.getElementById("mdChev");
    chev.style.transform = "scale(1.15)";
  }

  executeMouseOut = () => {
    var chev = document.getElementById("mdChev");
    chev.style.transform = "scale(1)";
  }

  render () {
    return (
      <div className={styles.audioLink_container} onClick={()=> this.props.setDisplayedOverlay(this.props.overlayArray)}>
        <div onMouseOver={() => this.executeMouseOver()} onMouseOut={() => this.executeMouseOut()} className={`${styles.imageContainer} ${slideStyles.imgBorder}`} style={this.props.imageStyle}>
          <div id="mdChev" className={styles.playChevContainer}><MdChevronRight className={styles.playChev}/></div>
          <img alt="" src={this.props.image} id={styles.videoImage}/>
        </div>
        {this.props.linkMessage && <span className={styles.videoLinkMessage} style={{color: this.state.color}}>{this.props.linkMessage}</span>}
        {this.props.linkSource && <span className={styles.videoLinkMessage} style={{color: this.state.sourceColor}}>{this.props.linkSource}</span>}
      </div>
    )
  }
}

export default VideoLink;
