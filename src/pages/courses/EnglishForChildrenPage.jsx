import React, { useState } from 'react';
import './coursesPages.scss';
import childrenImage from '../../assets/images/childrenFoto.png';
import ContactFormModal from '../../components/ContactFormModal'; // Import the modal

const EnglishForChildrenPage = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Manage modal state

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="course-container english-children">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Our English for Children Course</h1>
          <p className="description">
            Our English for Children Course offers fun and interactive lessons to help young learners build a strong foundation in the English language.
          </p>
          <button onClick={handleOpenModal} className="contact-button-pages">Contact Our Manager</button>
        </div>
        <div className="image-section">
          <img className="course-image" src={childrenImage} alt="English for Children" />
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default EnglishForChildrenPage;