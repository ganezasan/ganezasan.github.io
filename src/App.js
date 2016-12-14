import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
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
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
