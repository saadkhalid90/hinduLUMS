import React, {Component} from 'react';
import styles from '../css-modules/projectNav.module.scss';
import main from '../../resources/backgrounds/Credits.jpg';
import lums from "../../resources/lums_orig.png";
import { MdCancel } from "react-icons/md";
import {TweenMax, Power3} from 'gsap';

class ProjectsNav extends Component {
  constructor(props) {
    super(props);
    this.navigation = React.createRef();
    this.fadeRef = React.createRef();
    this.delayedFade = React.createRef();
    this.state = {projectNavOpen: false}

    this.navigateNav = this.navigateNav.bind(this);
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

  navigateNav(e) {
    e.persist();
    TweenMax
    .fromTo(this.navigation.current, 1.2, {
        yPercent:  0 ,
    }, {
        yPercent: -100,
        ease: Power3.easeInOut,
        onComplete : ()=>{this.props.toggleProjectNav(e.target.dataset.to)}
    });
    TweenMax
      .fromTo(this.fadeRef.current, 1.1, {
        opacity:  1 ,
      }, {
        opacity: 0,
        ease: Power3.easeInOut,
    });
    TweenMax
      .fromTo(this.delayedFade.current, 1.1, {
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

  openLink = (e, link) => {
    e.preventDefault();
    window.location = link;
  }

  render() {
    return (
      <div ref={this.navigation} className={styles.navContainer} style={{height: window.innerHeight}}>
        <MdCancel className={styles.closeIcon} onClick={() => this.closeNav()}/>
        <img src={lums} alt="Lahore University of Management Sciences" className={styles.lums_logo}/>
        <img src={main} alt="Photographic highlights from all projects" className={styles.absoluteBgMain}/>

        <div ref={this.fadeRef} className={styles.mobileChaptersContainer}>
          <p className={styles.browse_proj_heading}>Browse Chapters</p>
          {Object.keys(this.props.slideMap).map((d, i)=>{
            return (
              <div  key={i} className={styles.navItem}>
                <div className="link" style={{cursor: 'default', textDecoration: 'none'}}>
                  <p className={styles.projectTitle}><span data-to={d} onClick={this.navigateNav} className={styles.underline}>{this.props.slideMap[d].name}</span></p>
                </div>
              </div>
              )
          })}
        </div>

        <div ref={this.fadeRef} style={{position: 'relative'}}>
          <p className={styles.browse_proj_heading}>Explore more themes</p>
          <div className={styles.mobileChapterNavsContain}>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span onClick={(e) => this.openLink(e, "https://archive.lums.edu.pk/interactives/political/home")} className={styles.underline}>Political movements in Lahore</span></p>
            </div>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span onClick={(e) => this.openLink(e, "https://archive.lums.edu.pk/interactives/literature-lahore/home")} className={styles.underline}>Lahore’s literary landscape</span></p>
            </div>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span onClick={(e) => this.openLink(e, "https://archive.lums.edu.pk/interactives/two-murders/home")} className={styles.underline}>Two murders, Two trials</span></p>
            </div>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span onClick={(e) => this.openLink(e, "https://archive.lums.edu.pk/interactives/hindu/home")} className={styles.underline}>Re-imagining Lahore as a Hindu city</span></p>
            </div>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span onClick={(e) => this.openLink(e, "https://archive.lums.edu.pk/interactives/mall-road/home")} className={styles.underline}>The Mall – history and culture, now and then</span></p>
            </div>
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
