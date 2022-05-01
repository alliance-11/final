import React from "react";
import { TeacherItem } from "./TeacherItem";

export const TeachersList = ({ filteredTeachers, handleDelete }) => {
  return (
    <div className="teachers">
      {filteredTeachers.map((teacher) => (
        <TeacherItem
          key={teacher.id}
          teachers={filteredTeachers
          }
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
