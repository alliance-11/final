import { createContext, useEffect, useState } from "react"

export const Context = createContext()

export const DataProvider = (props) => {

  // useEffect hooks
  // 1. runs AFTER first render to load the DATA from API
  // 2. loads data asynchronously using fetch
  // 3. calls the SETTER to store received data and update DOM
  useEffect( ( ) => {
    console.log("Use Effect running...")

    const fetchData = async () => {

      // fetch from API url 
      // important: React does not CHECK changes on .env file
      // so in case you change contents in that file => restart React
      const response = await fetch(process.env.REACT_APP_API_URL)

      // executre JSON parser and AWAIT the result + unpack the promise box
      const usersFromApi = await response.json() 

      // fill users array with data
      setUsers( usersFromApi )
    }
    fetchData()

  }, []) // just run it ONCE after first render

  const [users, setUsers] = useState([
    {
      _id: "1",
      name: "Gael",
      profession: "Web Dev Consultant",
      hobby: "playing computer games",
      email: "gael@gmail.com",
      city: "Berlin",
    },
    {
      _id: "2",
      name: "Robert",
      profession: "Web Dev Trainer",
      hobby: "reading",
      email: "robert@gmail.com",
      city: "Berlin",
    },
    {
      _id: "3",
      name: "Elisa",
      profession: "JavaScript Engineer",
      hobby: "JavaScript",
      email: "elisa@gmail.com",
      city: "Hamburg",
    },
  ])

  const [teachers, setTeachers] = useState([
    { id: "1", name: "Robert", city: "Berlin" },
    { id: "2", name: "Marlene", city: "Hamburg" },
    { id: "3", name: "Olaf", city: "Hamburg" },
    { id: "4", name: "Julian", city: "Berlin" },
    { id: "5", name: "Heiko", city: "Hamburg" },
    { id: "6", name: "Gael", city: "Berlin" },
  ])
  const [students, setStudents] = useState([
    { id: "1", name: "Niko", specialization: "Full Stack" },
    { id: "2", name: "Heba", specialization: "Full Stack" },
    { id: "3", name: "Osama", specialization: "Backend" },
    { id: "4", name: "Elisa", specialization: "Frontend" },
    { id: "5", name: "Stephan", specialization: "Full Stack" },
  ])

  const addTeacher = (teacherNew) => {
    const addNewTeacher = {
      id: Date.now().toString(),
      ...teacherNew,
    }
    setTeachers([...teachers, addNewTeacher])
  }

  const editTeacher = (id, teacherData) => {
    const updateTeacher = teachers.map((teacher) =>
      teacher.id === id ? { ...teacher, ...teacherData } : teacher
    )
    setTeachers(updateTeacher)
  }
  const deleteTeacher = (id) => {
    const deleteTeacher = teachers.filter((teacher) => teacher.id !== id)
    setTeachers(deleteTeacher)
  }

  const sharedData = {
    users,
    teachers,
    students,
    setUsers,
    setTeachers,
    setStudents,
    addTeacher,
    editTeacher,
    deleteTeacher,
  }

  // rendering component
  return (
    <Context.Provider value={sharedData}>{props.children}</Context.Provider>
  )
}
