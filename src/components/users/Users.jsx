import { useContext, useState } from "react";
import { AddForm } from "./AddForm";
import { Header } from "./Header";
import { UsersList } from "./UsersList";
import { Search } from "./Search";
import { Context } from "../context/DataContext";
import "./Users.scss";

export const Users = () => {
  const { users, setUsers } = useContext(Context);
  const [search, setSearch] = useState("");

  //Add
  const addUser = (userNew) => {
    const userNewState = {
      _id: Date.now().toString(),
      ...userNew,
    };
    setUsers([...users, userNewState]);
  };

  //Edit
  const editUser = (id, userData) => {
    const updateUser = users.map((user) =>
      user._id === id ? { ...user, ...userData } : user
    );
    setUsers(updateUser);
  };

  //Delete
  const handleDelete = (id) => {
    const deleteUser = users.filter((user) => user._id !== id);
    setUsers(deleteUser);
  };

  // apply given search filter to users array
  const filteredStudents = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) || // ONE criteria
      user.hobby.toLowerCase().includes(search.toLowerCase()) ||
      user.city.toLowerCase().includes(search.toLowerCase())
  );

  // LAYOUT
  return (
    <div className="Users">
      <Header length={filteredStudents.length} />
      <div className="container">
        <Search search={search} setSearch={setSearch} />
        <AddForm addUser={addUser} />
        {users.length ? (
          <UsersList
            users={filteredStudents}
            handleDelete={handleDelete}
            editUser={editUser}
          />
        ) : (
          <p style={{ marginTop: "2rem", textAlign: "center" }}>
            Your List is empty!
          </p>
        )}
      </div>
    </div>
  );
};
