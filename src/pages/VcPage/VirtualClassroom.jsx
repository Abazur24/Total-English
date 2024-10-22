import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client"; // Import socket.io-client for real-time communication
import { JitsiMeeting } from "@jitsi/react-sdk"; // Import Jitsi for video conferencing
import "./virtualClassroom.scss"; // Your existing SCSS file
import virtualClassroomImage from "../../assets/images/virtualclassroom2.png"; // Import the image

const SOCKET_SERVER_URL = "http://localhost:5000"; // Replace with your server's URL if different

const VirtualClassroom = () => {
  const [isVideoStarted, setIsVideoStarted] = useState(false);
  const [roomId, setRoomId] = useState("total-english-room"); // Static room for the class or dynamic if needed
  const [socket, setSocket] = useState(null);

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

  return (
    <div className="virtual-classroom-page">
      <h1>Welcome to the Virtual Classroom</h1>
      <p>Join the live class by starting the video below.</p>

      {/* Conditionally render the image */}
      {!isVideoStarted && (
        <div className="virtual-classroom-image">
          <img src={virtualClassroomImage} alt="Virtual Classroom" />
        </div>
      )}
      
      <button className="start-video-button" onClick={startVideoConference}>
        Start Video Conference
      </button>

      {isVideoStarted && (
        <div className="video-conference">
          <JitsiMeeting
            roomName={roomId} // Room ID for the classroom
            configOverwrite={{
              startWithAudioMuted: true, // Video starts muted for audio
              disableModeratorIndicator: true, // Disable moderator label
            }}
            interfaceConfigOverwrite={{
              TOOLBAR_BUTTONS: [
                "microphone",
                "camera",
                "chat",
                "desktop", // Enables screen sharing
                "participants-pane",
              ],
            }}
            getIFrameRef={(iframeRef) => {
              iframeRef.style.height = "600px"; // Set the height of the video
              iframeRef.style.width = "100%"; // Set the width to 100%
            }}
          />
        </div>
      )}
    </div>
  );
};

export default VirtualClassroom;
