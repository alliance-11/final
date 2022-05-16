import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/layout/Nav";
import { Users } from "./components/users/Users";
import { Login } from "./components/login/Login";
import { Teachers } from "./components/teachers/Teachers";
import { Todo } from "./components/todo/Todo";
import { Students } from "./components/students/Students";
import "./App.scss";
import { createContext } from "react";
import { DataContext } from "./components/context/DataContext";

export const Context = createContext();

function App() {
  return (
    <DataContext>
      <div className="App">
        <Nav />
        <Routes>
          <Route index element={<Users />} />
          <Route path="login" element={<Login />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="todo" element={<Todo />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </div>
    </DataContext>
  );
}

export default App;
