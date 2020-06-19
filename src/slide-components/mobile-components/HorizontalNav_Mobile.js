import React from 'react';
import styles from '../css-modules/HorizontalNav.module.css';
import { MdMenu } from "react-icons/md";
import LUMS_logo from '../../resources/lums_orig.png';
import { Link } from "react-router-dom";

class HorizontalNavMobile extends React.Component {

  constructor(props){
    super(props);
    this.state = {activeClass: styles.standardNav}
    this.containerRef = React.createRef();
  }


  componentDidMount(){
    if (document.getElementById("slide")) {
      document.getElementById("slide").addEventListener('scroll', () => {
         let activeClass = styles.standardNav;
         let removeClass = styles.backgroundNav;
         if(document.getElementById("slide").scrollTop === 0){
             activeClass = styles.standardNav
             removeClass = styles.backgroundNav
         }
         else {
           activeClass = styles.backgroundNav
           removeClass = styles.standardNav
         }
         if (this.containerRef.current) {
            if(!this.containerRef.current.classList[activeClass]){
              this.containerRef.current.classList.add(activeClass)
              this.containerRef.current.classList.remove(removeClass)
            }
          }
      });
    }
  }

  componentDidUpdate(){
    if(this.props.transitioning){
      this.containerRef.current.classList.add(styles.navContainerMobileFade)
      this.containerRef.current.classList.remove(styles.backgroundNav)
    }else{
      this.containerRef.current.classList.remove(styles.navContainerMobileFade)
      this.containerRef.current.classList.add(styles.standardNav)
    }

    document.getElementById("slide").addEventListener('scroll', () => {
      let activeClass = styles.standardNav;
      let removeClass = styles.backgroundNav;
      if(document.getElementById("slide").scrollTop === 0){
          activeClass = styles.standardNav
          removeClass = styles.backgroundNav
      }
      else {
        activeClass = styles.backgroundNav
        removeClass = styles.standardNav
      }
     if(!this.containerRef.current.classList[activeClass]){
       this.containerRef.current.classList.add(activeClass)
       this.containerRef.current.classList.remove(removeClass)
     }
   });
  }

  render() {
    return (
      <div ref={this.containerRef} className={`${styles.navContainerMobile} ${this.state.activeClass}`} style={{color: this.props.color}}>
        <div className={styles.logo_project_name}>
          <img alt="Lahore University of Management Sciences" src={LUMS_logo} className={styles.lums_logo}/>
          <Link  to="/home" style={{textDecoration: 'none', color: 'inherit'}}>
            <p className={styles.projectName} style={{opacity : this.props.hideProjectName ? 0 : 1}}>{this.props.projectName}</p>
          </Link>
        </div>
        <div className={styles.menu}>
          <MdMenu onClick={() => this.props.toggleProjectNav()}/>
        </div>
      </div>
    )
  }
}

export default HorizontalNavMobile;
