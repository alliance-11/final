import { useRef, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const Item = ({ todo, editTodo, deleteTodo}) => {
  const inputTitle = useRef();
  const inputDescription = useRef();

  const [editMode, setEditMode] = useState(false);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const titleNew = inputTitle.current.value;
      const descriptionNew = inputDescription.current.value;

      setEditMode(false);
      editTodo(todo._id, { title: titleNew, description: descriptionNew });
    }
  };

  return (
    <div className="todo">
      {/* <div className="title">{todo.title}</div>
      <div className="descr">{todo.description}</div>  */}
      <input
        name="title"
        ref={inputTitle}
        onKeyDown={onKeyDown}
        defaultValue={todo.title}
        readOnly={!editMode}
      />
      <input
        name="description"
        ref={inputDescription}
        onKeyDown={onKeyDown}
        defaultValue={todo.description}
        readOnly={!editMode}
      />
      <div className="icons">
        <FaEdit
          className="icon"
          role="button"
          tabIndex="0"
          onClick={() => setEditMode(!editMode)}
        />
        <FaTrashAlt
          className="icon"
          role="button"
          tabIndex="0"
          onClick={() => deleteTodo(todo._id)}
        />
      </div>
    </div>
  );
};
