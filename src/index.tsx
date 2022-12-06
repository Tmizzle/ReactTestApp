import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import { MainMenu, MainMenuItem } from './components/MainMenu/MainMenu';
import { HashRouter, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';
import UserLoginPage from './components/UserLoginPage/UserLoginPage';
import { Switch } from 'react-router-dom';

const menuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("Contact", "/Contact"),
  new MainMenuItem("Log in", "/user/login")
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainMenu items={ menuItems } ></MainMenu>
    <HashRouter>
      <Switch>
        <Route exact path="/" component= { HomePage } />
        <Route path="/contact" component= { ContactPage } />
        <Route path="/user/login" component= { UserLoginPage } />
      </Switch>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
