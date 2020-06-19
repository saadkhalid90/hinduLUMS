import React, { Component } from 'react';
import styles from './css-modules/chapter_title.module.css';

class ChapterTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { textColor: 'black' };
  }

  componentDidMount() {
    if (this.props.inverted === true) {
      this.setState({
        textColor: 'white'
      })
    }
  }

  render () {
    return (
      <div className={styles.chapter_title_container} style={{color: this.state.textColor}}>
        <div className={styles.absolute_centered_content}>
          <p className={styles.chapter_number}>Chapter {this.props.chapter_number}</p>
          <p className={styles.chapter_title}>{this.props.chapter_title}</p>
          {this.props.images.length === 0 ?
           <div></div>
           :
           <div>
             {this.props.images.map((image, index) => (
               <img alt="" key={index} id={image.id} ref={this.props.addParallaxAndFadeRef(image.shift)} src={image.image}></img>
             ))}
           </div>
         }
        </div>
      </div>
    )
  }
}

export default ChapterTitle;
