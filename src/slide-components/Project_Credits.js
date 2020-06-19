import React, { Component } from 'react';
import styles from './css-modules/project_credits.module.css';
import LUMS_logo from '../resources/lums_orig.png';
import classNames from 'classnames';
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";

class ProjectCredits extends Component {
  plotree = () => {
    window.open("https://plotree.studio/");
  }

  openLink = (e, link) => {
    e.preventDefault();
    window.location = link;
  }

  render () {
    return (
      <div className={styles.project_credits_container}>
        <div className={styles.project_credits_content}>
          <img alt="Lahore University of Management Sciences" src={LUMS_logo} className={styles.project_title_lums_logo}/>
          <div className={styles.centered_content}>
            <div className={styles.spaced_out}>
              <p className={styles.text}>{this.props.disclaimer}</p>
            </div>
            <div className={styles.spaced_out}>
              <p className={styles.text}>Data for <span className={styles.bold}>{this.props.projectName}</span> has been provided by</p>
              <p className={styles.text}>{this.props.studentNames}</p>
            </div>
            <div className={styles.spaced_out}>
              <p className={styles.text}>Under the supervision of</p>
              <p className={classNames(styles.text, styles.supervisor)}>{this.props.supervisor.name}</p>
              <p className={styles.desig}>{this.props.supervisor.desig}</p>
            </div>
            <div className={styles.scroll_prompt}>
              <Link to="home">
                <div className={styles.chevron}><MdExpandLess/></div>
              </Link>
              <p className={styles.navigation_message}>Explore the project again</p>
              <p onClick={(e) => this.openLink(e, "https://archive.lums.edu.pk/interactives/home")} className={styles.browse_more_projMessage}>Browse Other Projects</p>
            </div>
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

export default ProjectCredits;
