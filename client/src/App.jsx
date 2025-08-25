import { Routes, Route, Navigate } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import MainLayout from './layouts/MainLayout/MainLayout';
import './_App.scss'
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  return (
    <Routes>
      <Route
        path="/welcome"
        element={userName ? <Navigate to="/" replace /> : <WelcomePage setUserName={setUserName} />}
      />

      <Route
        path='/'
        element={userName ? <MainLayout /> : <Navigate to="/welcome" />}
      >
        <Route index element={HomePage} />
      </Route>
    </Routes>
  )
}

export default App
