import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/layout/Nav";
import { Users } from "./components/users/Users";
import { Login } from "./components/login/Login";
import { Teachers } from "./components/teachers/Teachers";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="login" element={<Login />} />
        <Route path="teachers" element={<Teachers />} />
      </Routes>
    </div>
  );
}

export default App;
