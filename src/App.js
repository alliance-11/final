import { useState } from "react";
import "./App.scss";
import AddForm from "./components/AddForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UsersList from "./components/UsersList";

function App(name, profession,hobby, email,city) {
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

  const addUser = (userNew) => {
    const userNewState = {
      id: Date.now().toString(), ...userNew};
    setUsers([...users, userNewState]);
  };

  const handleDelete = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
  };

  return (
    <div className="App">
      <Header title="Final Project ✨" />
      <div className="container">
        <AddForm addUser={addUser} />
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
