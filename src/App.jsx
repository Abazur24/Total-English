import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequiredAuthLayout } from "./layouts/Layout";
import LandingPage from "./pages/landingPage/LandingPage";
import TestYourEnglish from './pages/testYourEnglish/TestYourEnglish';  // Import the new page
import SignupPage from "./pages/signupPage/SignupPage";
import LoginPage from "./pages/loginPage/LoginPage";
import CoursesPage from "./pages/coursesPage/CoursesPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import QuizzesPage from "./pages/quizzesPage/QuizzesPage";
import VcPage from "./pages/VcPage/VirtualClassroom";
import FinancePage from "./pages/financePage/FinancePage";
import SalesPage from "./pages/salesPage/SalesPage";
import HumanresoursesPage from "./pages/humanresoursesPage/HumanresoursesPage";
import LawyersPage from "./pages/lawyersPage/LawyersPage";
import ItPage from "./pages/itPage/ItPage";
import AcademicEnglishPage from "./pages/courses/AcademicEnglishPage";
import BusinessEnglishPage from "./pages/courses/BusinessEnglishPage";
import GeneralEnglishPage from './pages/courses/GeneralEnglishPage';
import EnglishForTravellingPage from './pages/courses/EnglishForTravellingPage';
import EnglishForChildrenPage from './pages/courses/EnglishForChildrenPage';
import NotFoundPage from './pages/notFound/NotFoundPage';  // Import the NotFoundPage
import AllCourses from "./pages/allCourses/AllCourses";
import VideoLessons from "./pages/videoLessons/VideoLessons";
import {pages, ProfCoursePages} from "./components/profCoursePages/ProfCoursePages";


// Define the router with all routes
function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Main layout and route
      element: <Layout />,
      children: [
        { path: "/", element: <LandingPage /> }, // Landing page
        { path: "/test-your-english", element: <TestYourEnglish /> }, // New Test Your English page
        { path: "/dashboard", element: <DashboardPage /> }, // Dashboard
        { path: "/login", element: <LoginPage /> }, // Login
        { path: "/signup", element: <SignupPage /> }, // Signup
        { path: "/courses", element: <CoursesPage /> }, // Courses page
        { path: "/quizzes", element: <QuizzesPage /> }, // Quizzes
        { path: "/virtual-classroom", element: <VcPage /> }, // Virtual Classroom
        { path: "/video-lessons", element: <AllCourses /> },
        { path: "/healthcare", element: <ProfCoursePages {...pages.healthcarePage} />,}, // Healthcare course
        { path: "/academic", element: <AcademicEnglishPage /> }, // Academic English course
        { path: "/business", element: <BusinessEnglishPage /> }, // Business English course
        { path: "/general-english", element: <GeneralEnglishPage /> }, // General English course
        { path: "/english-for-travelling", element: <EnglishForTravellingPage />}, // English for Travelling course
        { path: "/english-for-children", element: <EnglishForChildrenPage /> }, // English for Children course
        { path: "/finance", element: <ProfCoursePages {...pages.finance} /> },
        { path: "/sales", element: <ProfCoursePages {...pages.sales} /> },
        { path: "/lawyers", element: <ProfCoursePages {...pages.lawyers} /> },
        { path: "/it", element: <ProfCoursePages {...pages.ItPage} /> },
        { path: "/humanresourses", element: <ProfCoursePages {...pages.HumanresoursesPage} />},
        { path: "*", element: <NotFoundPage /> }, // 404 page for unknown routes
      ],
    },
    { path: "/", element: <RequiredAuthLayout />,
      children: [
        { path: "/dashboard", element: <DashboardPage />},
        { path: "/video-lessons/:id", element: <VideoLessons /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;