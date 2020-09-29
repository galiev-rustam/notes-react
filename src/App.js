import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/main.css";
import Note from "./note/Note";
import Profile from "./profile/Profile";
import Telegram from "./telegram/Telegram";
import Settings from "./settings/Settings";
import MainMenu from "./main_settings/MainMenu";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MainMenu />
        <div className="main_content">
          <Route path="/notes" component={Note} />
          <Route path="/profile" component={Profile} />
          <Route path="/telegram" component={Telegram} />
          <Route path="/settings" component={Settings} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
