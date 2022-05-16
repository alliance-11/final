import React, { useContext, useRef, useState } from "react";
import { Context } from "../context/DataContext";

export const Add = () => {
  const { addStudent } = useContext(Context);
  const [newStudent, setNewStudent] = useState({
    name: "",
    specialization: "",
  });

  const inputRef = useRef();

  const handleAddStudent = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const submitAdd = () => {
    addStudent(newStudent);
    setNewStudent({ ...newStudent, name: "", specialization: "" });
  };

  return (
    <div className="add">
      <input
        autoFocus
        ref={inputRef}
        type="text"
        name="name"
        placeholder="Name"
        value={newStudent.name}
        onChange={handleAddStudent}
      />
      <input
        type="text"
        name="specialization"
        placeholder="Specialization"
        value={newStudent.specialization}
        onChange={handleAddStudent}
      />
      <button onClick={() => submitAdd(inputRef.current.focus())}>Add</button>
    </div>
  );
};
