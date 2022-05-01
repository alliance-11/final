import { useContext, useRef, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Context } from "../context/DataProvider";
import { AddForm } from "./AddForm";
import "./Teachers.scss";

export const Teachers = () => {
  const {teachers, setTeachers}=useContext(Context)
  const [cityFilter, setCityFilter] = useState([])

  const refCheckbox = useRef();

  const onChange = (e) => {
    const cityName = e.target.value
    const cityChecked = e.target.checked
    if(cityChecked) {
      setCityFilter([...cityFilter, cityName]) // this always ADDs a new item
    }
    else {
      const citiesNew = cityFilter.filter( city => city !== cityName )
      setCityFilter( citiesNew )
    }
  };
  console.log({ cityFilter })

  const addTeacher = (teacherNew) => {
    const addNewTeacher = {
      id: Date.now().toString(),...teacherNew
    };
    setTeachers([...teachers, addNewTeacher]);
  };

  const handleDelete = (id) => {
    const deleteTeacher = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(deleteTeacher);
  };

  let filteredTeachers = teachers
  if( cityFilter.length ) {
    filteredTeachers = teachers.filter( teacher => cityFilter.includes( teacher.city ))
}
  
  // RENDERING of data into HTML
  return (
    <div className="Teachers">
      <h2>Teachers</h2>
      <div className="container">
        <AddForm addTeacher={addTeacher}/>
        <div className="filter">
          <label htmlFor="Berlin">
            {" "}
            Berlin
            <input
              value="Berlin"
              type="checkbox"
              ref={refCheckbox}
              onChange={onChange}
            />
          </label>
          <label htmlFor="Hamburg">
            {" "}
            Hamburg
            <input
              value="Hamburg"
              type="checkbox"
              ref={refCheckbox}
              onChange={onChange}
            />
          </label>
          <label htmlFor="Madrid">
            {" "}
            Madrid
            <input
              value="Madrid"
              type="checkbox"
              ref={refCheckbox}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="teachers">
      {filteredTeachers.map((teacher) => (
    <div key={teacher.id}className="teacher">
    <div className="item">{teacher.name}</div>
    <div className="item">{teacher.city}</div>
    <div className="icons">
      <FaEdit className="icon" role="button" tabIndex="0" />
      <FaTrashAlt
        className="icon"
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(teacher.id)}
      />
    </div>
  </div>
      ))}
    </div>
      </div>
      <footer>
        <h2>
          {filteredTeachers.length} List{" "}
          {filteredTeachers.length === 1 ? "Teacher" : "Teachers"}
        </h2>
      </footer>
    </div>
  );
};
