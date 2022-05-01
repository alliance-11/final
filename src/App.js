import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/layout/Nav";
import { Users } from "./components/users/Users";
import { Login } from "./components/login/Login";
import { Teachers } from "./components/teachers/Teachers";
import { People } from "./components/people/People";
import { Students } from "./components/students/Students";
import "./App.scss";
import { createContext } from "react";
import { DataProvider } from "./components/context/DataProvider";

export const Context = createContext();

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Users />} />
          {/* <Route index element={<Users />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="people" element={<People />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
