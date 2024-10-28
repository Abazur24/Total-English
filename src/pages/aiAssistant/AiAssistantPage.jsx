import React, { useState, useRef, useEffect } from 'react';
import './aiAssistantPage.scss';
import totalEnglishLogo from '../../assets/images/TotalEnglishLogo.svg';
import ContactFormModal from '../../components/ContactFormModal';

const AiAssistantPage = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const chatMessagesRef = useRef(null);

  const getAiResponse = (input) => {
    const lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput.includes('hello')) {
      return 'Hi, welcome to Total English AI Assistant!';
    } else if (lowerCaseInput.includes('affect') && lowerCaseInput.includes('effect')) {
      return "Certainly! 'Affect' is usually a verb meaning 'to influence,' while 'effect' is mostly a noun that means 'the result of a change.'";
    } else if (lowerCaseInput.includes('pronounce') && lowerCaseInput.includes('entrepreneur')) {
      return "The word 'entrepreneur' is pronounced as 'ahn-truh-pruh-NUR' in American English or 'on-truh-pruh-NUR' in British English.";
    } else if ((lowerCaseInput.includes('avoid') || lowerCaseInput.includes('writing')) && lowerCaseInput.includes('mistakes')) {
      return "Common mistakes include run-on sentences, misplaced commas, and inconsistent tense. Proofreading and practice can help!";
    } else if (lowerCaseInput.includes('ielts') && lowerCaseInput.includes('speaking')) {
      return "For IELTS speaking, practice common topics, speak clearly, and stay calm. Consistency is key to building confidence.";
    } else if (lowerCaseInput.includes('small talk') && (lowerCaseInput.includes('professional') || lowerCaseInput.includes('business'))) {
      return "In professional settings, small talk topics include the weather, current events, and weekend plans. Keep it light!";
    } else if (lowerCaseInput.includes('break') && lowerCaseInput.includes('ice')) {
      return "To 'break the ice' means to start a conversation to make everyone feel more relaxed.";
    } else if (lowerCaseInput.includes('what') && lowerCaseInput.includes('can') && lowerCaseInput.includes('do')) {
      return 'I can help you with English language practice, grammar, and vocabulary building!';
    } else if (lowerCaseInput.includes('pronunciation')) {
      return "I'm not able to assist with pronunciation directly, but keep an eye out for upcoming features!";
    } else if (lowerCaseInput.includes('practice') && (lowerCaseInput.includes('tips') || lowerCaseInput.includes('ideas'))) {
      return 'Practice by using Total English resources, watching English content, and joining conversation clubs in the Virtual Classroom!';
    } else if (lowerCaseInput.includes('english for professionals')) {
      return 'Our courses for professionals are tailored for specific sectors like Healthcare and IT, focusing on essential terminology.';
    } else if (lowerCaseInput.includes('vocabulary')) {
      return 'Expand your vocabulary with daily practice, flashcards, reading, and Total English quizzes.';
    } else if (lowerCaseInput.includes('how often') && lowerCaseInput.includes('practice')) {
      return 'Try practicing for at least 20-30 minutes each day for steady progress.';
    } else if (lowerCaseInput.includes('resources') && lowerCaseInput.includes('practice')) {
      return 'Use Total English resources, video lessons, AI Assistant, and watch English content to build your skills.';
    } else if (lowerCaseInput.includes('quickly') && lowerCaseInput.includes('learn')) {
      return 'Consistency is key to quick progress! Practice, exposure, and engagement help build fluency.';
    } else if (lowerCaseInput.includes('grammar')) {
      return 'If you have specific questions about grammar, feel free to ask!';
    } else if (lowerCaseInput.includes('common') && lowerCaseInput.includes('grammar')) {
      return 'Common grammar errors include verb tense mistakes and incorrect subject-verb agreement. Careful practice can reduce these errors!';
    } else if (lowerCaseInput.includes('listening skills')) {
      return 'Improve your listening by watching English content, using our video lessons, or listening to podcasts and music.';
    } else if (lowerCaseInput.includes('writing')) {
      return 'I can assist with writing tips and grammar. Feel free to send in a sample sentence!';
    } else if (lowerCaseInput.includes('speaking')) {
      return 'Practice speaking in our Total English Virtual Classroom or with friends to improve your fluency and confidence!';
    } else if (lowerCaseInput.includes('fun') && lowerCaseInput.includes('practice')) {
      return 'Play word games, watch English shows, or take Total English quizzes to make learning enjoyable!';
    } else if (lowerCaseInput.includes('grammar rules') || lowerCaseInput.includes('learn grammar')) {
      return 'Start with basic grammar rules, then gradually work on more complex topics. Our quizzes are great for reinforcement!';
    } else if (lowerCaseInput.includes('phrases')) {
      return 'Common phrases include "How’s it going?" (informal greeting), "Could you help me with...?" (asking for help), and more.';
    } else if (lowerCaseInput.includes('check') && lowerCaseInput.includes('level')) {
      return 'Take our "Test Your English" quiz on Total English to see where you stand!';
    } else if (lowerCaseInput.includes('formal') && lowerCaseInput.includes('informal')) {
      return 'Formal English is used in professional settings, while informal English is more casual and used with friends.';
    } else if (lowerCaseInput.includes('hardest') && lowerCaseInput.includes('english')) {
      return 'Many learners find pronunciation and grammar challenging, but practice helps make them easier over time.';
    } else if (lowerCaseInput.includes('culture') || lowerCaseInput.includes('english-speaking countries')) {
      return 'In the UK and US, traditions like afternoon tea and Thanksgiving offer interesting cultural insights!';
    } else if (lowerCaseInput.includes('accent')) {
      return 'The most common accents are British (UK) and American (US), but there are many regional variations!';
    } else if (lowerCaseInput.includes('fluent') && lowerCaseInput.includes('english')) {
      return 'Fluency depends on practice and exposure. Stay consistent, and progress will come naturally over time!';
    } else if (lowerCaseInput.includes('enroll') || lowerCaseInput.includes('join')) {
      return (
        <span>
          To enroll in our courses, please{' '}
          <button onClick={openModal} className="contact-manager-link styled-button">
            Contact Our Manager
          </button>
        </span>
      );
    } else {
      return 'I am here to help with all your English learning needs. Ask me anything!';
    }
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    setMessages([...messages, { text: userInput, sender: 'user' }]);

    setTimeout(() => {
      const aiResponse = getAiResponse(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiResponse, sender: 'ai' },
      ]);
    }, 1000);

    setUserInput('');
  };

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="entire-ai-assistant-page">
      <div className="ai-assistant-page">
        <h1></h1>
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
                    {typeof message.text === 'string' ? message.text : message.text}
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

        <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default AiAssistantPage;