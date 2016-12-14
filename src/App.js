import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import './App.css';

import {
  About,
  NotFound,
  Header,
  Works,
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
              <Match pattern="/works" exactly component={() => <Works router={router} />} />
            </div>
          </div>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
