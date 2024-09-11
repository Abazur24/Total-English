import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AIAssistant from './pages/AIAssistant';
import VideoLessons from './pages/VideoLessons';
import VirtualClassroom from './pages/VirtualClassroom';
import Quizzes from './pages/Quizzes';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ai-assistant" element={<ProtectedRoute><AIAssistant /></ProtectedRoute>} />
          <Route path="/video-lessons" element={<ProtectedRoute><VideoLessons /></ProtectedRoute>} />
          <Route path="/virtual-classroom" element={<ProtectedRoute><VirtualClassroom /></ProtectedRoute>} />
          <Route path="/quizzes" element={<ProtectedRoute><Quizzes /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;