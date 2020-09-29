import React from "react";
import "./main_menu.css";
import logo_settings from "../logo/settings.png";
import logo_account from "../logo/account.png";
import logo_telegram from "../logo/telegram.svg";
import logo_notes from "../logo/notes.svg";
import { NavLink } from "react-router-dom";

const MainMenu = (props) => {
  return (
    <div className="main_menu">
      <div className="menu_notes">
        <NavLink to="/notes">
          <img src={logo_notes} alt="notes" />
        </NavLink>
      </div>
      <div className="account">
        <NavLink to="/profile">
          <img src={logo_account} alt="account" />
        </NavLink>
      </div>
      <div className="main_settings">
        <NavLink to="/settings">
          <img src={logo_settings} alt="settings" />
        </NavLink>
      </div>
      <div className="telegram">
        <NavLink to="/telegram">
          <img src={logo_telegram} alt="telegram" />
        </NavLink>
      </div>
    </div>
  );
};

export default MainMenu;
