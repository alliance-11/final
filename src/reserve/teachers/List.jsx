import React from "react";
import { Item } from "./Item";

export const List = ({ teachers, handleDelete }) => {
  return (
    <div className="teachers">
      {teachers.map((teacher) => (
        <Item key={teacher.id} teacher={teacher} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
