import { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./Students.scss";

export const Students = () => {
  const [students, setStudents] = useState([
    { id: "1", name: "Niko", specialize: "Full Stack" },
    { id: "2", name: "Heba", specialize: "Full Stack" },
    { id: "3", name: "Osama", specialize: "Backend" },
    { id: "4", name: "Elisa", specialize: "Frontend" },
    { id: "5", name: "Stephan", specialize: "Full Stack" },
  ]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    specialize: "",
  });

  const addStudent = () => {
    const addNewStudent = {
      id: Date.now().toString(),
      name: newStudent.name,
      specialize: newStudent.specialize,
    };
    setStudents([...students, addNewStudent]);
    setNewStudent({ ...newStudent, name: "", specialize: "" });
  };
  const handleAddStudent = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const deleteItem = students.filter((student) => student.id !== id);
    setStudents(deleteItem);
  };


  return (
    <div className="Students">
      <div className="container">
        <h2>Students</h2>
        <div className="add">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newStudent.name}
            onChange={handleAddStudent}
          />
          <input
            type="text"
            name="specialize"
            placeholder="Specializ"
            value={newStudent.specialize}
            onChange={handleAddStudent}
          />
          <button type="submit" onClick={addStudent}>
            Add
          </button>
        </div>
        <div className="search">
        </div>
        <div className="students">
          {students.map((student) => (
            <div key={student.id} className="student">
              <div className="item">{student.name}</div>
              <div className="item">{student.specialize}</div>
              <div className="icons">
                <FaEdit className="icon" role="button" tabIndex="0" />
                <FaTrashAlt
                  onClick={() => handleDelete(student.id)}
                  className="icon"
                  role="button"
                  tabIndex="0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <h2>
          {students.length} List{" "}
          {students.length === 1 ? "Student" : "Students"}
        </h2>
      </footer>
    </div>
  );
};
