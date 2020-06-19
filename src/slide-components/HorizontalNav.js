import React from 'react';
import styles from './css-modules/HorizontalNav.module.css';
import contentStyles from './css-modules/content.module.css';
import { MdMenu } from "react-icons/md";

function HorizontalNav(props){
    return (
    <div className={`${contentStyles.content} ${styles.navContainer}`} style={{color : props.color}}>
        <p className={styles.projectName} style={{opacity : props.hideProjectName ? 0 : 1}}>{props.projectName}</p>
        <p className={styles.chapterNumber} style={{opacity : props.hideChapterNumber ? 0 : 1}}>{props.chapterNumber}</p>
        <div className={styles.menu}>
            <MdMenu onClick={() => props.toggleProjectNav()}/>
        </div>
    </div>
    )
}

export default HorizontalNav;
