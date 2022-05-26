import React, { useState } from "react";
import Logo from "../../images/logo.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./Header.css";

function Header() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <img src={Logo} alt="DefaultLogo" />
        </div>
        <div className="logo-name">
          <h2>SQLCompiler</h2>
        </div>
      </div>
      <div className="header-right">
        {darkMode ? (
          <Brightness7Icon
            className="mode"
            onClick={() => setDarkMode(false)}
          />
        ) : (
          <DarkModeIcon className="mode" onClick={() => setDarkMode(true)} />
        )}
      </div>
    </div>
  );
}

export default Header;
