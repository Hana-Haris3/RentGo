import React from "react";
import {Link} from "react-router"
import { Container, Form, Button } from "react-bootstrap";
import "../../../css/admin/adminViewReview.css";

const AdminViewReview=()=> {
  return (
    <Container fluid className="review-page d-flex align-items-center justify-content-center">
      <Form method="post" className="review-card">

        
        <div className="review-header">
          <div className="avatar-circle">
            <span className="avatar-icon">👤</span>
          </div>

          <div className="user-info">
            <h2>Michael</h2>
            <p>ID : 12</p>
            <p>Email : abc@gmail.com</p>
            <p>Phone no : 4556646488</p>
          </div>
        </div>

        
        <div className="stars">
          ★ ★ ★ ★ ☆
        </div>

       
        <div className="review-box">
          Booking was quick and straightforward. The car was spotless and
          performed perfectly throughout the trip. Customer support was
          responsive and helpful.
        </div>

        {/* ACTION BUTTONS */}
        <div className="action-buttons">
          <Button type="submit" name="action" value="delete" className="delete-btn">
            delete
          </Button>

          <Button  name="action" value="close" className="close-btn"   as={Link} to= "/admin/reviews">
            close
          </Button>
        </div>

      </Form>
    </Container>
  );
}
export default AdminViewReview