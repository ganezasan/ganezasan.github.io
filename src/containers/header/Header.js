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
                <li className="nav-item">
                  <Link to='/' className='nav-item nav-link'>TAKAYUKI ITO</Link>
                </li>
                <li className="nav-item">
                  <Link to='/works' className='nav-item nav-link'>Works</Link>
                </li>
                <li className="nav-item">
                  <Link to='/talks' className='nav-item nav-link'>Talks</Link>
                </li>
                <li className="nav-item">
                  <Link to='/bookshelf' className='nav-item nav-link'>Bookshelf</Link>
                </li>
                <li className="nav-item">
                  <a target='_blank' href='https://github.com/ganezasan' className='nav-item nav-link'>Github</a>
                </li>
                <li className="nav-item">
                  <a target='_blank' href='https://twitter.com/ganezasan' className='nav-item nav-link'>Twitter</a>
                </li>
              </ul>
            </div>
        </nav>
      </header>
    );
  }
}

// <Navbar id="main-nav" toggleButton toggleNavKey={1} staticTop={true} fluid={true} >
//   <Nav key={1}>
//     <NavItem key={1} href="/movies">Movies</NavItem>
//     <NavItem key={2} href="/concerts">Concerts</NavItem>
//     <NavItem key={3} href="/plays">Plays</NavItem>
//     <Nav className="pull-right">
//       <NavItem key={1} href="#"><i className="fa fa-sign-in"></i> Login</NavItem>
//     </Nav>
//   </Nav>
// </Navbar>

export default Header;
