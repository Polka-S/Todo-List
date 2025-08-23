import { Routes, Route, Navigate } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import MainLayout from './layouts/MainLayout/MainLayout';
import './_App.scss'

function App() {
  const userName = false;

  return (
    <Routes>
      <Route
        path="/welcome"
        element={userName ? <Navigate to="/" replace /> : <WelcomePage />}
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
