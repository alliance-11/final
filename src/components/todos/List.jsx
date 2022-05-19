import { Item } from "./Item";

export const List = ({ todos, editTodo, deleteTodo }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Item
          key={todo._id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};
