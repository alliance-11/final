import React from "react";
import { Item } from "./Item";

export const List = ({ todos, handleDelete }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Item key={todo._id} todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
