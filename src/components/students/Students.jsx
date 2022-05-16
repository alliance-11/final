import { useContext, useRef, useState } from "react";
import { Context } from "../context/DataContext";
import { Add } from "./Add";
import { List } from "./List";
import "./Students.scss";

export const Students = () => {
  const { students } = useContext(Context);
  const [specFilter, setSpecFilter] = useState([]);

  const refCheckBox = useRef();

  const onChange = (e) => {
    if (e.target.checked) {
      setSpecFilter([...specFilter, e.target.value]);
    } else {
      const specNew = specFilter.filter(
        (specialization) => specialization !== e.target.value
      );
      setSpecFilter(specNew);
    }
  };
console.log({specFilter});

  let filteredStudents = students;
  if (specFilter.length) {
    filteredStudents = students.filter((student) =>
      specFilter.includes(student.specialization)
    );
  }

  return (
    <div className="Students">
        <h2>
          {filteredStudents.length} List{" "}
          {filteredStudents.length === 1 ? "Student" : "Students"}
        </h2>
      <div className="container">
        <Add />
        <div className="filter">
          <label htmlFor="Full Stack">
            Full Stack
            <input
              type="checkbox"
              value="Full Stack"
              ref={refCheckBox}
              onChange={onChange}
            />
          </label>
          <label htmlFor="Frontend">
            Frontend
            <input
              type="checkbox"
              value="Frontend"
              ref={refCheckBox}
              onChange={onChange}
            />
          </label>
          <label htmlFor="Backend">
            Backend
            <input
              type="checkbox"
              value="Backend"
              ref={refCheckBox}
              onChange={onChange}
            />
          </label>
        </div>
        <List students={students} 
        filteredStudents={filteredStudents} />
      </div>
    </div>
  );
};
