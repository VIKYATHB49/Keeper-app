import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const submitNote = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="create-area">
      <form onSubmit={submitNote}>
        {" "}
        {/* Attach submitNote to form's onSubmit */}
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
        <button type="submit">Add</button>{" "}
        {/* Use type="submit" for the button */}
      </form>
    </div>
  );
}

export default CreateArea;
