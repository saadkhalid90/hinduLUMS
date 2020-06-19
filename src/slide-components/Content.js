import React from 'react';
import HorizontalNav from './HorizontalNav';
import BottomBar from './BottomBar';
import defer from '../utils/defer'

import {slideMap, slideOrder} from './SlideMap';

function Content (props) {

  const currSlide = slideMap[props.currentChapter.link].slides[props.slide];
  const prevSlide = props.prev ? slideMap[props.prevChapter.link].slides[props.prev] : null;

  let chapterNumber = props.currentChapter.name;
  if(props.prev && currSlide.hideChapterNumber && props.prevChapter.name !== props.currentChapter.name){
    chapterNumber = props.prevChapter.name;
  }

  let enterDefer = defer();
  let exitDefer = defer();

  if(!props.prev){
    exitDefer.resolve();
  }

  Promise.all([enterDefer, exitDefer])
  .then(()=>{
    props.setTransitioning(false)
  })

  return (
    <div>
      <HorizontalNav toggleProjectNav={props.toggleProjectNav} hideProjectName={currSlide.hideVerticalNav} projectName={props.projectName} chapterNumber={chapterNumber}
        hideChapterNumber={currSlide.hideChapterNumber} hideVerticalNav={props.hideVerticalNav} color={currSlide.menuInverted ? '#fff': '#000'}/>
      {React.cloneElement(currSlide.component, {
          defer : enterDefer,
          setReadyForTransition : props.setReadyForTransition,
          readyForTransition : props.readyForTransition,
          enter : true,
          firstLoad : (prevSlide === null),
          key : props.slide,
          id : props.slide,
          dir : props.prev && slideOrder[props.slide] > slideOrder[props.prev] ? 1 : -1
      })
      }
      {props.prev && props.transitioning
        &&
        React.cloneElement(prevSlide.component, {
          defer : exitDefer,
          readyForTransition : props.readyForTransition,
          exit : true,
          key : props.prev,
          id : props.prev,
          dir : slideOrder[props.slide] > slideOrder[props.prev] ? 1 : -1
       })
      }
      {/*<Transition
          appear
          in={true}
          unmountOnExit
          key={props.slide}
          addEndListener={
            (node, done)=>{
              done();
            }
          }
        >
          {currSlide.component}
        </Transition>
      {
        props.prev
        &&
        <Transition
          in={false}
          unmountOnExit
          key={props.prev}
          addEndListener={
            (node, done)=>{
              setTimeout(()=>{
                requestAnimationFrame(()=>{
                  let yPercent = slideOrder[props.slide] > slideOrder[props.prev] ? -100 : 100
                  TweenMax.to(node, 0.9, {
                    ease : Power3.easeInOut,
                    //autoAlpha : 0,
                    yPercent: yPercent,
                    onComplete : done
                  });
                });
              },20)
            }
          }
        >
          {prevSlide.component}
        </Transition>
        */}
        <BottomBar hideBottomBar={currSlide.hideVerticalNav} transitioning={props.transitioning} next={slideMap[props.currentChapter.link].slides[props.slide].next} prev={slideMap[props.currentChapter.link].slides[props.slide].prev} color={slideMap[props.currentChapter.link].slides[props.slide].menuInverted ? "#fff" : "#000"} message={slideMap[props.currentChapter.link].slides[props.slide].bottomBarMessage}/>
    </div>
  );
}

export default Content;
