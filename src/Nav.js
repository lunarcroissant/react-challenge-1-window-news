import React from 'react';
import NavLink from './NavLink.js';
// import Logo from './Logo.js';
// import Utilities from './Utilities.js';
import './header.css';

function Nav() {

  const linkName = ['Latest News', 'About', 'Contact'];
  // const linkName = 'Latest news';


  return (
    <nav className="header__nav mobile-off">
      <NavLink named={linkName[0]} />
      <NavLink named={linkName[1]} />
      <NavLink named={linkName[2]} />
    </nav>
  );
}

export default Nav;