import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
      profession: "JavaScript Engineer",
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

  const handleDelete = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
  };

  return (
    <div className="App">
      <Header title="Final Project" />
      <div className="container">
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
}

export default App;
