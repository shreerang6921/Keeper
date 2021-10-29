import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    const newNote = {
      title:note.title,
      content:note.content
    }

    axios.post("/create",newNote)
  }

  return (
    <div>
      <form>
        <input
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
          rows="3"
        />
        <button onClick={submitNote}><FontAwesomeIcon icon={faPlus} /></button>
      </form>
    </div>
  );
}

export default CreateArea;
