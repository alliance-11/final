import { useRef, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./Teachers.scss";

export const Teachers = () => {


  // FILTER state => object => mit den Filter settings
  const [cityFilter, setCityFilter] = useState([])

  const [teachers, setTeachers] = useState([
    { id: "1", name: "Rob", city: "Berlin" },
    { id: "2", name: "Marlene", city: "Hamburg" },
    { id: "3", name: "Olaf ?", city: "Hamburg" },
    { id: "4", name: "Julian", city: "Berlin" },
  ]);
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    city: "",
  });

  const refCheckbox = useRef();


  // update SETTINGS 
  // we do FILTERING later...
  const onChange = (e) => {
    console.log(refCheckbox.current.checked); //  in "checked" steht drin, ob die Checkbox geklickt ist!
    // ODER: im event steht das aktuell (!) geklickte Item drin
    console.log(e.target.name, e.target.checked);

    // toggle filter setting 
    const cityName = e.target.value
    const cityChecked = e.target.checked

    // checked or unchecked?
    
      // if checkbox for city checked => add city to cities array
    if(cityChecked) {
      setCityFilter([...cityFilter, cityName]) // this always ADDs a new item
    }
    // if checkbox for city UNchecked => remove from cities array
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

  // FILTER
  let filteredTeachers = teachers


  // only filter teachers if we have at least ONE city set
  if( cityFilter.length ) {

    // filter by cities
    filteredTeachers = teachers.filter( teacher => {
      return cityFilter.includes( teacher.city )
    })

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
