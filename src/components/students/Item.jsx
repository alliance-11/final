import { useContext, useRef, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Context } from "../context/DataProvider";

export const Item = ({ student }) => {
  const { editStudent, deleteStudent } = useContext(Context);
  const inputName = useRef();
  const inputSpec = useRef();

  const [editMode, setEditMode] = useState(false);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const nameNew = inputName.current.value;
      const specNew = inputSpec.current.value;
      setEditMode(false);
      editStudent(student._id, { name: nameNew, specialization: specNew });
    }
  };

  return (
    <div className="student">
      {/* <div className="item">{student.name}</div>
    <div className="item">{student.specialization}</div> */}
      <input
        name="name"
        ref={inputName}
        onKeyDown={onKeyDown}
        defaultValue={student.name}
        readOnly={!editMode}
      />
      <input
        name="specialization"
        ref={inputSpec}
        onKeyDown={onKeyDown}
        defaultValue={student.specialization}
        readOnly={!editMode}
      />
      <div className="icons">
        <FaEdit className="icon" role="button" tabIndex="0" 
        onClick={() =>setEditMode(!editMode)}
        />
        <FaTrashAlt
          className="icon"
          role="button"
          tabIndex="0"
          onClick={() => deleteStudent(student._id)}
        />
      </div>
    </div>
  );
};
