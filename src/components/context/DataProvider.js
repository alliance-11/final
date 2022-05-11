import { createContext, useEffect, useState } from "react"

export const Context = createContext()

export const DataProvider = (props) => {

  // useEffect hooks
  // 1. runs AFTER first render to load the DATA from API
  // 2. loads data asynchronously using fetch
  // 3. calls the SETTER to store received data and update DOM
  useEffect( ( ) => {
    console.log("Use Effect running...")

    // fetchData fetches ALL initial data we need for our app
    const fetchData = async () => {

      // LOAD USERS

      // fetch from API url 
      // important: React does not CHECK changes on .env file
      // so in case you change contents in that file => restart React
      let response = await fetch(`${process.env.REACT_APP_API_URL}/users`)
      // executee JSON parser and AWAIT the result + unpack the promise box
      const usersApi = await response.json() 
      // fill users array with data
      setUsers( usersApi )

      // LOAD TEACHERS
      response = await fetch(`${process.env.REACT_APP_API_URL}/teachers`)
      const teachersApi = await response.json()
      console.log( teachersApi )
      setTeachers( teachersApi ) // fill teachers into state and update DOM

      // TODO: LOAD STUDENTS...

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
    { _id: "1", name: "Robert", city: "Berlin" },
    { _id: "2", name: "Marlene", city: "Hamburg" },
    { _id: "3", name: "Olaf", city: "Hamburg" },
    { _id: "4", name: "Julian", city: "Berlin" },
    { _id: "5", name: "Heiko", city: "Hamburg" },
    { _id: "6", name: "Gael", city: "Berlin" },
  ])
  const [students, setStudents] = useState([
    { _id: "1", name: "Niko", specialization: "Full Stack" },
    { _id: "2", name: "Heba", specialization: "Full Stack" },
    { _id: "3", name: "Osama", specialization: "Backend" },
    { _id: "4", name: "Elisa", specialization: "Frontend" },
    { _id: "5", name: "Stephan", specialization: "Full Stack" },
  ])

  // 1. add data to API first !
  // 2. if successful => also add item to STATE (=> frontend data)
  const addTeacher = async (teacherNew) => {

    console.log( teacherNew )

    // make POST request at API to CREATE new Item and RETURN new item with created ID!
    const response = await fetch(`${process.env.REACT_APP_API_URL}/teachers`, {
      method: "POST",
      body: JSON.stringify( teacherNew ), // SEND data to create in API => API will create the ID for us!
      headers: {
        "Content-Type": "application/json"
      }
    })
    const teacherNewApi = await response.json()
    console.log( teacherNewApi )

    setTeachers([...teachers, teacherNewApi])
  }

  const editTeacher = async (id, teacherData) => {

    // update teacher at API
    await fetch(`${process.env.REACT_APP_API_URL}/teachers/${id}`, {
      method: "PATCH",
      body: JSON.stringify( teacherData ), // SEND data to create in API => API will create the ID for us!
      headers: {
        "Content-Type": "application/json"
      }
    })    

    // update teacher in FRONTEND STATE
    const updateTeacher = teachers.map((teacher) =>
      teacher._id === id ? { ...teacher, ...teacherData } : teacher
    )
    setTeachers(updateTeacher)
  }

  const deleteTeacher = async (id) => {

    // 1. delete at API
    // 2. if successful => we delete also in frontend STATE

    await fetch(`${process.env.REACT_APP_API_URL}/teachers/${id}`, {
      method: "DELETE"
    })

    // delete also in frontend state 
    const deleteTeacher = teachers.filter((teacher) => teacher._id !== id)
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
