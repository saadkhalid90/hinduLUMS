import React from 'react';
import styles from './css-modules/overlay.module.css';

function OverlaySlideshow(props){
    return (
      <div className={styles.overlayContent} style={{height: window.innerHeight}}>
        <div className={styles.OverlaySlideshow}>
          <div className={styles.OverlaySlideshow_content}>
            <div className={styles.overLaySlideshow_imageContainer}>{props.render()}</div>
          </div>
          <div className={styles.overlaySlideshow_bg}></div>
        </div>
        <div className={styles.OverlayDescription}>
          <div className={styles.OverlayDescription_Title} style={{display: 'none'}}>{props.title}</div>
          <div className={styles.OverlayDescription_Desc}>{props.description}</div>
          <div className={styles.overlaySlideshow_source}>
            {props.source.length !== 0 && <p>Source: {props.source}</p>}
            {props.originalLink && <span onClick={() => window.open(props.originalLink)} className={styles.overlaySlideshow_link}>Original Link</span>}
          </div>
        </div>
      </div>
    )
}

export default OverlaySlideshow;
