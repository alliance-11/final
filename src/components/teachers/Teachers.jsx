import { useRef, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./Teachers.scss";

export const Teachers = () => {
  const [teachers, setTeachers] = useState([
    { id: "1", name: "Robert", city: "Berlin" },
    { id: "2", name: "Marlene", city: "Hamburg" },
    { id: "3", name: "Olaf ?", city: "Hamburg" },
    { id: "4", name: "Julian", city: "Berlin" },
    { id: "5", name: "Heiko", city: "Hamburg" },
    { id: "6", name: "Gael", city: "Berlin" },
  ]);
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    city: "",
  });
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

  const addTeacher = () => {
    const addNewTeacher = {
      id: Date.now().toString(),
      name: newTeacher.name,
      city: newTeacher.city,
    };
    setTeachers([...teachers, addNewTeacher]);
    setNewTeacher({ ...newTeacher, name: "", city: "" });
  };
  const handleAddTeacher = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
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
        <div className="add">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newTeacher.name}
            onChange={handleAddTeacher}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={newTeacher.city}
            onChange={handleAddTeacher}
          />
          <button type="submit" onClick={addTeacher}>
            Add
          </button>
        </div>
        <div className="citis">
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
            <div key={teacher.id} className="teacher">
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
          {teachers.length} List{" "}
          {teachers.length === 1 ? "Teacher" : "Teachers"}
        </h2>
      </footer>
    </div>
  );
};
