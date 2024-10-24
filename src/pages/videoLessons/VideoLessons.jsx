import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Lectures } from "../../lib/course"; 
import "./videoLessons.scss";

const VideoLessons = () => {
  const { cid } = useParams();
  const courseLectures = Lectures.filter(
    (lecture) => lecture.courseID === parseInt(cid)
  );

  return (
  
    <div className="lessons">
      <div className="left-box">
        <VideoPlayer
          videoSrc={courseLectures[0].video.videoURL}
          title={courseLectures[0].video.title}
        />
      </div>
      <div className="right-block">
        {courseLectures.map((lect) => (
          <div key={lect.id}>
            <Lesson
              title={lect.video.title}
              cid={lect.courseID}
              vid={lect.id}
              duration={lect.video.duration}
              videoURL={lect.video.videoURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// VideoCard component
const Lesson = ({ title, videoURL, duration, cid, vid }) => {
  // Function to format video duration (assuming it's in seconds)
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="video-card">
      {/* <img src={videoURL} alt="Video Snapshot" style={styles.snapshot} /> */}
      <video src={videoURL} className="video-snapshot"></video>
      <div className="video-content">
        <h4 className="video-title">{title}</h4>
        <p className="video-duration">Duration: {formatDuration(duration)}</p>
      </div>
    </div>
    
  );
};

// const VideoPlayer = ({ videoSrc, width = "640px", height = "360px" }) => {
const VideoPlayer = ({ videoSrc, title }) => {
  const videoRef = useRef(null);

  return (
    <div className="video-box">
    <div style={{ textAlign: "center" }}>
      {/* Video element */}
      <video ref={videoRef} width={"95%"} height={""} controls>
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      <h3 className="main-video-title">{title}</h3>
    </div>
    </div>
  );
};



export default VideoLessons;
