import { UserItem } from "./UserItem";

export const UsersList = ({ users, handleDelete }) => {
  return (
    <div className="users">
      {users.map((user) => (
        <UserItem key={user.id} user={user} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
