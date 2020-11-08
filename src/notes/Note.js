import React from "react";
import trash from "../logo/trash.svg";
import style from "./note.module.css";

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      note_text: "",
    };
  }

  changeHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div className={style.note}>
        <div className={style.main_menu}>
          <p>New note</p>
          <img src={trash} alt="trash" className={style.logo_trash} />
        </div>
        <div className={style.header}>
          <textarea
            className={style.textarea}
            value={this.state.note_text}
            name="note_text"
            onChange={this.changeHandler}
            placeholder="Write your note here..."
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Note;
