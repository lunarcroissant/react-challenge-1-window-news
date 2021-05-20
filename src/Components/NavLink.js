import React from 'react';
import '../styles/header.css';

function NavLink(props) {



  return (
    <a class="header__navLink" aria-label={props.ariaLabel} href="#">{props.named}</a>
  );

}

export default NavLink;