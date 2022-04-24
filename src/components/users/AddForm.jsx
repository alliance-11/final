import { useState, useRef } from 'react';

export const AddForm = ({ addUser }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    profession: "",
    hobby: "",
    email: "",
    city: "",
  });
  const inputRef = useRef();

  const handleAddUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const submitAdd = () => {
    addUser(newUser);
    setNewUser({
      ...newUser,
      name: "",
      profession: "",
      hobby: "",
      email: "",
      city: "",
    });
  };

  return (
    <div className="add">
      <input
        autoFocus
        ref={inputRef}
        type="text"
        name="name"
        placeholder="Name"
        required
        value={newUser.name}
        onChange={handleAddUser}
        // onChange={(e) => setNewUser(e.target.value)}
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
      <button
        // onClick={submitAdd}
        onClick={() => submitAdd(inputRef.current.focus())}
        // onClick={()=>inputRef.current.focus()}
      >
        Add
      </button>
    </div>
  );
};
