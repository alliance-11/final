import { useState } from "react";
import { Add } from "./Add";
import { List } from "./List";
import { Search } from "./Search";

import todoData from "../../data/todo.json"

import "./Todo.scss";
export const Todo = () => {
  const [todos, setTodos] = useState(todoData);
  const [search, setSearch] = useState("");

  const addTodo = (newTodo) => {
    const addNewTodo = {
      _id: Date.now().toString(),
      ...newTodo,
    };
    setTodos([...todos, addNewTodo]);
  };

  const handleDelete = (id) => {
    const deleteItem = todos.filter((todo) => todo._id !== id);
    setTodos(deleteItem);
  };
  const handleSearch = todos.filter(
    (todo) =>
      todo.todo.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Todo">
      <h2>
        {handleSearch.length} List{" "}
        {handleSearch.length === 1 ? "Todo ✨" : "Todos ✨"}
      </h2>
      <div className="container">
        <Add addTodo={addTodo} />
        <Search search={search} setSearch={setSearch} />
        <List handleDelete={handleDelete} todos={handleSearch} />
      </div>
    </div>
  );
};
