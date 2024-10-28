import { useState, useEffect, useContext } from "react";
import * as Yup from 'yup';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./updateProfile.scss";
import config from "../../config/config";

const UpdateProfile = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [errs, setErrs] = useState({});
  const [imgErr, setImgErr] = useState("");
  const [formErr, setFormErr] = useState("");

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
      console.log('Error during logout:', error.message);
    }
  }

  const handleInputChange = (e) => {
    // validateForm();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErr('');
    
    const updatedProfile = {
      id: currentUser.user.id,
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    try {
      if(Object.keys(errs).length !== 0){
        throw new Error('Form Data is not valid!');
      }
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
      setFormErr(err.message)
    }
  };

  const savePhoto = async (e) => {
    e.preventDefault();
    const avatarFormData = new FormData();
    avatarFormData.append('file', avatar);

    try {
      if(avatar){
        const res = await fetch(
          `${config.apiUrl}/api/upload-image/${currentUser?.user?.id}`,
          {
            method: "PUT",
            body: avatarFormData,
            headers: {
              'Authorization': `Bearer ${currentUser.token}`,
            },
          }
        );
        
        if (!res.ok) {

          const errorData = await res.text();
          throw new Error("Failed to save profile photo");
        }
        
        /* save photo successfully */
        const curData = JSON.parse(localStorage.getItem('user'));
        const resData = await res.json();
        curData.user.image_url = resData.image_url
        localStorage.setItem('user',JSON.stringify(curData))
        updateUser(curData)
        setIsSaved(true);

      }else{
        alert('Please select the profile photo first.')
      }

    } catch (error) {
      setImgErr(error.message)
    }
  }

  // validate form data
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 char long'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'At least 6 chars')
              .matches(/[a-z]/, 'at least one lower case letter')
              .matches(/[A-Z]/, 'at least one upper case letter')
              .matches(/[0-9]/, 'at least one digit')
              .matches(/[!/_#.,*]/, 'at least one one special char')
  });

  const validateForm = async() => {
    try {

      setErrs({});
      await validationSchema.validate(formData, {abortEarly: false});
      
    } catch (validationErrors) {
      const errMsgs = {};
      validationErrors.inner.forEach((error) => {
        errMsgs[error.path] = error.message;
      });
      setErrs(errMsgs);
    }
  }

  useEffect(() => {
    if (currentUser?.user?.image_url) {
      setAvatar({ image_url: currentUser?.user?.image_url });
    }
  }, [currentUser?.user?.image_url]);
  
  useEffect(() => {
    validateForm();
  }, [formData])

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
            <span className="form-err">{errs.name}</span>
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
            <span className="form-err">{errs.email}</span>
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
            <span className="form-err">{errs.password}</span>
          </div>
          <button type="submit">Update</button>
        </form>

        <div className="sideContainer">
          <form id="avatar-form" onSubmit={savePhoto}>
            <label htmlFor="img-selector" id="img-selector-label">
              <img
                src={
                   avatar
                    ? avatar.preview || avatar.image_url
                    : "/noavatar.jpg"
                }
                alt="avatar"
                className="avatar"
              />
            </label>
            <span className="img-err">{imgErr && imgErr}</span>
            <input
              type="submit"
              value="Save"
              id="save-btn"
              className={isSaved ? "saved" : ""}
            />
            <input
              type="file"
              onChange={handleChangeAvatar}
              className="mb-2 img-selector"
              id="img-selector"
            />
          </form>
        </div>
        <span className="form-submit-err">{formErr}</span>
      </div>
    </div>
  );
};

export default UpdateProfile;
