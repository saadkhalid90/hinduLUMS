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
import ReactGA from 'react-ga';
ReactGA.initialize('UA-165837184-10');

class MobileApp extends React.Component {

  componentDidMount() {
    mobileImageArr.forEach((image) => {
        new Image().src = image
        ReactGA.set({ page: window.location.pathname }); // Update the user's current page
        ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
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
                        projectName="Imagining Lahore as a Hindu City"
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
