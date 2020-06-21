import React, { useState, createRef, useRef, useLayoutEffect } from 'react';
import gsap, {TimelineMax, Power3} from 'gsap';
import {CustomEase} from 'gsap/CustomEase';
import styles from './css-modules/slide.module.css';
import ReactGA from 'react-ga';

gsap.registerPlugin(CustomEase);
const easing = CustomEase.create('custom', 'M0,0,C0.5,0,0.2,1,1,1');

const transitionStates = {
    NOT_READY : 'nr',
    PREENTER : 'pre',
    POSTENTER :'post',
    POSTEXIT : 'exit',
}

function firstLoadAnimation(containerRef, fadeRefs, dir,cb){
    new TimelineMax({
        onComplete : cb
    })
    .fromTo(containerRef.current, 1, {
        opacity : 0
    }, {
        opacity : 1,
        ease: Power3.easeInOut,
    })
    .staggerFromTo(fadeRefs, 1, {
        opacity: 0,
        y: 40 * dir,
    },{
        opacity: 1,
        y: 0,
        ease: Power3.easeInOut,
    },0.05, 0.2);

}

function fadeInAnimation(containerRef, fadeRefs, dir,cb){
    ReactGA.set({ page: window.location.pathname }); // Update the user's current page
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    containerRef.current.style.zIndex = 2;
    new TimelineMax({
        onComplete : cb
    })
    .fromTo(containerRef.current, 0.7, {autoAlpha : 0}, {
        autoAlpha: 1,
        ease: easing,
    })


    /*fadeRefs.forEach((d,i)=>{
        TweenMax.fromTo(d, 1, {
            opacity: 0,
            y: 40 * dir,
        }, {
            opacity: 1,
            y: 0,
            delay: i * 0.05 + 0.2,
            ease: Power3.easeInOut,
        });
    })*/
}

function fadeOutAnimation(containerRef,fadeRefs,dir,cb){
    let fadeOutDiv = containerRef.current.getElementsByClassName(styles.slideflex)[0];
    containerRef.current.style.zIndex = 1;
    new TimelineMax({
        onComplete : cb
    })
    .fromTo(containerRef.current, 0.7, {autoAlpha : 1}, {
        autoAlpha: 0,
        ease: easing,
    })
}

function Slide(props){

    const [displayedOverlay, setDisplayedOverlay] = useState(['',0]);
    const closeOverlay = setDisplayedOverlay.bind(null, ['',0]);

    const scrollContainerRefs = {};
    const addScrollRef = (key) => (element) => {
        scrollContainerRefs[key] = element;
    }

    const [xPos, setXPos] = useState({});

    const [transitionState, setTransitionState] = useState(transitionStates.NOT_READY);

    const containerRef = createRef();

    const fadeRefs = [];
    function addFadeRef(element){
        fadeRefs.push(element);
    }

    const moveForward = (key) => () => {
        let scrollNode = scrollContainerRefs[key];
        let minTranslate = window.document.body.offsetWidth - scrollNode.scrollWidth - 20;
        let newXPos = {...xPos, [key] : Math.max(minTranslate, (xPos[key] || 0) - 325)}
        setXPos(newXPos);
    }

    const moveBackward = (key) => () => {
        setXPos({...xPos, [key] : Math.min(0,xPos[key] + 325)});
    }

    let overlayControl = {};

    overlayControl.setDisplayedOverlay = (arr)=> {
        setDisplayedOverlay(arr);
    };
    overlayControl.closeOverlay = closeOverlay;

    const parallaxEls = useRef([]);
    const addParallaxElsRef = (shift)=>(element)=>{
        if(!element){
            return;
        }
        parallaxEls.current.push({el : element, shift : shift})
    };

    const addParallaxAndFadeRef = (shift) => (element)=>{
        addParallaxElsRef(shift)(element);
        addFadeRef(element);
    }

    useLayoutEffect(()=>{
        if(props.readyForTransition && props.firstLoad){
            firstLoadAnimation(containerRef, fadeRefs, 1, ()=>props.defer.resolve())
        }else if(props.readyForTransition && props.exit){
            fadeOutAnimation(containerRef, fadeRefs, props.dir, ()=>props.defer.resolve());
        }else if(props.readyForTransition && props.enter){
            fadeInAnimation(containerRef, fadeRefs, props.dir || 1, ()=>props.defer.resolve())
        }
    }, [props.readyForTransition])

    useLayoutEffect(()=>{

        if(props.setReadyForTransition){
            let decodeImgs = Array.from(containerRef.current.getElementsByTagName('img'))
            .filter((d)=>{
                let src = d.src;
                let extension = src.substring(src.lastIndexOf('.'), src.length);
                return extension !== '.svg'
            })
            .map((d)=>({
                p : d.decode().catch((e) => {console.log(d.src)}),
                d : d
            }));

            Promise.all(decodeImgs.map(d=>d.p))
            .then(()=>{
                props.setReadyForTransition(true);
            })
            window.dcimg = decodeImgs;
        }
    }, [props.enter]);

    return (
        <div id="slide" style={{opacity : props.firstLoad ? 0 : 1}}
            className={styles.slide} ref={containerRef}>
            {props.children({...overlayControl,
                displayedOverlay: displayedOverlay,
                moveBackward : moveBackward,
                moveForward : moveForward,
                addScrollRef : addScrollRef,
                xPos : xPos,
                addFadeRef : addFadeRef,
                addParallaxElsRef,
                addParallaxAndFadeRef,
                id : props.id})}
            {props.absoluteImage && <img alt="" className={styles.absoluteImage} id={props.absoluteImage.id} src={props.absoluteImage.src}/>}
        </div>
    );
}

export default Slide;
