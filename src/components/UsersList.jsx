import React from 'react'

const UsersList = ({users}) => {
  return (
    <div className="users">
    {users.map((user) => (
      <div key={user.id} className="user">
        <div className='item'>{user.name}</div>
        <div className='item'>{user.profession}</div>
        <div className='item'>{user.hobby}</div>
        <div className='item'>{user.email}</div>
        <div className='item'>{user.city}</div>
      </div>
    ))}
  </div>

  )
}

export default UsersList