import React, { useState, createRef, useRef, useLayoutEffect } from 'react';
import gsap, {TimelineMax,TweenMax, Power3, Sine} from 'gsap';
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

function fadeInAnimation(containerRef, bgImgRef, fadeRefs, dir,cb){
    ReactGA.set({ page: window.location.pathname }); // Update the user's current page
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    containerRef.current.style.zIndex = 2;
    new TimelineMax({
        onComplete : cb
    })
    .fromTo(containerRef.current, 0.7, {
        yPercent:  100 * dir,
    }, {
        yPercent: 0,
        ease: easing,
    })
    .fromTo(bgImgRef.current, 0.7, {
        yPercent:  -85 * dir,
    }, {
        yPercent: 0,
        ease: easing,
    },0)
    .staggerFromTo(fadeRefs, 1, {
        opacity: 0,
        y: 40 * dir,
    },{
        opacity: 1,
        y: 0,
        ease: easing,
    },0.05, 0.2);


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

function fadeOutAnimation(containerRef,bgImgRef,fadeRefs,dir,cb){
    let fadeOutDiv = containerRef.current.getElementsByClassName(styles.slideflex)[0];
    containerRef.current.style.zIndex = 1;
    new TimelineMax({
        onComplete : cb
    })
    .to(containerRef.current, 0.7,{
        yPercent:  -30 * dir,
        ease: easing,
    })
    .to(fadeOutDiv, 0.5,{
        opacity: 0,
        ease: easing
    },0);
}

function Slide(props){

    const [displayedOverlay, setDisplayedOverlay] = useState(['',0]);
    const closeOverlay = setDisplayedOverlay.bind(null, ['',0]);

    const scrollContainerRef = createRef();
    const [xPos, setXPos] = useState(0);

    const [transitionState, setTransitionState] = useState(transitionStates.NOT_READY);

    const containerRef = createRef();
    const bgImgRef = createRef();

    const fadeRefs = [];
    function addFadeRef(element){
        fadeRefs.push(element);
    }

    function moveForward(){
        let scrollNode = scrollContainerRef.current;
        console.log(scrollNode.scrollWidth);
        let minTranslate = window.document.body.offsetWidth - scrollNode.scrollWidth - 130;
        setXPos(Math.max(minTranslate, xPos - 500));
    }

    function moveBackward(){
        setXPos(Math.min(0,xPos + 500));
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
            fadeOutAnimation(containerRef, bgImgRef, fadeRefs, props.dir, ()=>props.defer.resolve());
        }else if(props.readyForTransition && props.enter){
            fadeInAnimation(containerRef, bgImgRef, fadeRefs, props.dir || 1, ()=>props.defer.resolve())
        }
    }, [props.readyForTransition])

    useLayoutEffect(()=>{
        parallaxEls.current.push({el : bgImgRef.current, shift : 10});
        containerRef.current.addEventListener('mousemove', (event)=>{
            const factorX = -2 * (( event.clientX / window.innerWidth) - 0.5);
            const factorY = -2 * (( (event.clientY - 100) / (window.innerHeight - 100)) - 0.5);
            onMouseMove(factorX, factorY, parallaxEls);
        });
        if(props.setReadyForTransition){
            let decodeImgs = Array.from(containerRef.current.getElementsByTagName('img'))
            .filter((d)=>{
                let src = d.src;
                let extension = src.substring(src.lastIndexOf('.'), src.length);
                return extension !== '.svg'
            })
            .map((d)=>({
                p : d.decode(),
                d : d
            }));

            Promise.all(decodeImgs.map(d=>d.p))
            .then(()=>{
                props.setReadyForTransition(true);
            })
            .catch((e)=>{
                console.log(e);
            })
            window.dcimg = decodeImgs;
        }
    }, [props.enter]);

    return (
        <div style={{opacity : props.firstLoad ? 0 : 1}}
            className={styles.slide} ref={containerRef}>
            <img ref={bgImgRef} alt="" src={props.bgImage} className={styles.bgImage}></img>
            {props.children({...overlayControl,
                displayedOverlay: displayedOverlay,
                moveBackward : moveBackward,
                moveForward : moveForward,
                scrollContainerRef : scrollContainerRef,
                xPos : xPos,
                addFadeRef : addFadeRef,
                addParallaxElsRef,
                addParallaxAndFadeRef})}
            {props.absoluteImage && <img alt="" ref={addParallaxAndFadeRef(-10)} className={styles.absoluteImage} id={props.absoluteImage.id} src={props.absoluteImage.src}/>}
        </div>
    );
}

function onMouseMove(factorX, factorY, items){
    items.current.forEach((item, i) => {
        let x = Math.round(0.5 * item.shift * Math.round(factorX * 100) / 100) * 2;
        let y = Math.round(0.5 * Math.max(-50, item.shift / 4 * (Math.round(factorY * 100) / 100))) * 2
        TweenMax.to(item.el, 2, {
            x: x,
            y: y,
            ease: Sine.easeOut
        });
    });
}

export default Slide;
