import searchLogo from './assets/Search';
import React, { useState } from 'react';
import colourInverter from './assets/ColourInverter';
// import menuIcon from './static/Menuicon.svg';
import './header.css';
import './main.css';
import Navigation from './Navigation';
import Search from './assets/Search';
import ColourInverter from './assets/ColourInverter';


function Utilities() {

  return (
    <div className="header__utilities">
      <Search />
      <ColourInverter />
      <Navigation />
    </div>

  );

}



export default Utilities;