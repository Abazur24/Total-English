import React, { useContext, useEffect, useState } from 'react';
import { Course } from '../../lib/course';  
import CourseCard from '../../components/courseCard/CourseCard';  
import './allCourses.scss';  
import config from '../../config/config';
import { AuthContext } from '../../context/AuthContext';

const AllCourses = () => {
  // Initialize state to track the number of courses to display
  const [visibleCourses, setVisibleCourses] = useState(8);
  const [course, setCourse] = useState(Course);
  const {currentUser, updateUser} = useContext(AuthContext);

  // Function to handle loading more courses
  const loadMoreCourses = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 8); // Increase by 8
  };

  // fetch courses from db
  const fetchCourses = async() => {
    try {
      const res = await fetch(`${config.apiUrl}/api/videos`, {headers:{"Authorization":`${"Bearer "+currentUser.token}`}});
      if(!res.ok){
        const dataError = await res.json();
        throw new Error(dataError.message || 'Fetch videos failed!')
      }

      const courses = await res.json();
      setCourse(courses?.length ? courses : Course);

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="main-video">
      {course.slice(0, visibleCourses).map(({ id, image, title, description, duration, price }) => (
        <CourseCard 
          key={id}
          id={id}
          image={image}
          title={title}
          description={description}
          duration={duration}
          price={price}
        /> 
      ))}
      
      {/* Button to load more courses */}
      {visibleCourses < course.length && (
        <div className="load-more-container">
          <button className="load-more" onClick={loadMoreCourses}>
            Load More
          </button>
      </div>
      )}
    </div>
  );
};

export default AllCourses;

