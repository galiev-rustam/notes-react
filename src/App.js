import React from "react";
import "./styles/main.css";
import Note from "./note/note";

function App() {
  return (
    <div className="app">
      <div className="notes">
        <Note />
      </div>
    </div>
  );
}

export default App;
