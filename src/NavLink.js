import React from 'react';
import './header.css';

function NavLink(props) {



  return (
    <a class="header__navLink">{props.named}</a>
  );

}

export default NavLink;