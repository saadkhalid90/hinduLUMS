import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Container from './slide-components/Container';
import {slideMap, imageArr} from './slide-components/SlideMap';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-165837184-10');

class App extends React.Component {

  componentDidMount() {
    imageArr.forEach((image) => {
        new Image().src = image
    });
    ReactGA.set({ page: window.location.pathname }); // Update the user's current page
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      { /* <ul style={{position: "fixed", top: 0, left : 20, zIndex : 100}}>
          <Link style={{color: 'white'}} to={{pathname : "/chapter1slide1"}}><li>slide 1</li></Link>
          <Link style={{color: 'white'}} to={{pathname : "/chapter2slide1"}}><li>slide 2</li></Link>
          <Link style={{color: 'white'}} to={{pathname : "/chapter3slide1"}} ><li>slide 3</li></Link>
          <Link style={{color: 'white'}} to={{pathname : "/chapter4slide1"}} ><li>slide 4</li></Link>
        </ul> */}
        <Route render={({location})=>{
          return (
            <Switch>
              {
                Object.keys(slideMap).map((d)=>{
                  return Object.keys(slideMap[d].slides).map((s,i) => (
                    <Route exact path={`/${s}`}>
                      <Container
                        projectName="Women Action Forum"
                        path={s}
                        currentChapter={{name: slideMap[d].name, link: d}}
                      />
                    </Route>
                  ));
                }).flat()
              }
              <Redirect to="/home" />
            </Switch>
          )
        }}/>
      </Router>
    );
  }
}

export default App;
