import React from 'react';
import { Link } from 'react-router';

import './Header.css';

function Header() {
  return (
    <header className="navbar navbar-light navbar-static-top bd-navbar">
      <div className="container">
        <nav>
          <div className="clearfix">
            <button className="navbar-toggler float-xs-right hidden-sm-up" type="button" data-toggle="collapse" data-target="#bd-main-nav" aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation"></button>
            <Link to='/' className='navbar-brand hidden-sm-up'>About</Link>
          </div>
          <div className="collapse navbar-toggleable-xs" id="bd-main-nav">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <Link to='/' className='nav-item nav-link'>About</Link>
              </li>
              <li className="nav-item active">
                <Link to='/works' className='nav-item nav-link'>Works</Link>
              </li>
              <li className="nav-item active">
                <Link to='/talks' className='nav-item nav-link'>Talks</Link>
              </li>
              <li className="nav-item active">
                <a target='_blank' href='https://github.com/ganezasan' className='nav-item nav-link'>Github</a>
              </li>
              <li className="nav-item active">
                <a target='_blank' href='https://twitter.com/ganezasan' className='nav-item nav-link'>Twitter</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
