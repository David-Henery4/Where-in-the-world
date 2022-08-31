import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, setTheme } from "../toolkit/features/overall/overallSlice";
import { BsMoonFill, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const dispatch = useDispatch()
  const {isDarkMode} = useSelector(store => store.overall)
  //
  const switchingThemes = () => {
    dispatch(toggleDarkMode())
    if (isDarkMode) {
      // set to "darkMode"
      dispatch(setTheme("darkMode"))
    }
    if (!isDarkMode){
      // set to "lightMode"
      dispatch(setTheme("lightMode"))
    }
  }
  //
  // useEffect(() => {
  //   switchingThemes();
  //   // eslint-disable-next-line
  // }, [isDarkMode])
  //
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar__logo">Where in the World?</h1>
        <div className="navbar-mode" onClick={switchingThemes}>
          {isDarkMode ? (
            <BsMoonFill className="navbar-mode__icon" />
          ) : (
            <BsMoon className="navbar-mode__icon" />
          )}

          <p className="navbar-mode__status">Dark Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
