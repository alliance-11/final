import { useRef, useEffect } from "react";

export const EditItem = ({ user, editUser, editMode, setEditMode }) => {
  const inputName = useRef();
  const inputHobby = useRef();
  const inputCity = useRef();

  useEffect(() => {
    console.log("[UseEffect Hook] SOME STATE was CHANGED in our App");
  });

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const nameNew = inputName.current.value;
      const hobbyNew = inputHobby.current.value;
      const cityNew = inputCity.current.value;

      // setEditMode(true);
      editUser(user.id, { name: nameNew, hobby: hobbyNew, city: cityNew });
    }
  };

  return (
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
  );
};
