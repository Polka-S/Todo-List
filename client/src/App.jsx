import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import MainLayout from './layouts/MainLayout/MainLayout';
import { ThemeProvider } from './contexts/ThemeContext';
import './_App.scss'
import { TasksProvider } from './contexts/TasksContext';

function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  return (
    <ThemeProvider>
      <TasksProvider>
        <Routes>
          <Route
            path="/welcome"
            element={userName ? <Navigate to="/" replace /> : <WelcomePage setUserName={setUserName} />}
          />

          <Route
            path='/'
            element={userName ? <MainLayout /> : <Navigate to="/welcome" />}
          >
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </TasksProvider>
    </ThemeProvider>
  )
}

export default App
