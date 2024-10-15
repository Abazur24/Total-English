import { useContext, useState } from "react";
import "./dashboardPage.scss";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "../../components/sidebar/Sidebar";
import Profile from "../../components/profile/Profile";
import UserCourses from "../../components/userCourses/UserCourses";
import UpdateProfile from "../../components/updateProfile/UpdateProfile";
import FullCalendar from "../../components/calendar/FullCalendar";

const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile"); // Default to "My Courses"

  // Function to update the active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    // Assuming logic for currentUser will be updated later
    currentUser && (
      <div className="dashboard-page">
        <div className="sidebar-content">
          <Sidebar onTabChange={handleTabChange} />
        </div>
        <div className="dashboard-content">
          {activeTab === "profile" && <Profile />}
          {activeTab === "update-profile" && <UpdateProfile />}
          {activeTab === "courses" && <UserCourses />}
          {activeTab === "calendar" && <FullCalendar />}
        </div>
      </div>
    )
  );
};

export default DashboardPage;

