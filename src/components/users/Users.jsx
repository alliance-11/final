import { useState } from "react";
import "./Users.scss";
import { AddForm } from "./AddForm";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { UsersList } from "./UsersList";
import { EditList } from "./EditList";
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
  const [editMode, setEditMode] = useState(false);
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
    setEditMode(false)
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
        <Search search={search} setSearch={setSearch} />
        <AddForm addUser={addUser} />
        {/* {editMode ? */}
          <EditList users={users} editUser={editUser} />
          {/* : */}
          <UsersList
          users={users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
            )}
            handleDelete={handleDelete} 
            />
{/* } */}
      </div>
      <Footer length={users.length} />
    </div>
  );
};
