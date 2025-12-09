import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function SignUp() {
  return (
    <div style={{ background: "#e6dfb3", minHeight: "100vh", paddingTop: 40 }}>
      <Container className="p-4 rounded" style={{ maxWidth: "900px" }}>
        
        <h3 className="text-center mb-4" style={{ fontWeight: 600 }}>
          Create Your Account
        </h3>

        {/* Profile Icon */}
        <div className="d-flex justify-content-center mb-4">
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              border: "2px solid #666",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
            }}
          >
            👤
          </div>
        </div>

        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
              </Form.Group>

              <Form.Label>Date of Birth</Form.Label>
              <Row>
                <Col>
                  <Form.Select className="mb-3">
                    <option>DD</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select className="mb-3">
                    <option>MM</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select className="mb-3">
                    <option>YYYY</option>
                  </Form.Select>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" placeholder="Enter gender" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address"/>
              </Form.Group>
            </Col>

            {/* Right Section */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Driving Licence Number</Form.Label>
                <Form.Control type="text" placeholder="Enter DL number"/>
              </Form.Group>

              <Form.Label>Driving Licence Validity</Form.Label>
              <Row className="mb-3">
                <Col>
                  <Form.Select>
                    <option>DD</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select>
                    <option>MM</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select>
                    <option>YYYY</option>
                  </Form.Select>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Aadhaar Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Aadhaar"/>
              </Form.Group>

              <Row className="mt-3">
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Upload Driving Licence</Form.Label>
                    <Form.Control type="file" accept="image/*" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Upload Aadhaar</Form.Label>
                    <Form.Control type="file" accept="image/*" />
                  </Form.Group>
                </Col>
              </Row>

              <div className="mt-4 text-center">
                <Button
                  style={{
                    width: "200px",
                    background: "#d89b2c",
                    border: "none",
                    fontWeight: "bold"
                  }}
                >
                  Create
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
