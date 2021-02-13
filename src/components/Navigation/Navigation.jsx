import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import logo from '../../Assets/logo.svg';
import './styles.scss';
import {firebaseAuth} from '../../context/Auth';

const Navigation = () => {
  const {handleSignout} = useContext(firebaseAuth);
  return (
    <nav className="nav card--container">
      <div className="nav__container">
        <NavLink className="nav__menu-link flex--row" to="/home">
          <div className="nav__logo--icon"><img  src={logo} className="nav__logo" alt="App logo"/></div>
        </NavLink>
        <NavLink
          to="/home"
          className="nav__menu-link flex--row"
        >
         <button className="nav--button" onClick={handleSignout} >Sign Out</button>
        </NavLink>
        <NavLink
          to="/home"
          activeClassName="nav__menu-link--active"
          className="nav__menu-link flex--row"
        >
         <button className="nav--button">Home</button>
        </NavLink>
        <NavLink
          to="/news"
          activeClassName="nav__menu-link--active"
          className="nav__menu-link flex--row"
        >
          <button className="nav--button">News</button>
        </NavLink>
        <NavLink
          to="/tracker"
          activeClassName="nav__menu-link--active"
          className="nav__menu-link flex--row"
        >
          <button className="nav--button">Tracker</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;