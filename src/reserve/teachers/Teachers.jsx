import { useState } from "react";
import { Add } from "./Add";
import { List } from "./List";
import { Search } from "./Search";

import "./Teachers.scss";
export const Teachers = () => {
  const [teachers, setTeachers] = useState([
    { id: "1", name: "Rob", city: "Berlin" },
    { id: "2", name: "Marlene", city: "Hamburg" },
    { id: "3", name: "Olaf ?", city: "Hamburg" },
    { id: "4", name: "Julian", city: "Berlin" },
    { id: "5", name: "Heiko", city: "München"},
  ]);
  const [search, setSearch] = useState("");

  const addTeacher = (newTeacher) => {
    const addNewTeacher = {
      id: Date.now().toString(),
      ...newTeacher,
    };
    setTeachers([...teachers, addNewTeacher]);
  };

  const handleDelete = (id) => {
    const deleteItem = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(deleteItem);
  };
  const handleSearch = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(search.toLowerCase()) ||
      teacher.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Teachers">
      <div className="container">
        <h2>Teachers</h2>
        <Add addTeacher={addTeacher} />
        <Search search={search} setSearch={setSearch} />
        <List handleDelete={handleDelete} teachers={handleSearch} />
      </div>
      <footer>
        <h2>
          {teachers.length} List{" "}
          {teachers.length === 1 ? "Teacher" : "Teachers"}
        </h2>
      </footer>
    </div>
  );
};
