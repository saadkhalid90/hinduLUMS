import React, { Component } from 'react';
import styles from './css-modules/slide.module.css';
import contentStyles from './css-modules/content.module.css';
import { MdExpandMore } from "react-icons/md";
import classNames from 'classnames';
import Loader from 'react-loader-spinner';
import Fade from 'react-reveal/Fade';

import {
  Link
} from "react-router-dom";

class BottomBar extends Component {

  render () {
    return (
      <div className={classNames(styles.slide_bottom_bar, contentStyles.content)} style={{opacity : this.props.hideBottomBar ? 0 : 1, display: this.props.hideBottomBar ? 'none' : 'flex'}}>
        <p className={styles.slideBottomMessage} style={{color : this.props.color}}>{this.props.message}</p>
        <div className={styles.scrollArrow_Container}>
          <Fade className={styles.scrollLoader} when={this.props.transitioning} duration={500}>
            <Loader type="TailSpin" color={this.props.color} height={35} width={35} />
          </Fade>
          <Link style={{position: 'absolute'}} to={`/${this.props.next}`} >
            <MdExpandMore className={styles.scrollArrowDown} style={{color : this.props.transitioning ? '#bdbdbd' : this.props.color}}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default BottomBar;
