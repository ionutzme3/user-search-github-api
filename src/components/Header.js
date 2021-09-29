import React, {useState, useEffect} from "react";
import classes from "./Header.module.css";
import iconMood from "../assets/icon-moon.svg";
import iconLight from "../assets/icon-sun.svg";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  },[darkMode])

 
  return (
    <header className={classes.header}>
      <div >
        <h1>devFinder</h1>
      </div>
      <button onClick={()=> setDarkMode(!darkMode)}>
        <span >
          {darkMode ? "light" : "dark" }
        </span>
        <span>
          <img src={darkMode ? iconLight : iconMood } alt="" />
        </span>
      </button>
    </header>
  );
};

export default Header;
