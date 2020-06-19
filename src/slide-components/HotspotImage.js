import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './css-modules/hotspotImage.module.css';
import classNames from 'classnames';
import Fade from 'react-reveal/Fade';

class Tooltip extends React.Component {
    constructor(props) {
      super(props);
      // Tooltip Container
      this.el = document.createElement('div');
    }

    componentDidMount() {
      document.body.appendChild(this.el);
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

function HotspotImage(props){

    const [tooltipData, setToolTipData] = useState({show : false, text : '', top : 0, left : 0});

    const onMouseEnter = d => e => {
        setToolTipData({show : true, name: d.name, text : d.text, top : e.clientY  ,left : e.clientX + 20});
    }

    const onMouseLeave = e => {
        setToolTipData({show : false, text : '', top : 0, left : 0});
    }



    return (
    <Fragment>
      <div className={classNames(styles.imgOverlayWrap, props.bordered && props.imageBorderClass, props.rotate && props.imageRotateClass)} style={{width: props.width, marginBottom: props.marginBottom}}>
          <img alt="" src={props.imageSrc}/>
          <svg viewBox={`0 0 ${props.vbx} ${props.vby}`}>
              {
              props.hotspots.map((d, i)=>{
                  return <g style={{cursor: 'pointer'}} key={i} fill={d.fill} onMouseEnter={onMouseEnter({name: d.name, text: d.text})} onMouseLeave={onMouseLeave}>
                            <circle className={props.pulsating ? styles.pulse : styles.hover} cx={d.x} cy={d.y} r={props.r} style={{transformOrigin: `${d.x}px ${d.y}px`}}/>
                         </g>
              })
              }
          </svg>
      </div>
        <Tooltip>
          <Fade when={tooltipData.show} duration={400}>
            <div className={styles.tooltip} style={{top : tooltipData.top, left : tooltipData.left}}>
                <p className={styles.bold}>{tooltipData.name}</p>
                <p className={styles.tooltip_text}>{tooltipData.text}</p>
            </div>
          </Fade>
        </Tooltip>


    </Fragment>
    )
}

export default HotspotImage;
