// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App = () => {

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  }); 

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null); 
    localStorage.removeItem('currentUser');
  };

  return (
    <Router>
      <Routes>
        {/* Route for Login */}
        <Route
          path="/login"
          element={
            currentUser ? (
              <Navigate to="/" replace /> 
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        {/* Route for Dashboard */}
        <Route
          path="/"
          element={
            currentUser ? (
              <Dashboard currentUser={currentUser} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace /> // Redirect to Login if not logged in
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
