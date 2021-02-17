import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import logo from '../../Assets/logo.svg';
import './styles.scss';
import {firebaseAuth} from '../../context/Auth';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../utils/theme';
import { GlobalStyles } from '../../utils/global';
import { useDarkMode } from '../../useDarkMode';

const Navigation = ({themeHandler}) => {
  const {handleSignout} = useContext(firebaseAuth);
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const changeTheme = () => {
    themeHandler(theme);
  }
  
  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <nav className="column--align-center card--container">
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
          <div className="theme--icon" onClick={changeTheme} ><button className="nav--button" onClickCapture={changeTheme} onClick={toggleTheme}>Change theme!</button></div>
        </nav>
      </>
      </ThemeProvider>
  );
};

export default Navigation;