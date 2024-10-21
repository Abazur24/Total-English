import { Link } from "react-router-dom";
import "./courseCard.scss";

// Accept course as individual props
const CourseCard = ({ id, title, description, level }) => {
  return (
   
    <div className="course-card">
      <div className="course-content">
        
        {/*<img src={image} alt={title} className="course-image" />*/}

        {/* Wrap title, description, duration, and price in a details div */}
        <div className="details">
          <h3 className="course-heading">{title}</h3>
          <h4 className="course-level">{level}</h4>
          <p>
            <span>{description}</span>
          </p>
        </div>

        <Link to={`/video-lessons/${id}`}>
          <button className="start-video-button"><h2 className="start-now-text">Start Now</h2></button>
        </Link>
      </div>
    </div>
   
  );
};

export default CourseCard;
