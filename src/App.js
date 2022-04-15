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

  return (
    <div className="App">
      <h1>Tralala</h1>
      <div className="container">
        <UsersList users={users} />
      </div>
    </div>
  );
}

export default App;
