import React from 'react';
import { Link } from 'react-router-dom';
import './coursesPages.scss';
import businessImage from '../../assets/images/business.png';

const BusinessPage = () => {
  return (
    <div className="course-container business-english">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Our Business English Course</h1>
          <p className="description">
            Our Business English Course is crafted for professionals who want to enhance their language skills in a corporate context...
          </p>
          <Link to="/business" className="contact-button-pages">Contact Our Manager</Link>
        </div>
        <div className="image-section">
          <img className="course-image" src={businessImage} alt="Business English" />
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;