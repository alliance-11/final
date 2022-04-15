import { useState } from "react";
import "./App.scss";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Gael",
      profession: "Web Dev consultant",
      hobby: "play computer games",
      email: "gael@gmail.com",
      city: "Berlin",
    },
    {
      id: "2",
      name: "Robert",
      profession: "Web Dev trainer",
      hobby: "read",
      email: "robert@gmail.com",
      city: "Berlin",
    },
    {
      id: "3",
      name: "Elisa",
      profession: "Stydent",
      hobby: "JavaScript",
      email: "elisa@gmail.com",
      city: "Hamburg",
    },
  ]);
  const [newUser, setNewUser] = useState({
    name: "",
    profession: "",
    hobby: "",
    email: "",
    city: "",
  });

  const addUser = () => {
    const userNewState = {
      id: Date.now().toString(),
      name: newUser.name,
      profession: newUser.profession,
      hobby: newUser.hobby,
      email: newUser.email,
      city: newUser.city,
    };
    setUsers([...users, userNewState]);
    setNewUser({
      ...newUser,
      name: "",
      profession: "",
      hobby: "",
      email: "",
      city: "",
    });
  };
  const handleAddUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleDelete = (id)=>{
    const deleteUser= users.filter(user=>user.id !== id)
    setUsers(deleteUser);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Final Project</h1>

        <div className="add">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleAddUser}
            autoFocus
          />
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={newUser.profession}
            onChange={handleAddUser}
          />
          <input
            type="text"
            name="hobby"
            placeholder="Hobby"
            value={newUser.hobby}
            onChange={handleAddUser}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleAddUser}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={newUser.city}
            onChange={handleAddUser}
          />
          <button onClick={addUser}>Add</button>
        </div>
        <UsersList users={users} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
