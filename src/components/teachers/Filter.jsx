// import React, { useContext, useRef, useState } from "react";
// import { Context } from "../context/DataContext";

// export const Filter = () => {
//   const [cityFilter, setCityFilter] = useState([]);
//   const { teachers, filteredTeachers} = useContext(Context);
//   const refCheckbox = useRef();

//   const onChange = (e) => {
//     const cityName = e.target.value;
//     const cityChecked = e.target.checked;
//     if (cityChecked) {
//       setCityFilter([...cityFilter, cityName]); // this always ADDs a new item
//     } else {
//       const citiesNew = cityFilter.filter((city) => city !== cityName);
//       setCityFilter(citiesNew);
//     }
//   };
//   console.log({ cityFilter });

//   let filteredTeachers = teachers;
//   if (cityFilter.length) {
//     filteredTeachers = teachers.filter((teacher) =>
//       cityFilter.includes(teacher.city)
//     );
//   }

//   return (
//     <div className="filter">
//       <label htmlFor="Berlin">
//         {" "}
//         Berlin
//         <input
//           value="Berlin"
//           type="checkbox"
//           ref={refCheckbox}
//           onChange={onChange}
//         />
//       </label>
//       <label htmlFor="Hamburg">
//         {" "}
//         Hamburg
//         <input
//           value="Hamburg"
//           type="checkbox"
//           ref={refCheckbox}
//           onChange={onChange}
//         />
//       </label>
//       <label htmlFor="Madrid">
//         {" "}
//         Madrid
//         <input
//           value="Madrid"
//           type="checkbox"
//           ref={refCheckbox}
//           onChange={onChange}
//         />
//       </label>
//     </div>
//   );
// };
