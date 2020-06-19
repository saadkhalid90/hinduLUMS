import React, { Component } from 'react';
import styles from '../css-modules/mobile_section_title.module.css';
import classNames from 'classnames';
import LUMS_logo from '../../resources/lums_orig.png';
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

class NextChapterTitle extends Component {
  render() {
    return (
      <div className={styles.mobile_section_title_container}>
        <img alt="" className={styles.absoluteBack} src={this.props.image}></img>
        <div className={styles.content_centered}>
          <p className={classNames(styles.nextChapter, this.props.inverted && styles.inverted_nextChapter)}>Next Chapter</p>
          {this.props.title && <p style={{width: '90%', textAlign: 'center'}} className={classNames(styles.title, this.props.inverted && styles.inverted_title)}>{this.props.title} {this.props.year && <span className={styles.year}>({this.props.year})</span>}</p>}
          <Link to={`/${this.props.nextChapter}`}>
            <div className={classNames(styles.chevron, this.props.inverted && styles.inverted_chevron)}><MdExpandMore/></div>
          </Link>
          <div className={styles.absolute_links}>
            <Link to={`/${this.props.prevChapter}`} style={{textDecoration: 'none'}}>
              <div className={classNames(styles.browseChapters, this.props.inverted && styles.browseChapters_inverted)}><p>Previous Chapter</p></div>
            </Link>
            <Link to={`/home`} style={{textDecoration: 'none'}}>
              <div className={classNames(styles.backtoHome, this.props.inverted && styles.backtoHome_inverted)}><p>Back to Home</p></div>
            </Link>
          </div>
        </div>
        <img alt="Lahore University of Management Sciences" src={LUMS_logo} className={styles.abs_lums_logo}/>
      </div>
    )
  }
}

export default NextChapterTitle;
