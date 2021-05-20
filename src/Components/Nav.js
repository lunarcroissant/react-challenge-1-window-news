import React from 'react';
import NavLink from './NavLink.js';
import '../styles/header.css';

function Nav() {

  const linkName = ['Latest News', 'About', 'Contact'];
  const ariaLabel = ['lastest-news-link', 'about-window-news-link', 'contact-us-link'];


  return (
    <nav aria-label="desktop-header-options" className="header__nav mobile-off">
      <NavLink ariaLabel={ariaLabel[0]} named={linkName[0]} />
      <NavLink ariaLabel={ariaLabel[1]} named={linkName[1]} />
      <NavLink ariaLabel={ariaLabel[2]} named={linkName[2]} />
    </nav>
  );
}

export default Nav;