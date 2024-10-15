import React from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import './coursesPage.scss'; // Import the SCSS file
import { listData } from '../../database/dbs'; //inserting the database wth course information



const CoursesPage = () => {
  return (
    <div>
      <header>
       <nav>
          <div className="logo"></div>
          <ul className="nav-links">
            <li>
              <Link to="/esp">Courses</Link> {/* This link leads to the ESP page */}
            </li>
            <li><Link to="/virtualClassroom">Virtual Classroom</Link> {/* This link leads to the VC page */}</li>
            <li><Link to="/Quizzes">Quizzes</Link> {/* This link leads to the Quizzes page */}</li>
            <li><Link to="/VideoLessons">Video Lessons</Link> {/* This link leads to the Video lessons page */}</li>
            <li><Link to="/AIAssistant">AI Asisstant</Link> {/* This link leads to the AIA page */}</li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>English for Special Purposes</h1>
        <div className="courses-grid">
          {/* Make each course card a clickable Link */}
          <div className="course-card">
            <div className="course-content">
              <h2>English for Healthcare</h2>
              {/* Button to learn more */}
              <Link to="/esp">
                <button className="learn-more-btn">Find More</button>
              </Link>
            </div>
          </div>
          
          <div className="course-card">
            <div className="course-content">
              <h2>English for Human Resources</h2>
              <Link to="/esp">
                <button className="learn-more-btn">Find More</button>
              </Link>
            </div>
          </div>

          <div className="course-card">
            <div className="course-content">
              <h2>English for Finance and Accounting</h2>
              <Link to="/esp">
                <button className="learn-more-btn">Find More</button>
              </Link>
            </div>
          </div>

          <div className="course-card">
            <div className="course-content">
              <h2>English for IT</h2>
              <Link to="/esp">
                <button className="learn-more-btn">Find More</button>
              </Link>
            </div>
          </div>

          <div className="course-card">
            <div className="course-content">
              <h2>English for Lawyers</h2>
              <Link to="/esp">
                <button className="learn-more-btn">Find More</button>
              </Link>
            </div>
          </div>

          <div className="course-card">
            <div className="course-content">
              <h2>English for Marketing and Sales</h2>
              <Link to="/esp">
                <button className="learn-more-btn">Find More</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;


