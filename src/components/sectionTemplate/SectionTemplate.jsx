import React from 'react';
import './sectionTemplate.scss';

const SectionTemplate = ({ id, heading, content, backgroundColor, backgroundImage, buttonLabel, buttonAction }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section id={id} className="section-template" style={{ backgroundColor }}>
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