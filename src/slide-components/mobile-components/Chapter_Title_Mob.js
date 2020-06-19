import React, { Component } from 'react';
import styles from '../css-modules/chapter_title.module.css';

class ChapterTitleMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { textColor: 'black', height: window.innerHeight };
  }

  componentDidMount() {
    if (this.props.inverted === true) {
      this.setState({
        textColor: 'white'
      })
    }
    this.setState({
      height: window.innerHeight
    })
  }

  render () {
    return (
      <div className={styles.chapter_title_container} style={{color: this.state.textColor, height: this.state.height}}>
        <img alt="" id={this.props.id && this.props.id} className={styles.absoluteBack} src={this.props.image}></img>
        <div className={styles.absolute_centered_content}>
        {this.props.chapter_number.length > 0 && <p className={styles.chapter_number}>Chapter {this.props.chapter_number}</p>}
          <p className={styles.chapter_title}>{this.props.chapter_title}</p>
          <p className={styles.scroll_message}>Scroll to view content</p>
          {this.props.images.length === 0 ?
           <div></div>
           :
           <div>
             {this.props.images.map((image, index) => (
               <img alt="" key={index} id={image.id} src={image.image}></img>
             ))}
           </div>
         }
        </div>
        <div className={styles.bottom_gradient} style={{background: this.props.gradient}}></div>
      </div>
    )
  }
}

export default ChapterTitleMobile;
