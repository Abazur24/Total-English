import React from 'react';
import './aboutUsPage.scss'; // Styles for the About Us page

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          At Total English, we are dedicated to providing the highest quality English language learning experience. 
          Whether you are learning English for business, academic purposes, or personal growth, we offer a range 
          of courses to suit your needs. Our mission is to help you achieve your language goals through personalized 
          and engaging lessons.
        </p>
        <p>
          Founded in 2023, Total English has helped thousands of learners from around the world enhance their English skills. 
          With professional instructors, modern learning techniques, and state-of-the-art tools, we make language learning 
          accessible and effective.
        </p>
        <p>
          Our courses are designed for learners at every level, from beginner to advanced, and we continuously innovate to 
          meet the changing demands of the global language learning community.
        </p>
        <p>Thank you for choosing Total English as your language learning partner!</p>
      </div>
    </div>
  );
};

export default AboutUsPage;