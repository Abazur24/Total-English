import { Lectures } from '../../lib/course'; // Fixed typo
import './videoLessons.scss';

const VideoLessons = ({ courseID }) => { 
  // Find the course by courseID
  const lecture = Lectures.find(lecture => lecture.courseID === parseInt(courseID));

  return (
    <div className='container'>
      {lecture ? (
        <>
          <h2>{lecture.title} Video Lessons</h2>
          <div className="video-item">
            <h4>{lecture.video.title}</h4>
            <p>Duration: {lecture.video.duration} minutes</p>
            <a href={lecture.video.videoURL} target="_blank" rel="noopener noreferrer">Watch Video</a>
          </div>
        </>
      ) : (
        <p>No video found for this course.</p>
      )}
    </div>
  );
};

export default VideoLessons;


