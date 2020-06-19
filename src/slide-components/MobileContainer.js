import React from 'react';
import { withRouter } from "react-router";
import {mobileSlideMap} from './SlideMap';
import ProjectsNavMobile from './mobile-components/ProjectsNavMobile';
import defer from '../utils/defer';
import HorizontalNavMobile from './mobile-components/HorizontalNav_Mobile';

class MobileContainer extends React.Component{
  constructor(props){
        super(props);
        this.state = {
            transitioning : false,
            readyForTransition : false,
            prevSlide : null,
            prevChapter : {name: null , link: null},
            currSlide : null,
            currentChapter: null,
            projectNavOpen: false
        };

        this.setReadyForTransition = this.setReadyForTransition.bind(this);
        this.setTransitioning = this.setTransitioning.bind(this);
        this.transitionEnd = this.transitionEnd.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.toggleProjectNav = this.toggleProjectNav.bind(this);
    }

    changeSlide(to){
      /*let nextSlide = (next) ? 'next' : 'prev';
      let currentChapter = this.state.currentChapter.link;
      let currentSlide = this.state.currSlide;*/
      this.props.history.push(`/${to}`);
    }

    setReadyForTransition(val){
      this.setState({
        readyForTransition : val
      })
    }

    setTransitioning(val){
      this.setState({
        transitioning : val
      })
    }

    transitionEnd(){
      this.setState({
        transitioning : false,
        prevSlide : null
      })
    }

    toggleProjectNav(to) {
      if (this.state.projectNavOpen) {
        this.setState({
          projectNavOpen: false
        }, ()=>{
          if (to) {
            this.changeSlide(to);
          }
        })
      }
      else {
        this.setState({
          projectNavOpen: true
        })
      }
    }

    static getDerivedStateFromProps(props, state){
      if(props.path === state.currSlide){
        return null;
      }

      return {
        transitioning : true,
        readyForTransition : false,
        prevSlide : state.currSlide,
        prevChapter : state.currentChapter,
        currSlide : props.path,
        currentChapter: props.currentChapter
      }
    }

    render(){
      const props = this.props;
      const state = this.state;
      const slide = state.currSlide;

      let enterDefer = defer();
      let exitDefer = defer();

      if(!state.prevSlide){
        exitDefer.resolve();
      }

      Promise.all([enterDefer, exitDefer])
      .then(()=>{
        this.setTransitioning(false)
      })

      let currSlide = mobileSlideMap[state.currSlide];
      let prevSlide = mobileSlideMap[state.prevSlide];

      return (
        <React.Fragment>
        <HorizontalNavMobile transitioning={state.transitioning} toggleProjectNav={this.toggleProjectNav} hideProjectName={currSlide.hideVerticalNav} projectName={props.projectName}
          hideChapterNumber={currSlide.hideChapterNumber} hideVerticalNav={props.hideVerticalNav} color={currSlide.menuInverted ? '#fff': '#000'}/>
        {this.state.projectNavOpen ? <ProjectsNavMobile slideMap={mobileSlideMap} projectNavOpen={state.projectNavOpen} changeSlide={this.changeSlide} toggleProjectNav={this.toggleProjectNav} disclaimer=<span>These projects are based on research conducted by students for the course <i>Walking in the City: Mapping Everyday Life in Lahore.</i></span>/> : <div></div>}
        {
        React.cloneElement(currSlide.component, {
            defer : enterDefer,
            setReadyForTransition : this.setReadyForTransition,
            readyForTransition : state.readyForTransition,
            enter : true,
            firstLoad : (state.prevSlide === null),
            key : state.currSlide,
            id : state.currSlide,
            dir : 1
        })
        }
        {
        state.prevSlide && state.transitioning
        &&
        React.cloneElement(prevSlide.component, {
          defer : exitDefer,
          readyForTransition : state.readyForTransition,
          exit : true,
          key : state.prevSlide,
          id : state.prevSlide,
          dir : 1
        })
        }
        </React.Fragment>
      )
    }
}

export default withRouter(MobileContainer);
