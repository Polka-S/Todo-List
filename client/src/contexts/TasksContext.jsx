import React, { createContext, useContext, useEffect, useState } from "react";

const TasksContext = createContext() 

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error('useTasks must be used within a ThemeProvider');
  return context;
}

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : []
  });

  useEffect (() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task, description) => {
    setTasks((prevTasks) => ([
      ...prevTasks,
      {
        id: Date.now(),
        task,
        ...(description ? {description} : {}),
        completed: false,
      }
    ]));
  };

  const removeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter(task => 
        task.id !== id
      )
    );
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) => 
      prevTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task
      )
    );
  };

  const editIask = (id, fieldsToEdit) => {
    setTasks((prevTasks) => 
      prevTasks.map(task => 
        task.id === id ? {...task, ...fieldsToEdit} : task
      )
    );
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, removeTask, toggleTask, editIask }}
    >
      { children }
    </TasksContext.Provider>
  );
};

// export function useTasks() {
//   return useContext(TasksContext);
// };