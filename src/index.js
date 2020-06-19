import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MobileApp from './MobileApp';
import './resources/fonts/Nastaliq.ttf'
import * as serviceWorker from './serviceWorker';

function getAppElement(){
  //  return (window.innerWidth > 1025) ? <App/> : <MobileApp/>
    return <App/>
}

window.onresize = function(){
    ReactDOM.render(getAppElement(), document.getElementById('root'));
}

ReactDOM.render(getAppElement(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
