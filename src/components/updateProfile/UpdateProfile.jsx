import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./updateProfile.scss";


const UpdateProfile = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(null);

  const [formData, setFormData] = useState({
    username: currentUser?.username || "Test Name",
    email: currentUser?.email || "Test Email",
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
      name: formData.username, 
      email: formData.email,   
    };
  
    try {
      const res = await fetch('http://localhost:52872/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to update profile');
      }
  
      const data = await res.json();
      console.log('Profile updated successfully:', data);
      navigate('/dashboard');
  
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };
  

  return (
    <div className='profileUpdatePage'>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
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
          <img src={"/noavatar.jpg"} alt="" className="avatar" />
          <input type="file" onChange={handleChangeAvatar} className="mb-2" />
          {avatar && (
            <img
              src={avatar.preview}
              alt="Preview"
              className="preview"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

 