import "./profile.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


function Profile() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      localStorage.removeItem("user");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log("Error during logout:", err);
    }
  };

  return (
    currentUser && (
      <div className="profile">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
            </div>
            <div className="info" style={{ textTransform: "capitalize" }}>
              <span>
                Avatar:
                <img src={currentUser?.user?.image_url || "noavatar.jpg"} alt="avatar" />
              </span>
              <span>
                Fullname: <b>{currentUser.user.name}</b>
              </span>
              <span>
                E-mail: <b>{currentUser.user.email}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
