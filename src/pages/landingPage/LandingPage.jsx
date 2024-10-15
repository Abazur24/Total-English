import React from 'react';
import './landingPage.scss';

import { Link, useNavigate } from 'react-router-dom';
import SectionTemplate from '../../components/sectionTemplate/SectionTemplate';
import Card from '../../components/card/Card';


const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToSection = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  };

  return (
    <div className="landing-page">
      {/* Welcome Section (No Changes) */}
      <section className="section welcome" id="welcome">
        <h1 className="hero-heading">Master English with Confidence — Anytime, Anywhere.</h1>
        <div className="hero-card">
          <p>
            Join our interactive platform to improve your English skills with expert-led courses,
            live practice, and personalized learning tools. Start your journey today!
          </p>
          {/* Scroll to See More Button */}
          <button className="scroll-button" onClick={() => navigateToSection('/', 'general-english')}>
            Scroll to see more
          </button>
        </div>
      </section>

      {/* General English Section */}
      <SectionTemplate
        id="general-english"
        heading="Our General English Course"
        content="Our General English Course is designed to help learners of all levels improve their English skills. Whether you're looking to enhance your grammar, expand your vocabulary, or become more confident in speaking, our course offers comprehensive lessons and interactive activities tailored to your needs."
        backgroundColor="#fff5cd"
        backgroundImage="../src/assets/images/general-section.jpg"  // Background image for the card
        buttonLabel="Find More"
        buttonAction={() => navigate('/general-english')}
      />

      {/* Academic English Section */}
      <SectionTemplate
        id="academic-english"
        heading="Our Academic English Course"
        content="Our Academic English Course is designed for students and professionals aiming to excel in an academic environment. This course focuses on developing the critical reading, writing, and research skills needed for success in higher education."
        backgroundColor="#ffcfb3"
        backgroundImage="../src/assets/images/academic-section.jpg"  // Background image for the card
        buttonLabel="Find More"
        buttonAction={() => navigate('/academic')}
      />

      {/* Business English Section */}
      <SectionTemplate
        id="business-english"
        heading="Our Business English Course"
        content="Our Business English Course is crafted for professionals who want to enhance their language skills in a corporate context. This course covers essential topics like business communication, negotiation, presentations, and writing reports."
        backgroundColor="#c1e2a4"
        backgroundImage="../src/assets/images/business-section.jpg"  // Background image for the card
        buttonLabel="Find More"
        buttonAction={() => navigate('/business')}
      />

      {/* Professional English Section */}
<section className="section professional-english" id="professional-english">
  <h2>Our English for Professional Purposes Course</h2>
  <div className="card-container">  
        <Card title="English for Healthcare" image="../src/assets/images/healthcare.png" imgalt="Healthcare" target="/healthcare"/>
        <Card title="English for Human Resources" image="../src/assets/images/humanresourses.png" imgalt="Humanresourse" target="/humanresourses"/>
        <Card title="English for Finance and Accounting" image="../src/assets/images/finance.jpg" imgalt="finance" target="/finance"/>
        <Card title="English for IT" image="../src/assets/images/itprofessionals.png" imgalt="itpicture" target="/it"/>
        <Card title="English for Lawyers" image="../src/assets/images/lawyers.png" imgalt="a lawyer" target="/lawyers"/>
        <Card title="English for Marketing and Sales" image="../src/assets/images/sales.png" imgalt="sales" target="/sales"/>
  </div>
</section>

      {/* Travel English Section */}
      <SectionTemplate
        id="travel-english"
        heading="Our English for Traveling Course"
        content="Our English for Traveling Course is perfect for globetrotters who want to communicate effectively while exploring new destinations."
        backgroundColor="#fff5cd"
        backgroundImage="../src/assets/images/travelling-section.jpg"  // Background image for the card
        buttonLabel="Find More"
        buttonAction={() => navigate('/english-for-travelling')}
      />

      {/* English for Children Section */}
      <SectionTemplate
        id="children-english"
        heading="Our English for Children Course"
        content="Our English for Children Course is designed to make learning English fun and engaging for young learners. With interactive lessons, games, and activities, children will develop their language skills in a playful and supportive environment."
        backgroundColor="#ffcfb3"
        backgroundImage="../src/assets/images/children-section.jpg"  // Background image for the card
        buttonLabel="Find More"
        buttonAction={() => navigate('/english-for-children')}
      />

      {/* Virtual Classroom Section */}
      <SectionTemplate
        id="virtual-classroom"
        heading="Our Virtual Classroom"
        content="Our Virtual Classroom offers English learners the opportunity to practice their language skills in real-time through live video conferencing with dedicated teachers."
        backgroundColor="#d9dcfd"
        backgroundImage="../src/assets/images/virtual-section.jpg"  // Background image for the card
        buttonLabel="Find More"
        buttonAction={() => navigate('/virtual-classroom')}
      />

      {/* Quizzes Section */}
      <SectionTemplate
        id="quizzes"
        heading="Try Our Quizzes"
        content="Challenge yourself and reinforce your learning with our interactive quizzes! Test your knowledge, track your progress, and get instant feedback to help you master English more effectively."
        backgroundColor="#c1e2a4"
        backgroundImage="../src/assets/images/quizzes-section.jpeg"  // Background image for the card
        buttonLabel="Find More"
        buttonAction={() => navigate('/quizzes')}
      />

      {/* Video Lessons Section */}
      <SectionTemplate
        id="video-lessons"
        heading="Watch Video Lessons"
        content="Enhance your learning experience with our selection of Video Lessons. Learn at your own pace with clear explanations, real-life examples, and visual aids that make complex concepts easy to understand."
        backgroundColor="#b7e0ff"
        backgroundImage="../src/assets/images/video-section.jpeg"  // Background image for the card
        buttonLabel="Find More"
        buttonAction={() => navigate('/video-lessons')}
      />

      {/* AI Assistant Section */}
      <SectionTemplate
        id="ai-assistant"
        heading="AI Assistant"
        content="Explore the power of personalized learning with our AI Assistant. Chat with an AI Language Assistant to practice your writing skills, receive instant feedback, and refine your grammar and pronunciation."
        backgroundColor="#d9dcfd"
        backgroundImage="../src/assets/images/AI-section.jpg"  // Background image for the card
        buttonLabel="Find More"
        buttonAction={() => navigate('/ai-assistant')}
      />
    </div>
  );
};

export default LandingPage;