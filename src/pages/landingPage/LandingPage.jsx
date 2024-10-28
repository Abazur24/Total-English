import React from 'react';
import './landingPage.scss';
import { useNavigate } from 'react-router-dom';
import SectionTemplate from '../../components/sectionTemplate/SectionTemplate';
import Card from '../../components/card/Card';

// Import images directly
import generalEnglishImage from '../../assets/images/general-section.jpg';
import academicEnglishImage from '../../assets/images/academic-section.jpg';
import businessEnglishImage from '../../assets/images/business-section.jpg';
import healthcareImage from '../../assets/images/healthcare.png';
import humanResourcesImage from '../../assets/images/humanresourses.png';
import financeImage from '../../assets/images/finance.jpg';
import itProfessionalsImage from '../../assets/images/itprofessionals.png';
import lawyersImage from '../../assets/images/lawyers.png';
import salesImage from '../../assets/images/sales.png';
import travellingImage from '../../assets/images/travelling-section.jpg';
import childrenImage from '../../assets/images/children-section.jpg';
import virtualClassroomImage from '../../assets/images/virtual-section.jpg';
import quizzesImage from '../../assets/images/quizzes-section.jpg';
import videoLessonsImage from '../../assets/images/video-section.jpg';
import aiAssistantImage from '../../assets/images/AI-section.jpg';

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
      {/* Welcome Section */}
      <section className="section welcome" id="welcome">
        <h1 className="hero-heading">Master English with Confidence — Anytime, Anywhere.</h1>
        <div className="hero-card">
        <p>Join our interactive platform to improve your English skills with expert-led courses, 
        live practice, and personalized learning tools.<br />Start your journey today!
        </p>
          <button className="scroll-button" onClick={() => navigateToSection('/', 'general-english')}>
            Scroll to see more
          </button>
        </div>
      </section>

      {/* General English Section */}
      <SectionTemplate
        id="general-english"
        heading="Our General English Course"
        content="Our General English Course is designed to help learners of all levels improve their English skills. Dive into engaging lessons that enhance grammar, vocabulary, and speaking confidence for real-world application."
        backgroundGradient="linear-gradient(135deg, rgba(255, 229, 170, 0.4), rgba(255, 204, 153, 0.8))"
        backgroundImage={generalEnglishImage}
        buttonLabel="Find More"
        buttonAction={() => navigate('/general-english')}
      />

      {/* Academic English Section */}
      <SectionTemplate
        id="academic-english"
        heading="Our Academic English Course"
        content="Our Academic English Course is designed for students and professionals aiming to excel in an academic environment. Master critical reading, writing, and research skills essential for success in higher education."
        backgroundGradient="linear-gradient(135deg, rgba(255, 207, 179, 0.4), rgba(255, 182, 140, 0.8))"
        backgroundImage={academicEnglishImage}
        buttonLabel="Find More"
        buttonAction={() => navigate('/academic')}
      />

      {/* Business English Section */}
      <SectionTemplate
        id="business-english"
        heading="Our Business English Course"
        content="Our Business English Course is crafted for professionals who want to enhance their language skills in a corporate context. Strengthen your business communication, negotiation, and presentation skills to thrive in any industry."
        backgroundGradient="linear-gradient(135deg, rgba(193, 226, 164, 0.5), rgba(147, 203, 134, 0.8))"
        backgroundImage={businessEnglishImage}
        buttonLabel="Find More"
        buttonAction={() => navigate('/business')}
      />

      {/* Professional English Section */}
      <section className="section professional-english" id="professional-english" style={{ background: 'linear-gradient(135deg, #b7e0ff, #a3d3ff)' }}>
        <h2>Our English for Professional Purposes Course</h2>
        <div className="card-container">
          <Card title="English for Healthcare" image={healthcareImage} imgalt="Healthcare" target="/healthcare" />
          <Card title="English for Human Resources" image={humanResourcesImage} imgalt="Human Resources" target="/humanresourses" />
          <Card title="English for Finance and Accounting" image={financeImage} imgalt="finance" target="/finance" />
          <Card title="English for IT" image={itProfessionalsImage} imgalt="IT Professionals" target="/it" />
          <Card title="English for Lawyers" image={lawyersImage} imgalt="Lawyer" target="/lawyers" />
          <Card title="English for Marketing and Sales" image={salesImage} imgalt="Sales" target="/sales" />
        </div>
      </section>

      {/* Travel English Section */}
      <SectionTemplate
        id="travel-english"
        heading="Our English for Traveling Course"
        content="Our English for Traveling Course is perfect for globetrotters who want to communicate effectively while exploring new destinations. Prepare yourself for any travel situation, from booking accommodations to asking for directions."
        backgroundGradient="linear-gradient(135deg, rgba(255, 245, 205, 0.4), rgba(255, 230, 170, 0.8))"
        backgroundImage={travellingImage}
        buttonLabel="Find More"
        buttonAction={() => navigate('/english-for-travelling')}
      />

      {/* English for Children Section */}
      <SectionTemplate
        id="children-english"
        heading="Our English for Children Course"
        content="Our English for Children Course is designed to make learning English fun and engaging for young learners. Through interactive games and activities, children build a solid language foundation in an enjoyable way."
        backgroundGradient="linear-gradient(135deg, rgba(255, 207, 179, 0.4), rgba(255, 182, 140, 0.8))"
        backgroundImage={childrenImage}
        buttonLabel="Find More"
        buttonAction={() => navigate('/english-for-children')}
      />

      {/* Virtual Classroom Section */}
      <SectionTemplate
        id="virtual-classroom"
        heading="Our Virtual Classroom"
        content="Our Virtual Classroom offers English learners the opportunity to practice their language skills in real-time through live video conferencing with dedicated teachers. Learn from anywhere with interactive lessons and immediate feedback."
        backgroundGradient="linear-gradient(135deg, rgba(217, 220, 253, 0.4), rgba(183, 202, 244, 0.8))"
        backgroundImage={virtualClassroomImage}
        buttonLabel="Find More"
        buttonAction={() => navigate('/virtual-classroom')}
      />

      {/* Quizzes Section */}
      <SectionTemplate
        id="quizzes"
        heading="Try Our Quizzes"
        content="Challenge yourself and reinforce your learning with our interactive quizzes! Track your progress, identify areas for improvement, and keep motivation high with instant feedback and engaging questions."
        backgroundGradient="linear-gradient(135deg, rgba(193, 226, 164, 0.4), rgba(147, 203, 134, 0.8))"
        backgroundImage={quizzesImage}
        buttonLabel="Find More"
        buttonAction={() => navigate('/quizzes')}
      />

      {/* Video Lessons Section */}
      <SectionTemplate
        id="video-lessons"
        heading="Watch Video Lessons"
        content="Enhance your learning experience with our selection of Video Lessons. Access lessons anytime, and practice with clear explanations, real-life examples, and visual aids to help you understand and remember."
        backgroundGradient="linear-gradient(135deg, rgba(183, 224, 255, 0.4), rgba(150, 203, 246, 0.8))"
        backgroundImage={videoLessonsImage}
        buttonLabel="Find More"
        buttonAction={() => navigate('/video-lessons')}
      />

      {/* AI Assistant Section */}
      <SectionTemplate
        id="ai-assistant"
        heading="AI Assistant"
        content="Explore the power of personalized learning with our AI Assistant. Engage in interactive conversations, receive instant feedback, and improve your grammar, vocabulary, and pronunciation at your own pace."
        backgroundGradient="linear-gradient(135deg, rgba(217, 220, 253, 0.4), rgba(183, 202, 244, 0.9))"
        backgroundImage={aiAssistantImage}
        buttonLabel="Find More"
        buttonAction={() => navigate('/ai-assistant')}
      />
    </div>
  );
};

export default LandingPage;