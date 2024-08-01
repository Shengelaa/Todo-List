import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./ToDoList.module.css";
import { addTodo, getTodos } from "../../ApiRequest";

const AdminHome = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    try {
      const addedTodo = await addTodo(todo);
      setTodos([...todos, addedTodo]);
      setNewTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleComplete = async (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, completed: !todo.completed };
        return updatedTodo;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleSignout = () => {
    navigate("/UserHome");
  };

  return (
    <div className={Styles.container}>
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Add a new todo'
        />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleComplete(todo.id)}
            className={todo.completed ? Styles.completed : ""}>
            {todo.text}
          </li>
        ))}
      </ul>

      <button onClick={handleSignout}>Signout</button>
    </div>
  );
};

export default AdminHome;
