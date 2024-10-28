import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client"; // socket.io-client for real-time communication
import { JitsiMeeting } from "@jitsi/react-sdk"; // Jitsi for video conferencing
import "./virtualClassroom.scss"; 
import virtualClassroomImage from "../../assets/images/virtualclassroom2.png"; // Import the image

const SOCKET_SERVER_URL = "http://localhost:5000"; // Replace with the server's URL if different

const VirtualClassroom = () => {
  const [isVideoStarted, setIsVideoStarted] = useState(false);
  const [roomId, setRoomId] = useState("total-english-room"); // Static room for the class or dynamic
  const [socket, setSocket] = useState(null);
  const videoRef = useRef(null); // a reference created to the video container for fullscreen

  // Set up socket connection
  useEffect(() => {
    const socketInstance = io(SOCKET_SERVER_URL);
    setSocket(socketInstance);

    // Clean up socket connection on component unmount
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  // Start the Jitsi meeting
  const startVideoConference = () => {
    setIsVideoStarted(true);
  };

  // Toggle fullscreen mode
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="virtual-classroom-page">
      {!isVideoStarted && (
        <>
          <h1>Welcome to the Virtual Classroom</h1>
          <p>Join the live class by starting the video below.</p>

          <div className="virtual-classroom-image">
            <img src={virtualClassroomImage} alt="Virtual Classroom" />
          </div>

          <button className="start-video-button" onClick={startVideoConference}>
            Start Video Conference
          </button>
        </>
      )}

      {isVideoStarted && (
        <div className="video-conference" ref={videoRef}>
          <JitsiMeeting
            roomName={roomId} // Room ID for the classroom
            configOverwrite={{
              startWithAudioMuted: true, // Video starts muted for audio
              disableModeratorIndicator: true, // moderator label disabled
            }}
            interfaceConfigOverwrite={{
              TOOLBAR_BUTTONS: [
                "microphone",
                "camera",
                "chat",
                "desktop", // screen sharing
                "participants-pane",
                "fullscreen", 
              ],
              // Customized fullscreen button looks and actions.
            }}
            getIFrameRef={(iframeRef) => {
              iframeRef.style.height = "600px"; // the height of the video
              iframeRef.style.width = "100%"; // the width to 100%
            }}
          />
          <button className="fullscreen-button" onClick={toggleFullScreen}>
            Toggle Fullscreen
          </button>
        </div>
      )}
    </div>
  );
};

export default VirtualClassroom;
