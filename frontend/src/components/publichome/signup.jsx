import React, { useState } from "react";
import '../../../css/root.css'
import "../../../css/publicHome/signup.css";
import { Form } from "react-router";


export default function SignUp() {
  const [profileImage, setProfileImage] = useState(null);
 

  const handleProfileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Form method="post" encType="multipart/form-data" className="signup-form"> 
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Create Your Account</h2>

        <div className="profile-section">
          
          <label htmlFor="profileUpload" className="profile-circle">
            {/* {profileImage ? (
              <img src={profileImage} alt="Profile" />
            ) : ( */}
              <span className="profile-icon">👤</span>
            {/* )} */}
          </label>
          <input
            id="profileUpload"
            type="file"
            accept="image/*"
            onChange={handleProfileChange}
            className="hidden-input"
            required
          />
        </div>

          <div className="left">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="password" placeholder="Password" required />

   

            <input type="text" placeholder="Gender" required />
            <input type="text" placeholder="Address" required />
          </div>

          <div className="right">
            <input type="text" placeholder="Driving Licence Number" required />

            <label>Driving Licence Validity</label>
            <div className="dob-row">
              <select required>
                <option>DD</option>
              </select>
              <select required>
                <option>MM</option>
              </select>
              <select required>
                <option>YYYY</option>
              </select>
            </div>

            <input type="text" placeholder="Aadhaar Number" required />

            <label>Upload Driving Licence</label>
            <input type="file" accept="image/*" />

            <label>Upload Aadhaar</label>
            <input type="file" accept="image/*" />

            <button className="create-btn">Create</button>
          </div>
      </div>
    </div>
    </Form>
  );
}
