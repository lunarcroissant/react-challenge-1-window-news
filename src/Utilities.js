import searchLogo from './static/search.svg';
import React, { useState } from 'react';
import colourInverter from './static/ColourInverter.svg';
// import menuIcon from './static/Menuicon.svg';
import './header.css';
import './main.css';
import Navigation from './Navigation';


function Utilities() {

  return (
    <div className="header__utilities">
      <img className="header__utilitiesSVG" src={searchLogo} alt={searchLogo} />
      <img className="header__utilitiesSVG" src={colourInverter} alt={colourInverter} />
      <Navigation />
    </div>

  );

}



export default Utilities;