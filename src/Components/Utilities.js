import React, { useState } from 'react';
import '../styles/header.css';
import '../styles/main.css';
import Navigation from './Navigation';
import Search from '../assets/Search';
import ColourInverter from '../assets/ColourInverter';


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