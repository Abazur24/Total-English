import React, { useState } from 'react';
import './aiAssistantPage.scss';

const AiAssistantPage = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Handle opening/closing of the chat window
  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  // Handle sending messages
  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Add user message to chat
    setMessages([...messages, { text: userInput, sender: 'user' }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I'm here to help! How can I assist you?", sender: 'ai' },
      ]);
    }, 1000);

    setUserInput(''); // Clear input field
  };

  return (
    <div className="ai-assistant-page">
      <h1>AI Assistant</h1>
      <p>Our AI Assistant is here to help you with your English language learning. Ask any questions you have!</p>
      <button className="chat-button" onClick={toggleChat}>
        {isChatOpen ? 'Close Chat' : 'Chat with AI'}
      </button>

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => (e.key === 'Enter' ? handleSendMessage() : null)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistantPage;