import React, { Component } from 'react';
import styles from '../css-modules/project_title.module.css';
import LUMS_logo from '../../resources/lums_orig.png';
import { GiClick } from "react-icons/gi";
import { Link } from "react-router-dom";
import classNames from 'classnames';

class ProjectTitle_Mobile extends Component {
  plotree = () => {
    window.open("https://plotree.studio/");
  }

  constructor(props) {
    super(props);
    this.state = { optionalLogo: false};
  }

  componentDidMount() {
    if (this.props.optionalLogo !== undefined) {
      this.setState({
        optionalLogo: true
      })
    }
  }

  render () {
    return (
      <Link to={this.props.to} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className={styles.project_title_container} style={{height: window.innerHeight}}>
          <img alt="" className={styles.absoluteBack} src={this.props.image}></img>
          <div className={styles.project_title_content}>
            <div className={styles.mobile_logos}>
              <img alt="Lahore University of Management Sciences" src={LUMS_logo} className={styles.project_title_lums_logo}/>
            </div>
            <div className={styles.centered_content}>
              <p className={classNames(styles.title, this.props.inverted && styles.title_invert)}>{this.props.title}</p>
              {this.props.subTitle && <p className={styles.subTitle}>{this.props.subTitle}</p>}
              <p className={classNames(styles.description, this.props.inverted && styles.desc_invert)}>{this.props.description}</p>
            </div>
            <div className={styles.scroll_prompt}>
              <p className={classNames(styles.title_scroll_message, this.props.inverted && styles.desc_invert)}>Click to</p>
              <p className={classNames(styles.title_explore_message, this.props.inverted && styles.desc_invert)}>Explore the Project</p>
              <div className={classNames(styles.chevron, this.props.inverted && styles.chevron_invert)}><GiClick size={18}/></div>
            </div>
          </div>
          <div className={styles.designed_by} onClick={() => this.plotree()}>
            <i className={this.props.inverted && styles.inverted_plotree} style={{marginRight: '10px'}}>Designed by Plotree Info Design</i>
            <img alt="Plotree Info Design" className={styles.plotreeLogo} src="https://res.cloudinary.com/plotree/image/upload/v1588508395/logoAlone_ueznfi.svg"/>
          </div>
        </div>
      </Link>
    )
  }
}

export default ProjectTitle_Mobile;
