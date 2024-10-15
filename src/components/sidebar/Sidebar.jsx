import { Calendar, Compass, Layout, User } from "lucide-react" 
import "./sidebar.scss";
import SidebarItem from "../sidebarItem/SidebarItem";
import { BarChart, List } from "lucide-react";

const studentRoutes = [
  {
    icon: Compass,
    label: "My Profile",
    tab: "profile",
  },
  {
    icon: User,
    label: "Update",
    tab: "update-profile",
  },
  {
    icon: Layout,
    label: "My Courses",
    tab: "courses",
  },
  {
    icon: Calendar,
    label: "Calendar",
    tab: "calendar"
  }
];

// const teacherRoutes = [
//   {
//     icon: List,
//     label: "Courses",
//     href: "/teacher/courses",
//   },
//   {
//     icon: BarChart,
//     label: "Analytics",
//     href: "/teacher/analytics",
//   },
//   {
//     icon: Compass,
//     label: "Analytics",
//     href: "/courses/analytics",
//   }
// ];

const Sidebar = ({ onTabChange }) => {
  // Can switch routes based on user role or other conditions
  const routes = studentRoutes; // or teacherRoutes for teachers

  return (
    <div className="sidebar">
     {routes.map((route) => (
        <SidebarItem 
            key={route.tab} 
            icon={route.icon}
            label={route.label}
            onClick={() => onTabChange(route.tab)} // Pass tab value to onTabChange
        />))}
    </div>
  );
};

export default Sidebar;

