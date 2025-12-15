import React from "react";
import { Link } from "react-router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../../css/admin/adminViewBooking.css";
  
const AdminViewBooking=()=> {
  return (
    <Container fluid className="booking-page d-flex align-items-center justify-content-center">
      <Form method="post" className="booking-card w-100">
        <h4 className="booking-title text-center mb-4">BOOKING DETAILS</h4>

        <Row className="booking-content">
          <Col xs={12} md={6}>
            <p><span>Booking ID</span> BK005</p>
            <p><span>Customer Name</span> Michael</p>
            <p><span>Phone Number</span> 9849758392</p>
            <p><span>Email</span> michaelx@gmail.com</p>

            <br />

            <p><span>Car</span> Toyota</p>
            <p><span>Model Name</span> Corolla</p>
            <p><span>Model Year</span> 2020</p>
            <p><span>Registration Number</span> KL007D</p>
          </Col>

          <Col xs={12} md={6}>
            <p><span>Pickup Date and Time</span> 32311414</p>
            <p><span>Return Date and Time</span> 375792082</p>
            <p><span>License</span> AH7577</p>
            <p><span>ID Proof</span> Aadhaar</p>
            <p><span>Payment Status</span> Paid</p>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button type="submit" className="confirm-btn"    as={Link} to="/admin/bookings">
            Confirm
          </Button>
        </div>
      </Form>
    </Container>
  );
}


export default AdminViewBooking;
