import React, { Component } from 'react';
import styles from './css-modules/slide_heading.module.css';
import classNames from 'classnames';

class SlideHeading extends Component {

  render () {
    return (
      <div className={classNames(styles.slide_title_container, this.props.noPadding && styles.no_padding, this.props.leftAlign && styles.align_start) }>
        {this.props.title && <p className={classNames(styles.slideTitle, this.props.inverted && styles.slideTitle_Inverted, this.props.leftAlign && styles.align_left)}>{this.props.title} <span className={styles.slideTitleYear}>{this.props.year}</span></p>}
        {this.props.subtitle && <p className={classNames(styles.slideSubTitle, this.props.inverted && styles.slideSubTitle_Inverted, this.props.leftAlign && styles.align_left)}>{this.props.subtitle}</p>}
        {!React.isValidElement(this.props.desc) && <p className={classNames(styles.slidePara, this.props.inverted && styles.slidePara_Inverted, this.props.leftAlign && styles.align_left)}>{this.props.desc}</p>}
        {React.isValidElement(this.props.desc) && <div className={classNames(styles.slidePara, this.props.inverted && styles.slidePara_Inverted, this.props.leftAlign && styles.align_left)}>{this.props.desc}</div>}
      </div>
    )
  }
}

export default SlideHeading;
