import './styles/card.css';
import './styles/header.css';
import './styles/footer.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Utilities from './Utilities';

import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './Components/Header';
// import Logo from './Logo';
import Card from './Components/Card';
import Footer from './Components/Footer';
// import Nav from './Nav';
// import NavLink from './NavLink';
// import reportWebVitals from './reportWebVitals';
import CardReverse from './Components/CardReverse';

function App() {
  return (

    <div>
      <Header />

      <main>

        <Card headline='Two penguins celebrate Brad’s birthday' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' assistiveText='Two penguins jumping off a rock' date='10.02.2021' readTime='9' />

        <CardReverse headline='Another random event happened in some place' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' assistiveText='A random image off Unsplash' date='31.02.3030' readTime='4' />


      </main>

      <Footer footerText='&copy;WN 2021 (please don’t steal our trademark)' />

    </div>

  );
}


export default App;
