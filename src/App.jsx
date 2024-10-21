import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequiredAuthLayout } from "./layouts/Layout";
import LandingPage from "./pages/landingPage/LandingPage";
import TestYourEnglish from './pages/testYourEnglish/TestYourEnglish';
import SignupPage from "./pages/signupPage/SignupPage";
import LoginPage from "./pages/loginPage/LoginPage";
import CoursesPage from "./pages/coursesPage/CoursesPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import QuizzesPage from "./pages/QuizzesPage/QuizzesPage";
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
import NotFoundPage from './pages/notFound/NotFoundPage'; 
import AllCourses from "./pages/allCourses/AllCourses";
import VideoLessons from "./pages/videoLessons/VideoLessons";
import AboutUsPage from "./pages/aboutUs/AboutUsPage"; 
import AiAssistantPage from './pages/aiAssistant/AiAssistantPage'; // <-- Make sure to import this
import { pages, ProfCoursePages } from "./components/profCoursePages/ProfCoursePages";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Layout />,
      children: [
        { path: '/', element: <LandingPage /> }, 
        { path: '/test-your-english', element: <TestYourEnglish /> },
        { path: '/dashboard', element: <DashboardPage /> }, 
        { path: '/login', element: <LoginPage /> }, 
        { path: '/signup', element: <SignupPage /> },
        { path: '/courses', element: <CoursesPage /> }, 
        { path: '/quizzes', element: <QuizzesPage /> }, 
        { path: '/virtual-classroom', element: <VcPage /> }, 
        { path: '/video-lessons', element: <AllCourses /> },
        { path: '/video-lessons/:id', element: <VideoLessons /> },
        { path: '/healthcare', element: <ProfCoursePages {...pages.healthcarePage} /> }, 
        { path: '/academic', element: <AcademicEnglishPage /> },
        { path: '/business', element: <BusinessEnglishPage /> }, 
        { path: '/general-english', element: <GeneralEnglishPage /> }, 
        { path: '/english-for-travelling', element: <EnglishForTravellingPage /> }, 
        { path: '/english-for-children', element: <EnglishForChildrenPage /> }, 
        { path: '/finance', element: <ProfCoursePages {...pages.finance} /> },
        { path: '/sales', element: <ProfCoursePages {...pages.sales}/>  },
        { path: '/lawyers', element: <ProfCoursePages {...pages.lawyers}/> },
        { path: '/it', element: <ProfCoursePages {...pages.ItPage}/> },
        { path: '/humanresourses', element: <ProfCoursePages {...pages.HumanresoursesPage} /> },
        { path: '/about-us', element: <AboutUsPage /> }, 
        { path: '/ai-assistant', element: <AiAssistantPage /> }, // <-- AI Assistant page route
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
