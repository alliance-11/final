import { useContext, useRef, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Context } from "../context/DataProvider";
import "./Students.scss";

export const Students = () => {
  const { students,setStudents}=useContext(Context)
  const [newStudent, setNewStudent] = useState({
    name: "",
    specialization: "",
  });
  // FILTER
  const [specFilter, setSpecFilter] = useState([]);
  const refCheckBox = useRef();
  const onChange = (e) => {
    if (e.target.checked) {
      setSpecFilter([...specFilter, e.target.value]);
    } else {
      const specNew = specFilter.filter(specialization =>specialization !== e.target.value);
      setSpecFilter(specNew);
    }
  };
  //ADD
  const addStudent = () => {
    const addNewStudent = {
      id: Date.now().toString(),
      name: newStudent.name,
      specialization: newStudent.specialization,
    };
    setStudents([...students, addNewStudent]);
    setNewStudent({ ...newStudent, name: "", specialization: "" });
  };
  const handleAddStudent = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const deleteItem = students.filter((student) => student.id !== id);
    setStudents(deleteItem);
  };

  // FILTER
  let filteredStudents=students
  if (specFilter.length){
    filteredStudents = students.filter(student=>specFilter.includes(student.specialization))
  }

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
            name="specialization"
            placeholder="Specialization"
            value={newStudent.specialization}
            onChange={handleAddStudent}
          />
          <button type="submit" onClick={addStudent}>
            Add
          </button>
        </div>
        <div className="filter">
          <label htmlFor="Full Stack">
            Full Stack
            <input type="checkbox"
            value="Full Stack"
            ref={refCheckBox}
            onChange={onChange}/>
          </label>
          <label htmlFor="Frontend">
            Frontend
            <input type="checkbox"
            value="Frontend"
            ref={refCheckBox}
            onChange={onChange}/>
          </label>
          <label htmlFor="Backend">
            Backend
            <input type="checkbox"
            value="Backend"
            ref={refCheckBox}
            onChange={onChange}/>
          </label>
        </div>
        <div className="students">
          {filteredStudents.map((student) => (
            <div key={student.id} className="student">
              <div className="item">{student.name}</div>
              <div className="item">{student.specialization}</div>
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
          {filteredStudents.length} List{" "}
          {filteredStudents.length === 1 ? "Student" : "Students"}
        </h2>
      </footer>
    </div>
  );
};
