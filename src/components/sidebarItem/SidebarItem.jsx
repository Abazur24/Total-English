import { useNavigate } from "react-router-dom";
import "./sidebarItem.scss";

const SidebarItem = ({ icon: Icon, label, onClick}) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-item" onClick={onClick}>
      <Icon className="sidebar-item-icon" />
      <span className="sidebar-item-label">{label}</span>
    </div>
  );
};

export default SidebarItem;

