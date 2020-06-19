import React, { Component } from 'react';
import styles from './css-modules/verticalNav.module.css';
import lums from '../resources/lums.png';
import { Link } from "react-router-dom";
import { Transition } from 'react-transition-group';
import {TweenMax, Power3} from 'gsap';
import {chapterArr} from './SlideMap'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import RadialSeparators from './RadialSeparators';

class VerticalNav extends Component{
    constructor(props) {
      super(props);
      this.state = {
        tooltipProps: {show : false, top : 0, title : '', chapter : ''},
        currentChapter: this.props.currentChapter,
        isSlideToggleOpen: false,
        prevTooltipProps : null
      }
      this.prevChapterRef = React.createRef();
      this.currChapterRef = React.createRef();
    }

    componentDidUpdate() {
      this.hideOnClickOutside(document.getElementById('vertical_nav_container'))

      if(this.state.prevTooltipProps){
        if(this.prevChapterRef.current){
          let currentChapter = this.state.tooltipProps.chapter.trim().toLowerCase()
          let prevChapter = this.state.prevTooltipProps.chapter.trim().toLowerCase()
          let prevFinalY, currStartY;

          if(chapterArr.indexOf(prevChapter) < chapterArr.indexOf(currentChapter)){
            prevFinalY = -100;
            currStartY = 100
          }else{
            prevFinalY = 100;
            currStartY = -100
          }
          TweenMax.fromTo(this.prevChapterRef.current, {y : 0},{y : prevFinalY, duration : 0.6, ease : Power3.easeInOut})
          TweenMax.fromTo(this.currChapterRef.current, {y : currStartY},{y : 0, duration : 0.6, ease : Power3.easeInOut})
        }
      }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      return {
        currentChapter: nextProps.currentChapter,
        slides: nextProps.slides
      };
    }

    hideOnClickOutside = (element) => {
      const outsideClickListener = event => {
          if (!element.contains(event.target) && this.state.isSlideToggleOpen) {
            this.toggleNav(event);
            removeClickListener()
          }
      }

      const removeClickListener = () => {
          document.removeEventListener('click', outsideClickListener)
      }

      document.addEventListener('click', outsideClickListener)
    }

    setToolTipProps = (props, prevProps) => {
    //  var toolData = props.title.split(":");
      this.setState({
        tooltipProps: props,
        prevTooltipProps : prevProps
      })
    }

    onMouseEnter = (e, activeClass) => {
      let prevProps = null;
      if(this.state.tooltipProps.show){
        prevProps = this.state.tooltipProps
      }
      var toolData = e.currentTarget.dataset.chapterName.split(":");
      var chapter = e.currentTarget.dataset.chapter;

      const newTooltipProps = {
        show : true, top : e.currentTarget.offsetTop,
        title : toolData[1], chNum : toolData[0],
        chapter : chapter
      };
      this.setToolTipProps(newTooltipProps, prevProps);
    }

     onMouseLeave = (e, activeClass) => {
      this.setToolTipProps(
        {show : false, top : this.state.tooltipProps.top ,title : ''},
        null);
    }

    toggleNav = (e) => {
      var nav_container = document.getElementById('vertical_nav_container');
      var slide_nav_container = document.getElementById('slide_options_container');
      var slide_options = document.getElementById('slide_options');
      if (this.state.isSlideToggleOpen) {
        nav_container.style.width = '90px';
        slide_nav_container.style.transform = 'translate3d(-255px, 0px, 0px)';
        slide_options.style.opacity = '0';
        this.setState({isSlideToggleOpen: false});
      }
      else {
        nav_container.style.width = '340px';
        slide_nav_container.style.transform = 'translate3d(0px, 0px, 0px)';
        slide_options.style.opacity = '1';
        this.setState({isSlideToggleOpen: true});
      }
    }

    scaleSlideCircle = () => {
      document.getElementById('circle_progress_container').style.transform = 'scale3d(1,1,1)';
    }

    resetSlideCricle = () => {
      document.getElementById('circle_progress_container').style.transform = 'scale3d(0.95, 0.95, 1)';
    }

