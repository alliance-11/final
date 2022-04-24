import { useState, useRef, useEffect } from "react";

export const EditItem = ({ user, editUser }) => {
  const inputName = useRef();
  const inputHobby = useRef();

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    console.log("[UseEffect Hook] SOME STATE was CHANGED in our App");
  });

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const nameNew = inputName.current.value;
      const hobbyNew = inputHobby.current.value;

      setEditMode(false);
      editUser(user.id, { name: nameNew, hobby: hobbyNew });
    }
  };

  return (
    <div>
      <input
        name="username"
        ref={inputName}
        onKeyDown={onKeyDown}
        defaultValue={user.username}
        readOnly={!editMode}
      />
      <input
        name="age"
        ref={inputHobby}
        onKeyDown={onKeyDown}
        defaultValue={user.age}
        readOnly={!editMode}
      />
      <button onClick={() => setEditMode(!editMode)}>Edit</button>
    </div>
  );
};
