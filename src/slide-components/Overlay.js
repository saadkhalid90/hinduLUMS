import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import {TweenMax, Power3} from 'gsap';
import OverlaySlideshow from './OverlaySlideshow';
import OverlaySlide from './OverlaySlide';
import styles from './css-modules/overlay.module.css';
import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { MdCancel } from "react-icons/md";

class OverlayContent extends React.Component {

  constructor(props) {
    super(props);
    // Overlay Container
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
    TweenMax
    .fromTo(this.props.childRef.current, 0.7, {
        yPercent:  100 ,
    }, {
        yPercent: 0,
        ease: Power3.easeInOut,
    })
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }

}

function Overlay(props){
    if(props.displayedOverlay[0] !== props.oId){
        return null;
    }

    const index = props.displayedOverlay[1]

    let currSlidesProps = props.slides[index];

    function decreaseIndex(e){
      console.log(index);
      if (index === 0) {
        props.setDisplayedOverlay([props.oId, props.slides.length - 1]);
      }
      else {
        props.setDisplayedOverlay([props.oId, index - 1]);
      }
    }

    function increaseIndex(e){
      if (index === (props.slides.length - 1)) {
        props.setDisplayedOverlay([props.oId, 0]);
      }
      else {
        props.setDisplayedOverlay([props.oId, index + 1]);
      }
    }

    const overlayRef = createRef();

    function closeOverlay(){
      TweenMax
      .fromTo(overlayRef.current, 0.7, {
          yPercent:  0 ,
      }, {
          yPercent: 100,
          ease: Power3.easeInOut,
          onComplete : ()=>{props.closeOverlay()}
      })
    }

    return (
      <OverlayContent childRef={overlayRef}>
        <div ref={overlayRef} className={styles.overlay}>
            <MdCancel className={styles.closeIcon} onClick={closeOverlay}/>
            {props.slides.length > 1 && <div className={styles.prevSlideChev} onClick={(e) => decreaseIndex(e)}><MdChevronLeft/></div>}
            {props.slides.length > 1 && <div className={styles.nextSlideChev} onClick={(e) => increaseIndex(e)}><MdChevronRight/></div>}
            <OverlaySlideshow>
                <OverlaySlide description={currSlidesProps.description} title={currSlidesProps.title} source={currSlidesProps.source} originalLink={currSlidesProps.originalLink} render={currSlidesProps.render}>
                </OverlaySlide>
            </OverlaySlideshow>
        </div>
      </OverlayContent>
    )
}

export default Overlay;