    render () {
      let currentChapterIndex = 0;//this.props.chapters.indexOf(this.props.currentChapter);
      var toggleNavState = this.toggleNav;
      var slides = this.state.slides;
      const totalSlides = Object.keys(slides).length - 1;
      var index = Object.keys(slides).indexOf(this.props.currSlide);
      var text = ''
      if (this.props.currSlide.length !== 8 ) {
        if (this.props.currSlide === "home") {
          text='Home'
        }
        else if (this.props.currSlide === "credits") {
          text='Credits'
        }
        else {
          text = `${index} / ${totalSlides}`
        }
      }
      else {
        text = `Ch ` + this.props.currSlide.charAt(7)
      }
      return (
        <div className={styles.navContainer} id="vertical_nav_container" style={{transform : this.props.hideVerticalNav ? 'translate3d(-90px, 0px, 0px)' : 'translate3d(0px, 0px, 0px)'}}>
          <div className={styles.nav_options_container}>
            <div onClick={(e) => this.toggleNav()} onMouseEnter={() => this.scaleSlideCircle()} onMouseLeave={() => this.resetSlideCricle()} className={styles.slide_navigation_option} style={{opacity : this.props.hideVerticalNav ? 0 : 1, transition: '0.35s ease-in'}}>
              <p className={styles.browse_slides_text}>Browse<br/> Slides</p>
              <div className={styles.circle_progress_container} id='circle_progress_container'>
              <CircularProgressbarWithChildren
                value={index/totalSlides * 100}
                text={text}
                strokeWidth={6}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  trailColor: '#9e9e9e',
                  textColor: '#fff',
                  pathColor: '#fff',
                })}
              >
                <RadialSeparators
                  count={totalSlides}
                  style={{
                    background: "#383838",
                    width: "3px",
                    // This needs to be equal to props.strokeWidth
                    height: `${6}%`
                  }}
                />
              </CircularProgressbarWithChildren>

              </div>
            </div>

              <div className={styles.chaptersContainer} style={{opacity : this.props.hideVerticalNav ? 0 : 1}}>
                {Object.keys(this.props.slideMap).map((d, i)=>{
                    let activeClass = (d === this.state.currentChapter.link) ? styles.active : '';
                    let activeBorderCircle = activeClass ? <div className={styles.activeBorder}></div> : null;
                    let completedClass = (i < currentChapterIndex) ? styles.completed : '';
                    if (d !== "home" && d !== "credits") {
                      return (
                        <Link className="link" to={d} key={i}>
                          <div
                            style={{cursor: 'pointer'}}
                            data-chapter-name={this.props.slideMap[d].name}
                            data-chapter={d}
                            onMouseEnter={(e) => this.onMouseEnter(e, activeClass)}
                            onMouseLeave={(e) => this.onMouseLeave(e, activeClass)}
                            className={styles.navItemContainer}
                          >
                              <div id="nav_circle" className={`${styles.circle} ${activeClass} ${completedClass} ${styles.circlehover}`}>
                                  {activeBorderCircle}
                              </div>
                              {
                              i < (Object.keys(this.props.slideMap).length - 2)
                              &&
                              <div className={`${styles.line} ${completedClass}`}></div>
                              }
                          </div>
                        </Link>
                        )
                      }
                      else {
                        return (
                          <div key={i}></div>
                        )
                      }
                })}
              </div>
              <img src={lums} alt="Lahore University of Management Sciences" className={styles.lumsLogo} style={{opacity : this.props.hideVerticalNav ? 0 : 1}}/>
            </div>
            <div className={styles.slide_options_container} id="slide_options_container">
              <div className={styles.slide_options} id="slide_options">
                <div className={styles.slide_options_chapter_container}><p className={styles.slide_options_chapter}>{this.props.currentChapter.name}</p></div>
                  {Object.keys(slides).map(function(key, index) {
                    return (
                      <div key={index}>
                        {slides[key].slideName !== undefined ?
                          <div className={styles.slide_option_parent}>
                            <Link onClick={toggleNavState} className={styles.slide_link} to={key}> <p className={styles.slide_number}>Slide {index}</p><p className={styles.slide_option}>{slides[key].slideName}</p> </Link>
                          </div>
                          :
                          <div></div>
                        }
                      </div>
                    )
                  })}
                </div>
            </div>
            {
            <Transition
            in={this.state.tooltipProps.show}
            appear
            unmountOnExit
            addEndListener={(node, done) => {
              node.addEventListener('animationend', done, false);
            }}>
              {(stage)=>{
                let animationClass = '';
                if(stage === 'entering' || stage === 'entered'){
                  animationClass = 'tooltipEntering';
                }else if(stage === 'exiting'){
                  animationClass = 'tooltipExiting';
                }
                return (<div className={styles.tooltipContainer + ' ' + styles[animationClass]} style={{top : this.state.tooltipProps.top + 75, left : '100px'}}>
                  <div className={styles.tooltipArrow}></div>
                    <div className={styles.tooltip}>
                      <div ref={this.currChapterRef} className={styles.tooltipChapterContainer}>
                      <p className={styles.tooltip_chapter_number}>{this.state.tooltipProps.chNum}</p>
                      <p className={styles.tooltip_chapter_title}>{this.state.tooltipProps.title}</p>
                      </div>
                      {
                      this.state.prevTooltipProps
                      &&
                      <div ref={this.prevChapterRef} className={styles.tooltipChapterContainer}>
                      <p className={styles.tooltip_chapter_number}>{this.state.prevTooltipProps.chNum}</p>
                      <p className={styles.tooltip_chapter_title}>{this.state.prevTooltipProps.title}</p>
                      </div>
                      }
                    </div>
                </div>)}
              }
            </Transition>
          }
        </div>
      )
  }
}

export default VerticalNav;
