import React, { Component } from 'react';
import { HashRouter, Match, Miss } from 'react-router';
import './App.css';

import {
  About,
  NotFound,
  Header,
  Footer,
  Works,
  Talks,
} from './containers';

class App extends Component {
  render() {
    return (
      <HashRouter>
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
