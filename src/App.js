import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import './App.css';

import {
  About,
  NotFound,
  Header
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
            </div>
          </div>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
