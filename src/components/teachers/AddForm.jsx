import { useRef, useState } from 'react'

export const AddForm = ({addTeacher}) => {
    const [newTeacher, setNewTeacher] = useState({
        name: "",
        city: "",
      });
    const inputRef= useRef();

    const handleAddTeacher = (e) => {
        setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
      };

      const submitAdd=() =>{
          addTeacher(newTeacher)
    setNewTeacher({ ...newTeacher, name: "", city: "" });

      }
    
  return (
    <div className="add">
    <input
    autoFocus
    ref={inputRef}
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
    <button onClick={()=>submitAdd(inputRef.current.focus())}>
      Add
    </button>
  </div>
)
}
