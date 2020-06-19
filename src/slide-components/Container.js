import React from 'react';
import { withRouter } from "react-router";
import Content from './Content';
import VerticalNav from './VerticalNav';
import {slideMap} from './SlideMap';
import ProjectsNav from './ProjectsNav';

class Container extends React.Component{
  constructor(props){
        super(props);
        this.swipeTS = null;
        this.state = {
            transitioning : false,
            readyForTransition : false,
            prevSlide : null,
            prevChapter : {name: null , link: null},
            currSlide : null,
            currentChapter: {name: null , link: null},
            projectNavOpen: false
        };

        this.containerRef = React.createRef();

        this.setReadyForTransition = this.setReadyForTransition.bind(this);
        this.setTransitioning = this.setTransitioning.bind(this);
        this.transitionEnd = this.transitionEnd.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.handleSwipe = this.handleSwipe.bind(this);
        this.toggleProjectNav = this.toggleProjectNav.bind(this);
    }

    componentDidMount(){
      document.addEventListener('keydown', (e)=>{
        if(e.keyCode === 40){
          this.changeSlide(true, this.state.transitioning);
        }
        if(e.keyCode === 38){
          this.changeSlide(false, this.state.transitioning);
        }
      })

      this.containerRef.current.addEventListener('wheel', this.handleSwipe, {passive : false});
    }

    handleSwipe(e){
      e.preventDefault();
      this.containerRef.current.removeEventListener('wheel', this.handleSwipe, {passive : false});
      if(e.deltaY > 0){
        this.changeSlide(true, this.state.transitioning);
      }else if(e.deltaY < 0){
        this.changeSlide(false, this.state.transitioning);
      }
      this.containerRef.current.addEventListener('wheel', this.handleSwipe, {passive : false});
    }

    changeSlide(next, transitioning){
      if(transitioning){
        console.log('nothing done')
        return;
      }
      let nextSlide = (next) ? 'next' : 'prev';
      let currentChapter = this.state.currentChapter.link;
      let currentSlide = this.state.currSlide;
      this.props.history.push(`/${slideMap[currentChapter].slides[currentSlide][nextSlide]}`);
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

    toggleProjectNav() {
      if (this.state.projectNavOpen) {
        this.setState({
          projectNavOpen: false
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
        prevChapter : {name: state.currentChapter.name , link: state.currentChapter.link},
        currSlide : props.path,
        currentChapter: {
          name: props.currentChapter.name,
          link: props.currentChapter.link
        },
        slides: slideMap[props.currentChapter.link].slides,
        hideNav: slideMap[props.currentChapter.link].slides[props.path].hideVerticalNav
      }
    }

    render(){
      const props = this.props;
      const state = this.state;
      const slide = state.currSlide;

      return (
        <div ref={this.containerRef} style={{pointerEvents : state.transitioning ? 'none': 'inherit'}}>
          {this.state.projectNavOpen ? <ProjectsNav projectNavOpen={state.projectNavOpen} toggleProjectNav={this.toggleProjectNav} disclaimer=<span>These projects are based on research conducted by students for the course <i>Walking in the City: Mapping Everyday Life in Lahore.</i></span>/> : <div></div>}
          <VerticalNav hideVerticalNav={this.state.hideNav} currSlide={this.state.currSlide} slides={this.state.slides} slideMap={slideMap} page={props.page} currentChapter={this.state.currentChapter}/>
          <Content
          setReadyForTransition={this.setReadyForTransition} readyForTransition={state.readyForTransition}
          toggleProjectNav={this.toggleProjectNav} setTransitioning={this.setTransitioning} transitioning={state.transitioning} prev={this.state.prevSlide} slide={slide}
          projectName="Imagining Lahore as a Hindu City" currentChapter={this.state.currentChapter} transitionKey={props.transitionKey} prevChapter={this.state.prevChapter}/>
        </div>
      )
    }
}

export default withRouter(Container);
