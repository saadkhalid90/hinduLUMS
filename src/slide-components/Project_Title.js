import React, { Component } from 'react';
import styles from './css-modules/project_title.module.css';
import LUMS_logo from '../resources/lums_orig.png';
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

class ProjectTitle extends Component {
  plotree = () => {
    window.open("https://plotree.studio/");
  }

  render () {
    return (
      <div className={styles.project_title_container}>
        <div className={styles.project_title_content}>
          <img alt="Lahore University of Management Sciences" src={LUMS_logo} className={styles.project_title_lums_logo}/>
          <div className={styles.centered_content}>
            <p className={styles.title}>{this.props.title}</p>
            {this.props.subTitle && <p className={styles.subTitle}>{this.props.subTitle}</p>}
            <p className={styles.description}>{this.props.description}</p>
          </div>
          <div className={styles.scroll_prompt}>
            <p className={styles.title_scroll_message}>Scroll Down</p>
            <p className={styles.title_explore_message}>Explore the Project</p>
            <Link to="chapter1">
              <div className={styles.chevron}><MdExpandMore/></div>
            </Link>
          </div>
        </div>
        <div className={styles.designed_by} onClick={() => this.plotree()}>
          <i style={{marginRight: '10px'}}>Designed by Plotree Info Design</i>
          <img alt="Plotree Info Design" className={styles.plotreeLogo} src="https://res.cloudinary.com/plotree/image/upload/v1588508395/logoAlone_ueznfi.svg"/>
        </div>
      </div>
    )
  }
}

export default ProjectTitle;
