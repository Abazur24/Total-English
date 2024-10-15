import React from 'react';
import { Link } from 'react-router-dom';
import './coursesPages.scss';
import academicImage from '../../assets/images/academic.png'; // Adjust the image path accordingly for each page

const AcademicPage = () => {
  return (
    <div className="course-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Our Academic English Course</h1>
          <p className="description">
            Our Academic English Course is designed for students and professionals aiming to excel in an academic environment.
          </p>
          <p className="description">
            This course focuses on developing essential language skills, such as reading, writing, listening, and speaking, to help learners succeed in academic settings.
          </p>
          <Link to="/academic" className="contact-button">Contact Our Manager</Link>
        </div>
        <div className="image-section">
          <img className="course-image" src={academicImage} alt="Academic English" />
        </div>
      </div>
    </div>
  );
};

export default AcademicPage;