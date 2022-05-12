import React, { useState, useRef } from "react";

export const Add = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({
    todo: "",
    description: "",
  });
  const inputRef = useRef();

  const handleAddTodo = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const submitAdd = () => {
    addTodo(newTodo);
    setNewTodo({ ...newTodo, todo: "", description: "" });
  };

  return (
    <div className="add">
      <input
        autoFocus
        ref={inputRef}
        required
        type="text"
        name="todo"
        placeholder="Todo"
        value={newTodo.todo}
        onChange={handleAddTodo}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newTodo.description}
        onChange={handleAddTodo}
      />
      <button onClick={submitAdd}>Add</button>
    </div>
  );
};
