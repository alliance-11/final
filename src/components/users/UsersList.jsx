import { UserItem } from "./UserItem";

export const UsersList = ({ users, handleDelete, editUser }) => {
  return (
    <div className="users">
      {users.map((user) => (
        <UserItem
          key={user._id}
          user={user}
          handleDelete={handleDelete}
          editUser={editUser}
        />
      ))}
    </div>
  );
};
