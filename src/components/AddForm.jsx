import React from 'react'

const AddForm = ({newUser, handleAddUser, addUser}) => {
  return (
    <div className="add">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={newUser.name}
      onChange={handleAddUser}
      autoFocus
    />
    <input
      type="text"
      name="profession"
      placeholder="Profession"
      value={newUser.profession}
      onChange={handleAddUser}
    />
    <input
      type="text"
      name="hobby"
      placeholder="Hobby"
      value={newUser.hobby}
      onChange={handleAddUser}
    />
    <input
      type="text"
      name="email"
      placeholder="Email"
      value={newUser.email}
      onChange={handleAddUser}
    />
    <input
      type="text"
      name="city"
      placeholder="City"
      value={newUser.city}
      onChange={handleAddUser}
    />
    <button onClick={addUser}>Add</button>
  </div>

  )
}

export default AddForm