import React from 'react';
import { Link } from 'react-router-dom';
import './coursesPages.scss';
import travellingImage from '../../assets/images/travelling.png';

const EnglishForTravellingPage = () => {
  return (
    <div className="course-container travelling-english">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Our English for Travelling Course</h1>
          <p className="description">
            Our English for Travelling Course is designed for globetrotters looking to master essential communication skills needed during travel.
          </p>
          <Link to="/english-for-travelling" className="contact-button-pages">Contact Our Manager</Link>
        </div>
        <div className="image-section">
          <img className="course-image" src={travellingImage} alt="English for Travelling" />
        </div>
      </div>
    </div>
  );
};

export default EnglishForTravellingPage;