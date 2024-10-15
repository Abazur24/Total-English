import React from 'react';
import { Link } from 'react-router-dom';
import './coursesPages.scss';
import childrenImage from '../../assets/images/childrenFoto.png';

const EnglishForChildrenPage = () => {
  return (
    <div className="course-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Our English for Children Course</h1>
          <p className="description">
            Our English for Children Course offers fun and interactive lessons to help young learners build a strong foundation in the English language.
          </p>
          <Link to="/english-for-children" className="contact-button">Contact Our Manager</Link>
        </div>
        <div className="image-section">
          <img className="course-image" src={childrenImage} alt="English for Children" />
        </div>
      </div>
    </div>
  );
};

export default EnglishForChildrenPage;