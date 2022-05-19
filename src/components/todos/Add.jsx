import React, { useRef, useState } from "react";

export const Add = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });

  const inputRef = useRef();

  const handleAddTodo = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const submitAdd = () => {
    addTodo(newTodo);
    setNewTodo({ 
      ...newTodo, 
      title: "", 
      description: "" });
  };

  return (
    <div className="add">
      <input
        autoFocus
        ref={inputRef}
        type="text"
        name="title"
        placeholder="Title"
        required
        value={newTodo.title}
        onChange={handleAddTodo}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newTodo.description}
        onChange={handleAddTodo}
      />
      <button onClick={() => submitAdd(inputRef.current.focus())}>Add</button>
    </div>
  );
};
