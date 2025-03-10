import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from './iiitk1logo.jpg';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Name",
    rollNo: "College Roll no", 
    email: "College mail",
    contactNo: "Mobile no"
  });

  const [tempData, setTempData] = useState({ ...profileData });

  const handleEdit = () => {
    setIsEditing(true);
    setTempData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...tempData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...profileData });
    setIsEditing(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Lost & Found Logo" />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/lost">Lost</Link>
          <Link to="/report-lost">Report Lost</Link>
          <Link to="/found">Found</Link>
          <Link to="/report-found">Report Found</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login" className="auth-button">
            Login/Sign Up
          </Link>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-box">
          <h2>Profile</h2>

          <div className="form-group">
            <label>Name:</label>
            {isEditing ? (
              <input
                type="text"
                value={tempData.name}
                onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
              />
            ) : (
              <p>{profileData.name}</p>
            )}
          </div>

          <div className="form-group">
            <label>Roll No:</label>
            {isEditing ? (
              <input
                type="text" 
                value={tempData.rollNo}
                onChange={(e) => setTempData({ ...tempData, rollNo: e.target.value })}
              />
            ) : (
              <p>{profileData.rollNo}</p>
            )}
          </div>

          <div className="form-group">
            <label>College Email:</label>
            {isEditing ? (
              <input
                type="email"
                value={tempData.email}
                onChange={(e) => setTempData({ ...tempData, email: e.target.value })}
              />
            ) : (
              <p>{profileData.email}</p>
            )}
          </div>

          <div className="form-group">
            <label>Contact No:</label>
            {isEditing ? (
              <input
                type="tel"
                value={tempData.contactNo}
                onChange={(e) => setTempData({ ...tempData, contactNo: e.target.value })}
              />
            ) : (
              <p>{profileData.contactNo}</p>
            )}
          </div>

          <div className="button-group">
            {!isEditing && (
              <button onClick={handleEdit}>Edit Profile</button>
            )}
            {isEditing && (
              <>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
