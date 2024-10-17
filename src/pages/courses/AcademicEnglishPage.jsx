import React, { useState } from 'react';
import './coursesPages.scss';
import academicImage from '../../assets/images/academic.png';
import ContactFormModal from '../../components/ContactFormModal'; // Import the modal

const AcademicPage = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Manage modal state

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="course-container academic-english">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Our Academic English Course</h1>
          <p className="description">
            Our Academic English Course is designed for students and professionals aiming to excel in an academic environment.
          </p>
          <p className="description">
            This course focuses on developing essential language skills, such as reading, writing, listening, and speaking, to help learners succeed in academic settings.
          </p>
          <button onClick={handleOpenModal} className="contact-button-pages">Contact Our Manager</button>
        </div>
        <div className="image-section">
          <img className="course-image" src={academicImage} alt="Academic English" />
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default AcademicPage;