import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const Item = ({ teacher, handleDelete }) => {
  return (
    <div className="teacher">
      <div className="item">{teacher.name}</div>
      <div className="item">{teacher.city}</div>
      <div className="icons">
        <FaEdit className="icon" role="button" tabIndex="0" />
        <FaTrashAlt
          onClick={() => handleDelete(teacher._id)}
          className="icon"
          role="button"
          tabIndex="0"
        />
      </div>
    </div>
  );
};
