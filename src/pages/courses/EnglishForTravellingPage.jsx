import React, { useState } from 'react';
import './coursesPages.scss';
import travellingImage from '../../assets/images/travelling.png';
import ContactFormModal from '../../components/ContactFormModal'; // Import the modal

const EnglishForTravellingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Manage modal state

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="course-container travelling-english">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Our English for Travelling Course</h1>
          <p className="description">
            Our English for Travelling Course is designed for globetrotters looking to master essential communication skills needed during travel.
          </p>
          <button onClick={handleOpenModal} className="contact-button-pages">Contact Our Manager</button>
        </div>
        <div className="image-section">
          <img className="course-image" src={travellingImage} alt="English for Travelling" />
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default EnglishForTravellingPage;