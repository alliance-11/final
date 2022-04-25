import { EditItem } from "./EditItem";

export const EditList = ({ users, editUser }) => {
  return (
    <>
      {users.map((user) => (
        <EditItem user={user} editUser={editUser} />
      ))}
    </>
  );
};
