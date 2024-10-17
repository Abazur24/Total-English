import React, { useState, useRef, useEffect } from 'react';
import './aiAssistantPage.scss';

const AiAssistantPage = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Reference to the chat messages container for manual scroll control
  const chatMessagesRef = useRef(null);

  // Predefined AI responses for specific questions
  const getAiResponse = (input) => {
    const lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput.includes('hello')) {
      return 'Hi, welcome to Total English AI Assistant!';
    } else if (lowerCaseInput.includes('what can you do')) {
      return 'I can help you to practice your English, improve your spelling and writing skills.';
    } else if (lowerCaseInput.includes('can you help me to improve my pronunciation')) {
      return "I'm afraid I won't be able to help you with pronunciation, but that is coming soon to our Total English portal.";
    } else if (lowerCaseInput.includes('give me some tips to practice my english')) {
      return 'To practice your English you can use Total English AI Assistant, watch Total English video lessons, use our Virtual Classrooms for live English Conversation Clubs, watch films or read books in English.';
    } else {
      return 'I am here to assist you with English learning. You can ask me anything related to improving your English skills!';
    }
  };

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
      const aiResponse = getAiResponse(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiResponse, sender: 'ai' },
      ]);
    }, 1000);

    setUserInput(''); // Clear input field
  };

  // Scroll to the bottom of the chat messages
  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  // Automatically scroll to the bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="ai-assistant-page">
      <h1>AI Assistant</h1>
      <p>Our AI Assistant is here to help you with your English language learning. Ask any questions you have!</p>
      <button className="chat-button" onClick={toggleChat}>
        {isChatOpen ? 'Close Chat' : 'Chat with AI'}
      </button>

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-messages" ref={chatMessagesRef}>
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