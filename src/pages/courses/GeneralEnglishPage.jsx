import React from 'react';
import { Link } from 'react-router-dom';
import './coursesPages.scss';
import generalEnglishImage from '../../assets/images/people.png'; 

const GeneralEnglishPage = () => {
  return (
    <div className="course-container general-english">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Our General English Course</h1>
          <p className="description">
            Our General English Course is designed for learners of all levels who want to improve their English skills in grammar, vocabulary, and speaking.
          </p>
          <p className="description">
            This course is perfect for students, professionals, and anyone looking to enhance their English language proficiency.
          </p>
          <Link to="/general-english" className="contact-button-pages">Contact our Manager</Link>
        </div>
        <div className="image-section">
          <img className="course-image" src={generalEnglishImage} alt="General English" />
        </div>
      </div>
    </div>
  );
};

export default GeneralEnglishPage;