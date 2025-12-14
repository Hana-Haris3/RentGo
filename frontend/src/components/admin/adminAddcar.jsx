import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../../css/admin/addcar.css";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddCarPage = () => {
  const [mileage, setMileage] = React.useState(0);

  return (
    <div className="addcar-page">
      <Container>
        <h2 className="title text-center mb-4">Add New Car</h2>

        <Row className="g-4">

          {/* LEFT SECTION — IMAGE + CAPACITY */}
          <Col md={4}>
            <h5>Image</h5>
            <div className="image-box">+</div>

            <h5 className="section-title">Capacity</h5>
            <Form.Control className="input-box" placeholder="Number of seats" />
            <Form.Control className="input-box" placeholder="Number of doors" />
            <Form.Control className="input-box" placeholder="Luggage capacity" />

            <h5 className="section-title">Transmission</h5>
            <div className="radio-group">
              <Form.Check type="radio" label="Manual" name="trans" />
              <Form.Check type="radio" label="Automatic" name="trans" defaultChecked />
            </div>
          </Col>

          {/* MIDDLE SECTION — DETAILS */}
          <Col md={4}>
            <h5>Details</h5>

            <Form.Control className="input-box" placeholder="Name" />
            <Form.Control className="input-box" placeholder="Brand" />
            <Form.Control className="input-box" placeholder="Color" />
            <Form.Control className="input-box" placeholder="Model Name" />
            <Form.Control className="input-box" placeholder="Model Year" />
            <Form.Control className="input-box" placeholder="Year of manufacture" />
            <Form.Control className="input-box" placeholder="Registration number" />
            <Form.Control className="input-box" placeholder="Price" />
            <Form.Control className="input-box" placeholder="Engine" />

            {/* NEW DROPDOWN BEFORE MILEAGE */}
            <Field className="mb-3 mt-2">
              <FieldLabel>Car Category</FieldLabel>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="sport">Sport</SelectItem>
                </SelectContent>
              </Select>

              <FieldDescription>
                Choose the car classification.
              </FieldDescription>
            </Field>

            {/* UPDATED MILEAGE WITH VALUES */}
            <label className="section-title">Mileage: {mileage} KM</label>

            <Form.Range
              min={0}
              max={50}
              step={1}
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
            />

            <div className="mileage-values">
              <span>0 KM</span>
              <span>50 KM</span>
            </div>
          </Col>

          {/* RIGHT SECTION — ALL OPTIONS */}
          <Col md={4}>
            {/* Department Select */}
            <Field className="mb-3">
              <FieldLabel>Department</FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose department" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="support">Customer Support</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                </SelectContent>
              </Select>

              <FieldDescription>
                Select your department or area of work.
              </FieldDescription>
            </Field>

            {/* Fuel */}
            <h5>Fuel Type</h5>
            <div className="checkbox-group">
              {["CNG", "Petrol", "Diesel", "Electrical", "Hybrid"].map((x) => (
                <Form.Check key={x} type="checkbox" label={x} />
              ))}
            </div>

            {/* Equipments */}
            <h5 className="section-title">Equipments</h5>
            <div className="checkbox-group">
              {["ABS", "Air Bag", "Air Conditioner", "Reverse Camera", "Hybrid"].map(
                (x) => (
                  <Form.Check key={x} type="checkbox" label={x} />
                )
              )}
            </div>

            {/* Availability Toggle */}
            <h5 className="section-title">Availability</h5>
            <Form.Check
              type="switch"
              id="availability-switch"
              label="Available"
              className="toggle-btn long-toggle"
            />

            {/* Maintenance Toggle */}
            <h5 className="section-title">Maintenance</h5>
            <Form.Check
              type="switch"
              id="maintenance-switch"
              label="Under Maintenance"
              className="toggle-btn long-toggle"
            />

            {/* Notes — Under Availability & Maintenance */}
            <h5 className="section-title">Notes</h5>
            <Form.Control
              as="textarea"
              className="textarea-box"
              placeholder="Description"
            />

            <Form.Control
              as="textarea"
              className="textarea-box"
              placeholder="Damage Notes"
            />

            <Button className="add-btn w-100 mt-3">Add Car</Button>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddCarPage;
