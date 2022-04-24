import { useState } from "react";
import "./Users.scss";
import { AddForm } from "./AddForm";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { UsersList } from "./UsersList";
import { EditList } from "./EditList";

export const Users = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Gael",
      profession: "Web Dev Consultant",
      hobby: "play computer games",
      email: "gael@gmail.com",
      city: "Berlin",
    },
    {
      id: "2",
      name: "Robert",
      profession: "Web Dev Trainer",
      hobby: "read",
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

  return (
    <div className="Users">
      <Header title="Final Project " />
      <div className="container">
        <AddForm addUser={addUser} />
        <EditList users={users} editUser={editUser} />
        {users.length ? (
          <UsersList users={users} handleDelete={handleDelete} />
          ) : (
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
            Your List is empty{" "}
          </p>
        )}
      </div>
      <Footer length={users.length} />
      {/* {users.length} List {users.length === 1 ? "User" : "Users"} */}
    </div>
  );
};
