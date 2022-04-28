import React, { useState, useRef } from "react";

export const Add = ({ addTeacher }) => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    city: "",
  });
  const inputRef = useRef();

  const handleAddTeacher = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  const submitAdd = () => {
    addTeacher(newTeacher);
    setNewTeacher({ ...newTeacher, name: "", city: "" });
  };

  return (
    <div className="add">
      <input
        autoFocus
        ref={inputRef}
        required
        type="text"
        name="name"
        placeholder="Person"
        value={newTeacher.name}
        onChange={handleAddTeacher}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={newTeacher.city}
        onChange={handleAddTeacher}
      />
      <button onClick={submitAdd}>Add</button>
    </div>
  );
};
