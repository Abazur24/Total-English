import React, { useState } from 'react';
import { Course } from '../../lib/course';  
import CourseCard from '../../components/courseCard/CourseCard';  
import './allCourses.scss';  

const AllCourses = () => {
  // Initialize state to track the number of courses to display
  const [visibleCourses, setVisibleCourses] = useState(8);

  // Function to handle loading more courses
  const loadMoreCourses = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 8); // Increase by 8
  };

  return (
    <div className="course-background">
    <div className="main-video">
      {Course.slice(0, visibleCourses).map(({ id, image, title, description, duration, price, level }) => (
        <CourseCard 
          key={id}
          id={id}
          image={image}
          title={title}
          description={description}
          duration={duration}
          price={price}
          level={level}
        /> 
      ))}
      
      {/* Button to load more courses */}
      {visibleCourses < Course.length && (
        <div className="load-more-container">
          <button className="load-more" onClick={loadMoreCourses}>
            Load More
          </button>
      </div>
      )}
    </div>
    </div>
  );
};

export default AllCourses;

