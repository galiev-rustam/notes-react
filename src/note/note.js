import React, { Component } from "react";
import trash from "../logo/trash.svg";
import style from "./note.module.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={style.note}>
        <div className={style.main_menu}>
          <img src={trash} alt="trash" className={style.logo_trash} />
        </div>
        <div className={style.header}></div>
      </div>
    );
  }
}

export default App;
