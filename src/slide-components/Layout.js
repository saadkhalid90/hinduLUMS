import React from 'react';
import styles from './css-modules/Layout.module.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {height: 'auto', width: 'auto', wrap: 'no-wrap'}
  }

  componentDidMount() {
    if (this.props.fixed_height === true) {
      this.setState({
        height: '100%',
      });
    }
    if (this.props.fixed_width === true) {
      this.setState({
        width: 'calc(100vw - 170px)'
      });
    }
    if (this.props.wrapped === true) {
      this.setState({
        wrap: "wrap"
      })
    }
  }

  render() {
    return (
      <div className={`${styles[this.props.layoutClassName]} ${styles.layout}`} style={{height: this.state.height, width: this.state.width, flexWrap: this.state.wrap}}>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
