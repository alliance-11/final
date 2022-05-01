import { createContext, useState } from "react";

export const Context = createContext();

export const DataProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Gael",
      profession: "Web Dev Consultant",
      hobby: "playing computer games",
      email: "gael@gmail.com",
      city: "Berlin",
    },
    { 
      id: "2",
      name: "Robert",
      profession: "Web Dev Trainer",
      hobby: "reading",
      email: "robert@gmail.com",
      city: "Berlin",
    },
    {
      id: "3",
      name: "Elisa",
      profession: "JavaScript Engineer",
      hobby: "JavaScript",
      email: "elisa@gmail.com",
      city: "Hamburg",
    },
  ]);
  const [teachers, setTeachers] = useState([
    { id: "1", name: "Robert", city: "Madrid" },
    { id: "2", name: "Marlene", city: "Hamburg" },
    { id: "3", name: "Olaf", city: "Hamburg" },
    { id: "4", name: "Julian", city: "Berlin" },
    { id: "5", name: "Heiko", city: "Hamburg" },
    { id: "6", name: "Gael", city: "Berlin" },
  ]);
  const [students, setStudents] = useState([
    { id: "1", name: "Niko", specialize: "Full Stack" },
    { id: "2", name: "Heba", specialize: "Full Stack" },
    { id: "3", name: "Osama", specialize: "Backend" },
    { id: "4", name: "Elisa", specialize: "Frontend" },
    { id: "5", name: "Stephan", specialize: "Full Stack" },
  ]);

  const sharedData = {
    users,
    teachers,
    students,
    setUsers,
    setTeachers,
    setStudents,
  };
  return (
    <Context.Provider value={sharedData}>{props.children}</Context.Provider>
  );
};
