import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [set, setNow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setNow(false);
    event.preventDefault();
  }
  function Expand() {
    setNow(true);
    console.log(set);
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ visibility: set === true ? "visible" : "Hidden" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={set ? 3 : 1}
          onClick={Expand}
        />
        {/* <button onClick={submitNote}>
          <AddIcon />
        </button> */}
        <Zoom in={set}>
          {/* <Zoom in={true}> */}
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
