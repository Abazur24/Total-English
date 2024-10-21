import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./updateProfile.scss";
import config from "../../config/config";

const UpdateProfile = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const [formData, setFormData] = useState({
    name: currentUser?.user?.name || "",
    email: currentUser?.user?.email || "",
    password: "",
  });


  const navigate = useNavigate();

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('user');
      updateUser(null);
      navigate('/login');
    } catch (error) {
      console.log('Error during logout:', err);
    }
  }

  useEffect(() => {
    return () => {
      if (avatar) URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProfile = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    try {
      const res = await fetch(`${config.apiUrl}/api/update-profile`, {
        method: "PUT",
        body: JSON.stringify(updatedProfile),
        headers:{
          'Authorization': `Bearer ${currentUser.token}`
        }
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update profile");
      }
      
      /* after updating user profile */
      logout();

    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  const savePhoto = async (e) => {
    e.preventDefault();
    const avatarFormData = new FormData();
    avatarFormData.append('avatar', avatar);

    try {
      if(avatar){
        const res = await fetch(`${config.apiUrl}/savephoto`, {
          method: "POST",
          body: avatarFormData,
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        });
        
        if (!res.ok) {
          const errorData = await res.json();
          console.log('errorData:',errorData)
          throw new Error(errorData.message || "Failed to save profile photo");
        }
        
        /* save photo successfully */
        setIsSaved(true);
      }else{
        alert('Please select the profile photo first.')
      }

    } catch (error) {
      console.log('catch block')
      console.log(error)
    }
  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="name">name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>

        <div className="sideContainer">
          <form id="avatar-form" onSubmit={savePhoto}>
            <label htmlFor="img-selector" id="img-selector-label">
              <img src={avatar ? avatar.preview : "/noavatar.jpg"}
                alt="avatar" className="avatar" />
            </label>
            <input type="submit" value="Save" id="save-btn" className={isSaved? 'saved' :""}/>
            <input type="file" onChange={handleChangeAvatar}
              className="mb-2 img-selector" id="img-selector" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
