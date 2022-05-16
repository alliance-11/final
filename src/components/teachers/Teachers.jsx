import { useContext, useRef, useState } from "react";
import { Context } from "../context/DataContext";
import { AddForm } from "./AddForm";
import "./Teachers.scss";
import { TeachersList } from "./TeachersList";

export const Teachers = () => {
  const { teachers } = useContext(Context);
  const [cityFilter, setCityFilter] = useState([]);

  const refCheckbox = useRef();

  const onChange = (e) => {
    const cityName = e.target.value;
    const cityChecked = e.target.checked;
    if (cityChecked) {
      setCityFilter([...cityFilter, cityName]); // this always ADDs a new item
    } else {
      const citiesNew = cityFilter.filter((city) => city !== cityName);
      setCityFilter(citiesNew);
    }
  };
  console.log({ cityFilter });

  let filteredTeachers = teachers;
  if (cityFilter.length) {
    filteredTeachers = teachers.filter((teacher) =>
      cityFilter.includes(teacher.city)
    );
  }
  return (
    <div className="Teachers">
      <h2>
        {filteredTeachers.length} List{" "}
        {filteredTeachers.length === 1 ? "Teacher" : "Teachers"}
      </h2>

      <div className="container">
        <AddForm />
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
        <TeachersList teachers={teachers} filteredTeachers={filteredTeachers} />
      </div>
    </div>
  );
};
