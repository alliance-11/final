import { useContext, useRef, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Context } from "../context/DataProvider";

export const TeacherItem = ({ teacher }) => {
  const {editTeacher, deleteTeacher}=useContext(Context)
  const inputName = useRef();
  const inputCity = useRef();

  const [editMode, setEditMode] = useState(false);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const nameNew = inputName.current.value;
      const cityNew = inputCity.current.value;
      setEditMode(false);
      editTeacher(teacher.id, { name: nameNew, city: cityNew });
    }
  };

  return (
    <div className="teacher">
      {/* <div className="item">{teacher.name}</div>
    <div className="item">{teacher.city}</div> */}
      <input
        name="name"
        ref={inputName}
        onKeyDown={onKeyDown}
        defaultValue={teacher.name}
        readOnly={!editMode}
      />
      <input
        name="city"
        ref={inputCity}
        onKeyDown={onKeyDown}
        defaultValue={teacher.city}
        readOnly={!editMode}
      />
      <div className="icons">
        <FaEdit
          className="icon"
          role="button"
          tabIndex="0"
          onClick={() => setEditMode(!editMode)}
        />
        <FaTrashAlt
          className="icon"
          role="button"
          tabIndex="0"
          onClick={() => deleteTeacher(teacher.id)}
        />
      </div>
    </div>
  );
};
