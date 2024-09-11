import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpIn.css';

const SignUpIn = () => {
  return (
    <div className="signupin-container">
      <h2>Join Us</h2>
      <p>Sign up now and start your learning journey!</p>
      <div className="signupin-buttons">
        <Link to="/signup" className="signupin-button">Sign Up</Link>
        <Link to="/signin" className="signupin-button">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpIn;