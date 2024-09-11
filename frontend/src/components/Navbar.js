import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import './Navbar.css';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">MyApp</Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        {user ? (
          <>
            <Link to="/ai-assistant">AI Assistant</Link>
            <Link to="/video-lessons">Video Lessons</Link>
            <Link to="/virtual-classroom">Virtual Classroom</Link>
            <Link to="/quizzes">Quizzes</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;