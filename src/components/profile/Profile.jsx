import "./profile.scss";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";


function Profile() {

  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // Remove the JWT token from localStorage
      localStorage.removeItem("token");
  
      // Update the context to indicate the user is logged out
      updateUser(null);
  
      // Redirect to the home page
      navigate("/");
    } catch (err) {
      console.log('Error during logout:', err);
    }
  };
  
  
  
  return (
   currentUser &&
<div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={"noavatar.jpg"} alt="avatar" />
            </span>
            <span>
              Username: <b>Test Name</b>
            </span>
            <span>
              E-mail: <b>Test Email</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          
        </div>
      </div>      
    </div>
  
  );
}

export default Profile;