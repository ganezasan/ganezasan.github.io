import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css';

class Header extends Component {
  state={
    expand: false
  }

  showLinks(expand) {
    this.setState({
      expand: !expand
    });
  }

  render() {
    const { expand } = this.state;
    const expandClassName = expand ? 'in' : '';

    const links = [
      {
        to: '/',
        title: 'TAKAYUKI ITO'
      },
      {
        to: '/works',
        title: 'Works'
      },
      {
        to: '/talks',
        title: 'Talks'
      },
      {
        to: '/bookshelf',
        title: 'Bookshelf'
      }
    ];

    return (
      <header className="navbar navbar-light navbar-static-top bd-navbar">
        <nav>
          <div className="clearfix">
            <button
              className="navbar-toggler float-xs-right hidden-sm-up "
              type="button"
              data-toggle="collapse"
              data-target="#bd-main-nav"
              aria-controls="bd-main-nav"
              aria-expanded={expand}
              aria-label="Toggle navigation"
              onClick={() => this.showLinks(expand)}
              >
            </button>
            <Link to='/' className='navbar-brand hidden-sm-up'>TAKAYUKI ITO</Link>
          </div>
            <div className={`collapse ${expandClassName} navbar-toggleable-xs`} id="bd-main-nav" aria-expanded={expand}>
              <ul className="nav navbar-nav">
                {links.map(({to, title}, index) => (
                  <li key={index} className="nav-item" onClick={() => this.showLinks(expand)}>
                    <Link to={to} className='nav-item nav-link'>{title}</Link>
                  </li>
                ))}
                <li className="nav-item" onClick={() => this.showLinks(expand)}>
                  <a target='_blank' href='https://github.com/ganezasan' className='nav-item nav-link'>Github</a>
                </li>
                <li className="nav-item" onClick={() => this.showLinks(expand)}>
                  <a target='_blank' href='https://twitter.com/ganezasan' className='nav-item nav-link'>Twitter</a>
                </li>
              </ul>
            </div>
        </nav>
      </header>
    );
  }
}

export default Header;
