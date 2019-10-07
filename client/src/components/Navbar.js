import React, { useState, useEffect } from "react";

export const useDarkMode = (initialVal) => {
    const [darkMode, setDarkMode] = useState(initialVal);
    const toggleMode = e => {
    
      setDarkMode(!darkMode);
    };
  
    useEffect(() => {
      return darkMode
        ? document.querySelector("body").classList.add("dark-mode")
        : document.querySelector("body").classList.remove("dark-mode");
    }, [darkMode]);
    return [darkMode, toggleMode];
  };

const Navbar = () => {
    const [dark, setDark] = useDarkMode(false);
    return (
    <nav className="navbar">
      <h1 data-testid='header'>Womens Football</h1>
      <button onClick={() => setDark()} data-testid='darkBtn'>Toggle Dark Mode</button>
    </nav>
  );
};
export default Navbar;