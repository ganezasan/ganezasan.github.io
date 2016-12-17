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

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

class App extends Component {
  render() {
    return (
      <HashRouter onUpdate={logPageView}>
        {({ router }) => (
          <div className="container">
            <Header />
            <div className="content">
              <Miss component={NotFound} />
              <Match pattern="/" exactly component={() => <About router={router} />} />
              <Match pattern="/works" component={() => <Works router={router} />} />
              <Match pattern="/talks" component={() => <Talks router={router} />} />
            </div>
            <Footer />
          </div>
        )}
      </HashRouter>
    );
  }
}

export default App;
