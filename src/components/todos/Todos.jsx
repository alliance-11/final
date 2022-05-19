import { useContext, useState } from "react";
import { Context } from "../context/DataContext";
// import todosData from "../../data/todos.json";
import { Add } from "./Add";
import { List } from "./List";
import { Search } from "./Search";
import "./Todos.scss";

export const Todos = () => {
  // const [todos, setTodos] = useState(todosData);
  const {todos, setTodos} = useContext(Context)
  const [search, setSearch] = useState("");

  const addTodo = (todoNew) => {
    const todoNewState = {
      _id: Date.now().toString(),
      ...todoNew,
    };
    setTodos([...todos, todoNewState]);
  };

  const editTodo = (id, todoData) => {
    const updateTodo = todos.map((todo) =>
      todo._id === id ? { ...todo, ...todoData } : todo
    );
    setTodos(updateTodo);
  };

  const deleteTodo = (id) => {
    const todoDelete = todos.filter((todo) => todo._id !== id);
    setTodos(todoDelete);
  };

  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Todos">
      <h2>
        {filteredTodos.length} List
        {filteredTodos.length === 1 ? "Todo" : "Todos"}
      </h2>
      <div className="container">
        <Search search={search} setSearch={setSearch} />
        <Add addTodo={addTodo} />
        <List
          todos={filteredTodos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};
