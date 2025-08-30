import { useEffect, useState } from "react";

export function Todos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const addToDo = (task, taskDescription) => {
    setTodos((prevTodos) => ([
      ...prevTodos,
      {
        id: Date.now(),
        task,
        ...(taskDescription ? {taskDescription} : null),
        completed: false,
      }
    ]));
  };

  const removeTodos = (id) => {
    setTodos((prevTodos) => (
      prevTodos.filter(todo => id !== todo.id)
    ));
  };

  const toggleTodos = (id) => {
    setTodos((prevTodos) => (
      prevTodos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    ));
  }

  const editTodos = (id, fieldsToEdit) => {
    setTodos((prevTodos) => (
      prevTodos.map(todo => 
        todo.id === id ? {...todo, ...fieldsToEdit} : todo
      )
    ));
  };

  return { todos, addToDo, removeTodos, toggleTodos, editTodos };
};
