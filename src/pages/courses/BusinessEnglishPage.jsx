import React, { useState } from 'react';
import './coursesPages.scss';
import businessImage from '../../assets/images/business-page.jpg';
import ContactFormModal from '../../components/ContactFormModal'; // Import the modal

const BusinessPage = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Manage modal state

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="course-container business-english">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Our Business English Course</h1>
          <p className="description">
          Our Business English Course is crafted for professionals who want to enhance their language skills in a corporate context. It covers key topics such as business communication, presentations, and professional writing. You'll develop the confidence to participate in meetings, write clear emails, and deliver presentations effectively. This course helps you navigate workplace interactions and succeed in a global business environment.
          </p>
          <button onClick={handleOpenModal} className="contact-button-pages">Contact Our Manager</button>
        </div>
        <div className="image-section">
          <img className="course-image" src={businessImage} alt="Business English" />
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default BusinessPage;