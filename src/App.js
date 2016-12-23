import React, { Component } from 'react';
import { HashRouter, Match, Miss } from 'react-router';
import ReactGA from 'react-ga';
ReactGA.initialize(process.env.REACT_APP_GAID);
import './App.css';

import {
  About,
  NotFound,
  Header,
  Footer,
  Works,
  Talks,
} from './containers';

function logPageView(pathname) {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
}

class App extends Component {
  render() {
    return (
      <HashRouter onChange={logPageView}>
        {({ router, location }) => (
          <div className="container">
            <Header location={location}/>
            <div className="content">
              <Miss component={NotFound} />
              <MatchWithGA pattern="/" exactly component={() => <About router={router} />}/>
              <MatchWithGA pattern="/works" component={() => <Works router={router} />}/>
              <MatchWithGA pattern="/talks" component={() => <Talks router={router} />}/>
            </div>
            <Footer />
          </div>
        )}
      </HashRouter>
    );
  }
}

const MatchWithGA = ({ component: Component, ...rest }) => (
  <Match {...rest} render={props => {
    if(process.env.NODE_ENV === 'production') {
      logPageView(props.pathname);
    }
    return <Component {...props}/>;
  }}/>
);

export default App;
