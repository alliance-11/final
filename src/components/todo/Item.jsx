import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const Item = ({ todo, handleDelete }) => {
  return (
    <div className="todo">
      <div className="item">{todo.todo}</div>
      <div className="item">{todo.description}</div>
      <div className="icons">
        <FaEdit className="icon" role="button" tabIndex="0" />
        <FaTrashAlt
          onClick={() => handleDelete(todo._id)}
          className="icon"
          role="button"
          tabIndex="0"
        />
      </div>
    </div>
  );
};
