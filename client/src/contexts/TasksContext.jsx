import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

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

  const [searchTask, setSearchTask] = useState('');
  const [taskType, setTaskType] = useState('all');

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

  const editTask = (id, fieldsToEdit) => {
    setTasks((prevTasks) => 
      prevTasks.map(task => 
        task.id === id ? {...task, ...fieldsToEdit} : task
      )
    );
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = task.task
      .toLowerCase()
      .includes(searchTask.toLowerCase());
      
      const matchesType =
        taskType === 'all' ||
        (taskType === 'done' && task.completed) ||
        (taskType === 'to-do' && !task.completed);

      return matchesSearch && matchesType;
    });
  }, [tasks, searchTask, taskType]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        toggleTask,
        editTask,
        filteredTasks,
        searchTask,
        setSearchTask,
        setTaskType,
      }}
    >
      { children }
    </TasksContext.Provider>
  );
};