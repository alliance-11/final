import { EditItem } from "./EditItem";

export const EditList = ({ users, editUser,editMode, setEditMode }) => {
  return (
    <>
      {users.map((user) => (
        <EditItem user={user} editUser={editUser} editMode={editMode} setEditMode={setEditMode} />
      ))}
    </>
  );
};
