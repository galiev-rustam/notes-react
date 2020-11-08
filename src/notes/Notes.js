import React from "react";
import { connect } from "react-redux";
import Note from "./Note";
import trash from "../logo/trash.svg";
import createNewIcon from "../logo/create-new.png";
import { createNote } from "../redux/actions";

class Notes extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let NotesMap = this.props.notes.notes.map((note) => {
      return <Note key={note} />;
    });
    return (
      <div className="notes">
        <div>
          <img
            src={createNewIcon}
            alt="create new note"
            className="create-icon"
            onClick={this.createNote}
          />
          <img src={trash} alt="trash" className="trash-icon" />
        </div>
        <div className="notes-list">{NotesMap}</div>
      </div>
    );
  }

  createNote = () => {
    let id = this.props.notes.notes.length;
    this.props.createNote(id);
  };
}

const mapDispatchToProps = {
  createNote,
};
const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
