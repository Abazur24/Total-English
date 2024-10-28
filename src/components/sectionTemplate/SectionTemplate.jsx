import React from 'react';
import './sectionTemplate.scss';

const SectionTemplate = ({ id, heading, content, backgroundColor, backgroundImage, backgroundGradient, buttonLabel, buttonAction }) => {
  const sectionStyle = {
    background: backgroundGradient, // Apply gradient background to the section
    backgroundColor: backgroundColor, // Fallback color
  };

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`, // Background image only for the card
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section id={id} className="section-template" style={sectionStyle}>
      <div className="card" style={cardStyle}>
        <h2>{heading}</h2>
        <p>{content}</p>
        {buttonLabel && (
          <button className="styled-button" onClick={buttonAction}>
            {buttonLabel}
          </button>
        )}
      </div>
    </section>
  );
};

export default SectionTemplate;