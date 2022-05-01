import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export const TeacherItem = ({teacher, handleDelete}) => {
  return (
    <div className="teacher">
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
)
}
