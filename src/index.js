import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import './main.css';
import App from './App';
import Header from './Header';
import Logo from './Logo';
import Card from './Card';
import Footer from './Footer';
import Utilities from './Utilities';
import Nav from './Nav';
import NavLink from './NavLink';
import reportWebVitals from './reportWebVitals';
import CardReverse from './CardReverse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
