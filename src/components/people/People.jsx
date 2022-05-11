import { useState } from "react";
import { Add } from "./Add";
import { List } from "./List";
import { Search } from "./Search";

import "./People.scss";
export const People = () => {
  const [teachers, setTeachers] = useState([
    { _id: "1", name: "Rob", city: "Berlin" },
    { _id: "2", name: "Marlene", city: "Hamburg" },
    { _id: "3", name: "Olaf ?", city: "Hamburg" },
    { _id: "4", name: "Julian", city: "Berlin" },
    { _id: "5", name: "Heiko", city: "München" },
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
    const deleteItem = teachers.filter((teacher) => teacher._id !== id);
    setTeachers(deleteItem);
  };
  const handleSearch = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(search.toLowerCase()) ||
      teacher.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="People">
      <h2>
        {handleSearch.length} List{" "}
        {handleSearch.length === 1 ? "Teacher" : "Teachers"}
      </h2>
      <div className="container">
        <Add addTeacher={addTeacher} />
        <Search search={search} setSearch={setSearch} />
        <List handleDelete={handleDelete} teachers={handleSearch} />
      </div>
    </div>
  );
};
