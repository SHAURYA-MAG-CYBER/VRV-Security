// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App = () => {

  const [currentUser, setCurrentUser] = useState(null); // State to manage logged-in user

  const handleLogin = (user) => {
    setCurrentUser(user); // Set the logged-in user
  };

  const handleLogout = () => {
    setCurrentUser(null); // Clear the logged-in user
  };

  return (
    <Router>
      <Routes>
        {/* Route for Login */}
        <Route
          path="/login"
          element={
            currentUser ? (
              <Navigate to="/" replace /> // Redirect to Dashboard if already logged in
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
