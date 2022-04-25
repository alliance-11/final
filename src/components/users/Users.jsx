import { useState } from "react";
import "./Users.scss";
import { AddForm } from "./AddForm";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { UsersList } from "./UsersList";
import { Search } from "./Search";

export const Users = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Gael",
      profession: "Web Dev Consultant",
      hobby: "playing computer games",
      email: "gael@gmail.com",
      city: "Berlin",
    },
    {
      id: "2",
      name: "Robert",
      profession: "Web Dev Trainer",
      hobby: "reading",
      email: "robert@gmail.com",
      city: "Berlin",
    },
    {
      id: "3",
      name: "Elisa",
      profession: "JavaScript Engineer",
      hobby: "JavaScript",
      email: "elisa@gmail.com",
      city: "Hamburg",
    },
  ]);
  const [search, setSearch] = useState("");

  //Add
  const addUser = (userNew) => {
    const userNewState = {
      id: Date.now().toString(),
      ...userNew,
    };
    setUsers([...users, userNewState]);
  };

  //Edit
  const editUser = (id, userData) => {
    const updateUser = users.map((user) =>
      user.id === id ? { ...user, userData } : user
    );
    setUsers(updateUser);
  };

  //Delete
  const handleDelete = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
  };

  // apply given search filter to users array
  const usersFiltered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) || // ONE criteria
      user.hobby.toLowerCase().includes(search.toLowerCase()) ||
      user.city.toLowerCase().includes(search.toLowerCase())
  );

  // LAYOUT
  return (
    <div className="Users">
      <Header title="Final Project " />
      <div className="container">
        <Search search={search} setSearch={setSearch} />
        <AddForm addUser={addUser} />
        {users.length ? (
          <UsersList
            users={usersFiltered}
            handleDelete={handleDelete}
            editUser={editUser}
          />
        ) : (
          <p style={{ marginTop: "2rem", textAlign: "center" }}>
            Your List is empty!
          </p>
        )}
      </div>
      <Footer length={users.length} />
    </div>
  );
};
