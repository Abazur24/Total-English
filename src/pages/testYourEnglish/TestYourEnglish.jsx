import React from 'react';
import './testYourEnglish.scss';
import cambridgeLogo from '../../assets/images/university-of-cambridge-logo.svg';

const TestYourEnglish = () => {
  return (
    <div className="test-your-english-page">
      <div className="content-container">
        <img src={cambridgeLogo} alt="University of Cambridge Logo" className="cambridge-logo" />
        <div className="content-wrapper">
          <h1>Test your English Level</h1>
          <p>
          Assess your English proficiency with the University of Cambridge Level Test! Whether you're just starting or already fluent, it's essential to know where you stand. Our test provides insights into your grammar, vocabulary, and overall language abilities. Once you’ve completed the test, return to our portal and contact one of our managers for personalized guidance and next steps to continue your learning journey.
          </p>
          <a 
            href="https://www.cambridgeenglish.org/test-your-english/general-english/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="styled-button"
          >
            Start the Test
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestYourEnglish;