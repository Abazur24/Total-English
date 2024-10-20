import React, { useState, useRef, useEffect } from 'react';
import './aiAssistantPage.scss';
import totalEnglishLogo from '../../assets/images/TotalEnglishLogo.svg';  // Import the logo
import ContactFormModal from '../../components/ContactFormModal'; // Import the modal

const AiAssistantPage = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  // Handle opening/closing of the Contact Us modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Reference to the chat messages container for manual scroll control
  const chatMessagesRef = useRef(null);

  // Predefined AI responses for specific questions
  const getAiResponse = (input) => {
    const lowerCaseInput = input.toLowerCase();  // Convert input to lowercase to make it case-insensitive
  
    // Match keywords for various questions
    if (lowerCaseInput.includes('hello')) {
      return 'Hi, welcome to Total English AI Assistant!';
    } else if (lowerCaseInput.includes('what') && lowerCaseInput.includes('can') && lowerCaseInput.includes('do')) {
      return 'I can help you to practice your English, improve your spelling and writing skills.';
    } else if (lowerCaseInput.includes('pronunciation')) {
      return "I'm afraid I won't be able to help you with pronunciation, but that is coming soon to our Total English portal.";
    } else if (lowerCaseInput.includes('tips') && lowerCaseInput.includes('practice')) {
      return 'To practice your English you can use Total English AI Assistant, watch Total English video lessons, use our Virtual Classrooms for live English Conversation Clubs, watch films or read books in English.';
    } else if (lowerCaseInput.includes('english for professionals')) {
      return 'This course is designed to learn or improve English language skills in a specific sector or industry, from Healthcare to IT. Each course is tailored to specific needs and most common terminology used in a specific sector.';
    } else if (lowerCaseInput.includes('improve') && lowerCaseInput.includes('vocabulary')) {
      return 'You can improve your vocabulary by reading books, articles, and watching English content. Use flashcards, word games, and Total English quizzes to build your vocabulary daily.';
    } else if (lowerCaseInput.includes('how often') && lowerCaseInput.includes('practice english')) {
      return 'Try to practice at least 20-30 minutes a day. Consistency is key to improving your English skills!';
    } else if (lowerCaseInput.includes('resources') && lowerCaseInput.includes('practice english')) {
      return 'You can use Total English video lessons, conversation clubs, AI Assistant, and watch English movies or read books to improve.';
    } else if (lowerCaseInput.includes('learn') && lowerCaseInput.includes('quickly')) {
      return 'Learning English takes time and practice, but with regular exposure and motivation, you can make great progress!';
    } else if (lowerCaseInput.includes('correct') && lowerCaseInput.includes('grammar')) {
      return 'Of course! Feel free to write a sentence, and I can help you correct your grammar.';
    } else if (lowerCaseInput.includes('common') && lowerCaseInput.includes('grammar mistakes')) {
      return 'Common mistakes include misusing verb tenses, subject-verb agreement errors, and using the wrong prepositions. Practice is key to mastering these!';
    } else if (lowerCaseInput.includes('improve') && lowerCaseInput.includes('listening skills')) {
      return 'You can improve your listening skills by watching English content, using our video lessons, or listening to podcasts and music.';
    } else if (lowerCaseInput.includes('help') && lowerCaseInput.includes('writing')) {
      return 'Yes, I can give you feedback on your writing. Just type something, and I will assist you with grammar, spelling, and sentence structure.';
    } else if (lowerCaseInput.includes('practice speaking english')) {
      return 'Join our Total English Conversation Clubs in the Virtual Classroom or practice with friends or other learners. Speaking is a great way to improve!';
    } else if (lowerCaseInput.includes('fun') && lowerCaseInput.includes('practice english')) {
      return 'You can play word games, watch your favorite TV shows in English, or join Total English quizzes and challenges!';
    } else if (lowerCaseInput.includes('learn grammar')) {
      return 'Start with the basics like verb tenses, then gradually move to more complex rules. Total English quizzes and lessons can help test your understanding.';
    } else if (lowerCaseInput.includes('common') && lowerCaseInput.includes('phrases')) {
      return 'Here are a few: "How’s it going?" (informal greeting), "Could you help me with...?" (asking for help), "I’m looking forward to..." (anticipating something).';
    } else if (lowerCaseInput.includes('check') && lowerCaseInput.includes('english level')) {
      return 'You can take the "Test Your English" quiz on Total English to assess your level and see where you need to improve.';
    } else if (lowerCaseInput.includes('formal') && lowerCaseInput.includes('informal english')) {
      return 'Formal English is used in professional settings, while informal English is more casual and used with friends. Formal English uses proper grammar and vocabulary.';
    } else if (lowerCaseInput.includes('hardest') && lowerCaseInput.includes('learning english')) {
      return 'Many learners find pronunciation and grammar the hardest, but with practice, they become easier!';
    } else if (lowerCaseInput.includes('english-speaking cultures')) {
      return 'In English-speaking countries like the UK and US, there are traditions like afternoon tea and Thanksgiving, which are great cultural insights!';
    } else if (lowerCaseInput.includes('most common accent')) {
      return 'The most common accents are British (UK) and American (US), but there are many regional accents like Australian, Irish, and Canadian accents.';
    } else if (lowerCaseInput.includes('how long') && lowerCaseInput.includes('fluent in english')) {
      return 'It depends on how much you practice and your exposure to the language. Stay consistent, and you’ll see progress over time!';
    } else if (lowerCaseInput.includes('how can i enroll')) {
        return (
          <span>
            To enroll in any of our courses, you need to{' '}
            <button onClick={openModal} className="contact-manager-link styled-button">Contact Our Manager</button> {/* Open modal here */}
          </span>
        );
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
    <div className="entire-ai-assistant-page">
    <div className="ai-assistant-page">
      <h1>AI Assistant</h1>
      <p><b>Our AI Assistant is here to help you with your English language learning. Ask any questions you have!</b></p>
      <button className="chat-button" onClick={toggleChat}>
        {isChatOpen ? 'Close Chat' : (
          <>
            Chat with <img src={totalEnglishLogo} alt="Total English Logo" className="logo-in-button" /> AI
          </>
        )}
      </button>

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-messages" ref={chatMessagesRef}>
            {messages.map((message, index) => (
              <div key={index} className={`chat-message-wrapper ${message.sender}`}>
                <div className="message-label">
                  {message.sender === 'user' ? 'You' : (
                    <>
                      <img src={totalEnglishLogo} alt="Total English Logo" className="ai-logo" />
                      AI Assistant
                    </>
                  )}
                </div>
                <div className={`chat-message ${message.sender}`}>
                  {typeof message.text === 'string' ? message.text : message.text} {/* This will allow JSX responses */}
                </div>
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

      {/* Render Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    </div>
  );
};

export default AiAssistantPage;