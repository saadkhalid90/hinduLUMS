import React, { Component } from 'react';
import styles from '../css-modules/mobile_section_title.module.css';
import classNames from 'classnames';

class MobileSectionTitle extends Component {
  render() {
    return (
      <div className={styles.mobile_section_title_container}>
        <img alt="" className={styles.absoluteBack} src={this.props.image}></img>
        <div className={styles.content}>
          {this.props.chapterNumber && <p className={classNames(styles.chapterNumber, this.props.inverted && styles.inverted_chapterNumber)}>{this.props.chapterNumber}</p>}
          {this.props.note && <p className={classNames(styles.note, this.props.inverted && styles.inverted_note)}>{this.props.note}</p>}
          <div className={styles.absolute_title}>
          {this.props.date && <p className={classNames(styles.date, this.props.inverted && styles.inverted_date)}>{this.props.date}</p>}
          {this.props.title && <p style={{width: '90%', textAlign: 'left'}} className={classNames(styles.title, this.props.inverted && styles.inverted_title)}>{this.props.title} {this.props.year && <span className={styles.year}>({this.props.year})</span>}</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default MobileSectionTitle;
