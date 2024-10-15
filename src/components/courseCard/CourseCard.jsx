import { Link } from 'react-router-dom';
import './courseCard.scss';

// Accept course as individual props
const CourseCard = ({ id, image, title, description, duration, price }) => {
  return (
    <div className="course-card">
      <div className='course-content'>
        <img src={image} alt={title} className="course-image" />

        {/* Wrap title, description, duration, and price in a details div */}
        <div className="details">
          <h3>{title}</h3>
          <p>Description - <span>{description}</span></p>
          <p>Duration - <span>{duration} hours</span></p>
          <p>Price - <span>${price}</span></p>
        </div>

        <Link to={`/video-lessons/${id}`}>
          <h2>Lectures</h2>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;

