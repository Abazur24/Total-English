import React, { useContext, useState } from 'react';
import './navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/TotalEnglishLogo.svg';
import { AuthContext } from '../../context/AuthContext';
import userIcon from '../../assets/images/user_icon.svg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);

  // Toggles the hamburger menu for mobile screens
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to navigate to a specific path and scroll to a section
  const navigateToSection = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to allow the page to load before scrolling
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a onClick={() => navigateToSection("/", "welcome")}>
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        {/* Dropdown for Courses */}
        <li className="nav-item">
          <a>Courses</a>
          <ul className="dropdown">
            <li onClick={() => navigateToSection("/", "general-english")}>
              General English
            </li>
            <li onClick={() => navigateToSection("/", "academic-english")}>
              Academic English
            </li>
            <li onClick={() => navigateToSection("/", "business-english")}>
              Business English
            </li>
            <li onClick={() => navigateToSection("/", "professional-english")}>
              English for Professionals
            </li>
            <li onClick={() => navigateToSection("/", "travel-english")}>
              English for Traveling
            </li>
            <li onClick={() => navigateToSection("/", "children-english")}>
              English for Children
            </li>
          </ul>
        </li>

        {/* Main Navbar Links */}
        <li
          className="nav-item"
          onClick={() => navigateToSection("/", "virtual-classroom")}
        >
          Virtual Classroom
        </li>
        <li
          className="nav-item"
          onClick={() => navigateToSection("/", "quizzes")}
        >
          Quizzes
        </li>
        <li
          className="nav-item"
          onClick={() => navigateToSection("/", "video-lessons")}
        >
          Video Lessons
        </li>
        <li
          className="nav-item"
          onClick={() => navigateToSection("/", "ai-assistant")}
        >
          AI Assistant
        </li>

        {/* Add the "Test your English" button */}
        <li className="nav-item" onClick={() => navigate("/test-your-english")}>
          Test your English
        </li>
      </ul>

      {/* Authentication Buttons */}
      {currentUser ? (
        <div className="auth-buttons">
          <Link className="greeting-txt" to="/dashboard">hi {currentUser.user.name}</Link>
          <span className="greeting-icon">
            <img
              src={userIcon}
              alt="user-icon"
              style={{ width: "1.2em" }}
            />
          </span>
        </div>
      ) : (
        <div className="auth-buttons">
          <Link to="/login" className="btn">
            Sign In
          </Link>
          <Link to="/signup" className="btn">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;