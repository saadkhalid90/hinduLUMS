import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import MobileContainer from './slide-components/MobileContainer';
import {mobileSlideMap, mobileImageArr} from './slide-components/SlideMap';

class MobileApp extends React.Component {

  componentDidMount() {
    mobileImageArr.forEach((image) => {
        new Image().src = image
    });
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route render={({location})=>{
          return (
            <Switch>
              {
                Object.keys(mobileSlideMap).map((d)=>{
                  return (
                    <Route exact path={`/${d}`}>
                        <MobileContainer
                        projectName="Outraged"
                        path={d}
                        />
                    </Route>
                  )
                })
              }
              <Redirect to="/home" />
            </Switch>
          )
        }}/>
      </Router>
    );
  }
}

export default MobileApp;
