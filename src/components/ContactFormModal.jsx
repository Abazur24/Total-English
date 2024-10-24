import React, { useState } from 'react';
import './ContactFormModal.scss';

const ContactFormModal = ({ isOpen, onClose }) => {
  const [showThankYou, setShowThankYou] = useState(false); // State to control thank you modal

  if (!isOpen) return null; // Don't render the modal if it's not open

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    setShowThankYou(true); // Show the thank you message
  };

  // Close thank you modal and the contact modal
  const handleCloseThankYou = () => {
    setShowThankYou(false);
    onClose(); // Close the Contact Form Modal
  };

  return (
    <>
      {/* Contact Form Modal */}
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="+44" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Leave your message here" required></textarea>
            </div>
            <button type="submit" className="send-button">Send</button>
          </form>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Thank You!</h2>
            <p>
              Your message has been sent successfully. One of our coordinators will contact you soon.
            </p>
            <button className="close-button" onClick={handleCloseThankYou}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFormModal;