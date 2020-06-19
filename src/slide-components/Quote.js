import React, { Component } from 'react';
import styles from './css-modules/quote.module.css';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'black', sourceColor: 'black', quoteIcon: "https://res.cloudinary.com/plotree/image/upload/v1588574400/quote_kaxf7o.svg"}
  }

  componentDidMount() {
    if (this.props.inverted === true) {
      this.setState({
        color: 'white',
        sourceColor: '#FFEB3B',
        quoteIcon: "https://res.cloudinary.com/plotree/image/upload/v1588574400/quote_white_wzfgrx.svg"
      })
    }
  }

  render () {
    return (
      <div className={styles.quote_container}>
        <div className={styles.quote_border_container}>
          <div className={styles.quote_border} style={{backgroundColor: this.state.color}}></div>
          <img alt="" className={styles.quote_icon_down} src={this.state.quoteIcon}></img>
          <div className={styles.quote_border} style={{backgroundColor: this.state.color}}></div>
        </div>
        <div className={styles.quote} style={{color: this.state.color}}>{this.props.quote}</div>
        <div className={styles.quote_border_container}>
          <div className={styles.quote_border} style={{backgroundColor: this.state.color}}></div>
          <img alt="" className={styles.quote_icon_up} src={this.state.quoteIcon}></img>
          <div className={styles.quote_border} style={{backgroundColor: this.state.color}}></div>
        </div>
        {this.props.source && <div className={styles.source} style={{color: this.state.sourceColor}}>{this.props.source}</div>}
      </div>
    )
  }
}

export default Quote;
