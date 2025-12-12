
import React from 'react'
import { Link } from 'react-router'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../../../css/root.css'
import '../../../css/publicHome/navbar.css'

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../../css/admin/addcar.css";

export default function AddCarPage() {
  return (
    <div className="addcar-page">
      <Container>
        <h2 className="title text-center mb-4">Add New Car</h2>

        <Row>
          {/* IMAGE UPLOAD */}
          <Col md={4} className="mb-4">
            <h5>Image</h5>
            <div className="image-box">+</div>

            <h5 className="mt-4">Capacity</h5>
            <Form.Control className="input-box" placeholder="Number of seats" />
            <Form.Control className="input-box" placeholder="Number of doors" />
            <Form.Control className="input-box" placeholder="Luggage capacity" />

            <h5 className="mt-3">Transmission</h5>
            <Form.Check type="radio" label="Manual" name="t" />
            <Form.Check type="radio" label="Automatic" name="t" defaultChecked />
          </Col>

          {/* DETAILS */}
          <Col md={4} className="mb-4">
            <h5>Details</h5>
            <Form.Control className="input-box" placeholder="Name" />
            <Form.Control className="input-box" placeholder="Brand" />
            <Form.Control className="input-box" placeholder="Model Name" />
            <Form.Control className="input-box" placeholder="Model Year" />
            <Form.Control className="input-box" placeholder="Year of manufacture" />
            <Form.Control className="input-box" placeholder="Registration number" />
            <Form.Control className="input-box" placeholder="Price" />
            <Form.Control className="input-box" placeholder="Engine" />
            <Form.Range className="mt-3" />
          </Col>

          {/* FUEL + EQUIP + NOTES */}
          <Col md={4} className="mb-4">
            <h5>Fuel Type</h5>
            {['CNG','Petrol','Diesel','Electrical','Hybrid'].map(x => (
              <Form.Check key={x} type="checkbox" label={x} />
            ))}

            <h5 className="mt-3">Equipments</h5>
            {['ABS','Air Bag','Air Conditioner','Reverse Camera','Hybrid'].map(x => (
              <Form.Check key={x} type="checkbox" label={x} />
            ))}

            <h5 className="mt-3">Availability</h5>
            <Form.Check type="switch" />

            <h5>Maintenance</h5>
            <Form.Check type="switch" />

            <h5 className="mt-3">Notes</h5>
            <Form.Control className="textarea-box" as="textarea" placeholder="Description" />
            <Form.Control className="textarea-box" as="textarea" placeholder="Damage Notes" />

            <Button className="add-btn w-100 mt-3">Add Car</Button>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
