import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/layout/Nav";
import { Users } from "./components/users/Users";
import { Teachers } from "./components/teachers/Teachers";
import { Comp } from "./components/comp/Comp";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="comp" element={<Comp />} />
      </Routes>
    </div>
  );
};

export default App;
