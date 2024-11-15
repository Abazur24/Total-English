import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Lectures } from "../../lib/course";
import "./videoLessons.scss";
const VideoLessons = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filteredLects, setFilteredLects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { cid } = useParams();

  useEffect(() => {
    const courseLectures = Lectures.filter(
      (lecture) => lecture.courseID === parseInt(cid)
    );
    setFilteredLects(courseLectures);
    setSelectedVideo(courseLectures[0] || null);
  }, [cid]);

  return (
    <div className="lessons">
      <div className="left-block">
        {selectedVideo && (
          <VideoPlayer
            key={selectedVideo?.id} // force re-render
            src={selectedVideo?.video?.videoURL}
            title={selectedVideo?.video?.title}
          />
        )}
      </div>
      <div className="right-block">
        <h3>{filteredLects[0]?.title||"List of Videos:"}</h3>
        {filteredLects.map((lect) => (
          <div key={lect?.id} onClick={() => setSelectedVideo(lect)}>
            <Lesson
              title={lect?.video?.title}
              cid={lect?.courseID}
              vid={lect?.id}
              duration={lect?.video?.duration}
              videoURL={lect?.video?.videoURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Lesson = ({ title, videoURL, duration }) => {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  return (
    <div className="video-card">
      <video src={videoURL} className="video-snapshot" />
      <div className="video-content">
        <h4 className="video-title">{title}</h4>
        <p className="video-duration">Duration: {formatDuration(duration)}</p>
      </div>
    </div>
  );
};

const VideoPlayer = ({ src, title }) => {
  const videoRef = useRef(null);
  return (
    <div className="video-box">
    <div style={{ textAlign: "center" }}>
      <video ref={videoRef} width="100%" height="600px" controls preload="auto">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="main-video-title">{title}</h3>
    </div>
    </div>
  );
};
export default VideoLessons;
