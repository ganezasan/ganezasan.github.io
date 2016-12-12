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
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
