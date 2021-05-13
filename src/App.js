import logo from './static/WindowNewsLogo.svg';
import searchLogo from './static/search.svg';
import colourInverter from './static/ColourInverter.svg';
import './App.css';
import './card.css';
import './header.css';
import './footer.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Utilities from './Utilities';

import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import './main.css';
import Header from './Header';
import Logo from './Logo';
import Card from './Card';
import Footer from './Footer';
import Nav from './Nav';
import NavLink from './NavLink';
import reportWebVitals from './reportWebVitals';
import CardReverse from './CardReverse';

function App() {
  return (

    <div>
      <Header />

      <Card headline='Two penguins celebrate Brad’s birthday' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' date='10.02.2021' readTime='9' />

      <CardReverse headline='Another random event happened in some place' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' date='31.02.3030' readTime='4' />

      <Footer footerText='&copy;WN 2021 (please don’t steal our trademark)' />

    </div>

    // <>
    //   <Router>
    //     <Utilities />
    //     <Switch>
    //       <Route path='/' />
    //     </Switch>
    //   </Router>
    // </>

  );
}


export default App;
