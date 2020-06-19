import React, { Component } from 'react';
import styles from '../css-modules/project_desc.module.css';
import classNames from 'classnames';
import { Link } from "react-router-dom";

class ProjectDescMob extends Component {
  render () {
    return (
      <Link to={this.props.to} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className={styles.project_desc_container} style={{height: window.innerHeight}}>
          <img alt="" className={styles.absoluteBack} src={this.props.image}></img>
          <div className={styles.project_desc_content}>
            <div className={classNames(styles.description, this.props.inverted && styles.desc_invert)}>{this.props.description}</div>
          </div>
        </div>
      </Link>
    )
  }
}

export default ProjectDescMob;
