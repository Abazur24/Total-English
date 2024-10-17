import React, { useState } from 'react';
import './coursesPages.scss';
import generalEnglishImage from '../../assets/images/people.png';
import ContactFormModal from '../../components/ContactFormModal'; // Import the modal

const GeneralEnglishPage = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Manage modal state

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
          <button onClick={handleOpenModal} className="contact-button-pages">Contact our Manager</button>
        </div>
        <div className="image-section">
          <img className="course-image" src={generalEnglishImage} alt="General English" />
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default GeneralEnglishPage;