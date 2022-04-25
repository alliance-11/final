import { useRef, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const UserItem = ({ user, handleDelete, editUser }) => {
  const inputName = useRef();
  const inputHobby = useRef();
  const inputCity = useRef();

  const [editMode, setEditMode] = useState(false);
  
  const onKeyDown = (e) => {

    if (e.key === "Enter") {

      console.log("Enter was pressed")

      const nameNew = inputName.current.value;
      const hobbyNew = inputHobby.current.value;
      const cityNew = inputCity.current.value;

      // toggle edit mode
      setEditMode( false ); // disable EDIT mode => set it to false
      editUser(user.id, { name: nameNew, hobby: hobbyNew, city: cityNew });
    }
  };

  return (
    <div className="user">
      {/* <div className="item">{user.name}</div>
      <div className="item">{user.hobby}</div>
      <div className="item">{user.city}</div> */}
      <div className="edit">
      <input
        name="name"
        ref={inputName}
        onKeyDown={onKeyDown}
        defaultValue={user.name}
        readOnly={!editMode}
      />
      <input
        name="hobby"
        ref={inputHobby}
        onKeyDown={onKeyDown}
        defaultValue={user.hobby}
        readOnly={!editMode}
      />
      <input
        name="city"
        ref={inputCity}
        onKeyDown={onKeyDown}
        defaultValue={user.city}
        readOnly={!editMode}
      />
      {/* <button onClick={() => setEditMode(!editMode)}>Edit</button> */}
    </div>

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
          onClick={() => handleDelete(user.id)}
        />
      </div>
      
    </div>
  );
};
