import React, { useState,useEffect } from "react";
import Header from "./Header";

import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([{
    title:"",
    content:""
  }]);



  
  useEffect(()=>{
    fetch("/notes").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setNotes(jsonRes));
  })


  function deleteNote(id) {
    axios.delete(`/delete/${id}`)
  }

  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id = {noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            
          />
        );
      })}
    
    </div>
  );
}

export default App;
