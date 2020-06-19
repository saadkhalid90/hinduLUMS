import React, {Component} from 'react';
import styles from './css-modules/projectNav.module.scss';
import main from '../resources/navbackgrounds/main.jpg';
import political from '../resources/navbackgrounds/political.jpg';
import twomurders from '../resources/navbackgrounds/twomurders.jpg';
import mallroad from '../resources/navbackgrounds/mallroad.jpg';
import literary from '../resources/navbackgrounds/literary.jpg';
import hindu from '../resources/navbackgrounds/hindu.jpg';
import lums from "../resources/lums_orig.png";
import { MdCancel } from "react-icons/md";
import {TweenMax, Power3} from 'gsap';

class ProjectsNav extends Component {
  constructor(props) {
    super(props);
    this.navigation = React.createRef();
    this.fadeRef = React.createRef();
    this.delayedFade = React.createRef();
    this.state = {projectNavOpen: false}
  }

  setOpacity = (id, opacity) => {
    document.getElementById(id).style.opacity = opacity;
  }


  componentDidMount() {
    this.setState({
      projectNavOpen: this.props.projectNavOpen
    });
    TweenMax
      .fromTo(this.navigation.current, 1, {
        yPercent:  -100 ,
      }, {
        yPercent: 0,
        ease: Power3.easeInOut,
    });
    TweenMax
      .fromTo(this.fadeRef.current, 1.75, {
        opacity:  0 ,
      }, {
        opacity: 1,
        ease: Power3.easeInOut,
    });
    TweenMax
      .fromTo(this.delayedFade.current, 2, {
        opacity:  0 ,
      }, {
        opacity: 1,
        ease: Power3.easeInOut,
    });
  }

  closeNav() {
    TweenMax
    .fromTo(this.navigation.current, 1, {
        yPercent:  0 ,
    }, {
        yPercent: -100,
        ease: Power3.easeInOut,
        onComplete : ()=>{this.props.toggleProjectNav()}
    });
    TweenMax
      .fromTo(this.fadeRef.current, 0.9, {
        opacity:  1 ,
      }, {
        opacity: 0,
        ease: Power3.easeInOut,
    });
    TweenMax
      .fromTo(this.delayedFade.current, 0.9, {
        opacity:  1 ,
      }, {
        opacity: 0,
        ease: Power3.easeInOut,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projectNavOpen !== this.state.projectNavOpen) {
      TweenMax
        .fromTo(this.navigation.current, 0.7, {
          yPercent:  -100 ,
        }, {
          yPercent: 0,
          ease: Power3.easeInOut,
      })
    }
  }

  render() {
    return (
      <div ref={this.navigation} className={styles.navContainer}>
        <MdCancel className={styles.closeIcon} onClick={() => this.closeNav()}/>
        <img src={lums} alt="Lahore University of Management Sciences" className={styles.lums_logo}/>
        <img src={main} alt="Photographic highlights from all projects" className={styles.absoluteBgMain}/>
        <img id='political' alt="Political movements in Lahore" src={political} className={styles.absoluteBg}/>
        <img id='mallroad' alt="The Mall – history and culture, now and then" src={mallroad} className={styles.absoluteBg}/>
        <img id='twomurders' alt="Two murders, Two trials" src={twomurders} className={styles.absoluteBg}/>
        <img id='hindu' alt="Re-imagining Lahore as a Hindu city" src={hindu} className={styles.absoluteBg}/>
        <img id='literary' alt="Lahore’s literary landscape" src={literary} className={styles.absoluteBg}/>
        <div ref={this.fadeRef} style={{position: 'relative'}} className={styles.project_nav_options_container}>
          <p className={styles.browse_proj_heading}>Explore more themes</p>
          <div className={styles.navItem}>
            <p className={styles.projectTitle} onClick={() => window.location = "https://archive.lums.edu.pk/interactives/political/home"} onMouseOver={() => this.setOpacity('political', 1)} onMouseOut={() => this.setOpacity('political', 0)}><span className={styles.underline}>Political movements in Lahore</span></p>
          </div>
          <div className={styles.navItem}>
            <p className={styles.projectTitle} onClick={() => window.location = "https://archive.lums.edu.pk/interactives/literature-lahore/home"} onMouseOver={() => this.setOpacity('literary',1)} onMouseOut={() => this.setOpacity('literary',0)}><span className={styles.underline}>Lahore’s literary landscape</span></p>
          </div>
          <div className={styles.navItem}>
            <p className={styles.projectTitle} onClick={() => window.location = "https://archive.lums.edu.pk/interactives/two-murders/home"} onMouseOver={() => this.setOpacity('twomurders',1)} onMouseOut={() => this.setOpacity('twomurders',0)}><span className={styles.underline}>Two murders, Two trials</span></p>
          </div>
          <div className={styles.navItem}>
            <p className={styles.projectTitle} onMouseOver={() => this.setOpacity('hindu',1)} onMouseOut={() => this.setOpacity('hindu',0)}><span className={styles.underline}>Re-imagining Lahore as a Hindu city <span className={styles.onlineSoon}>(Online Soon)</span></span></p>
          </div>
          <div className={styles.navItem}>
            <p className={styles.projectTitle} onMouseOver={() => this.setOpacity('mallroad',1)} onMouseOut={() => this.setOpacity('mallroad', 0)}><span className={styles.underline}>The Mall – history and culture, now and then <span className={styles.onlineSoon}>(Online Soon)</span></span></p>
          </div>
        </div>
        <div ref={this.delayedFade}>
          <div className={styles.disclaimer_container}>
            <p className={styles.disclaimer}>{this.props.disclaimer}</p>
          </div>
          <div className={styles.designed_by} onClick={() => this.plotree()}>
            <i style={{marginRight: '10px'}}>Designed by Plotree Info Design</i>
            <img alt="Plotree Info Design" className={styles.plotreeLogo} src="https://res.cloudinary.com/plotree/image/upload/v1588508395/logoAlone_ueznfi.svg"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsNav;
