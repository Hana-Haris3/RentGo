import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router";
import "../../../css/user/viewProfie.css"

const UserProfile = () => {
  return (
    <div className="profile-page">
      <Container className="profile-container">

        {/* PROFILE HEADER */}
        <div className="profile-header text-center">
          <img
            src="/src/assets/profile.png"
            alt="Profile"
            className="profile-image"
          />
          <h4 className="profile-name">Charles Deo</h4>
        </div>

        {/* PERSONAL DETAILS */}
        <Card className="profile-card">
          <Card.Body>
            <h6 className="section-title">Personal Details</h6>

            <div className="details-grid">
              <p>Email :</p><p>gvsys@gmail.com</p>
              <p>Phone number :</p><p>676666666</p>
              <p>Date of birth :</p><p>15-3-2000</p>
              <p>Gender :</p><p>Male</p>
              <p>Address :</p><p>Avenue street, New York City</p>
            </div>
          </Card.Body>
        </Card>

        {/* VERIFICATION DETAILS */}
        <Card className="profile-card">
          <Card.Body>
            <h6 className="section-title">Verification Details</h6>

            <div className="details-grid">
              <p>Driving Licence Number :</p><p>7666546879806753223</p>
              <p>Driving Licence Validity :</p><p>15-8-2028</p>
              <p>Aadhaar Number :</p><p>56587687980988754</p>

              <p>Driving Licence :</p>
              <Button size="sm" className="view-btn">View</Button>

              <p>Aadhaar :</p>
              <Button size="sm" className="view-btn">View</Button>
            </div>
          </Card.Body>
        </Card>

        {/* ACTION BUTTONS */}
        <div className="profile-actions">
          <Button as={Link} to="/user/deleteaccount" className="delete-btn">Delete Account</Button>
          <Button as={Link} to="/user/profile/editprofile" className="edit-btn">Edit your profile</Button>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;
