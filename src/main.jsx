import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './context/AuthContext.jsx';
import "react-big-calendar/lib/css/react-big-calendar.css";
// import ErrorBoundary from './components/ErrorBoundary';  // Import the ErrorBoundary

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <ErrorBoundary>  Wrap the App in ErrorBoundary */}
        <App />
      {/* </ErrorBoundary> */}
    </AuthContextProvider>
  </React.StrictMode>
);

