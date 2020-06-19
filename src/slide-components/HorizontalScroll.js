import React from 'react';
import styles from './css-modules/horizontalScroll.module.css'

function HorizontalScroll(props){

    return (
    <div style={{position : 'relative', height: '100%'}}>
      <div className={styles.scrollWrap}>
        <div className={styles.scrollContainer} style={{transform : `translate3d(${props.xPos}px, 0px, 0px)`}} ref={props.scrollContainerRef}>
            {props.children}
        </div>
      </div>
    </div>
    )
}

export default HorizontalScroll;
