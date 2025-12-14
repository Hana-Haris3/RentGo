import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../css/root.css";
import "../../../css/carDetails.css";

export default function CarDetails() {
  const [mainImage, setMainImage] = useState(
    "https://via.placeholder.com/700x400"
  );

  const galleryImages = [1, 2, 3, 4].map(
    (i) => `https://via.placeholder.com/700x400?text=Image+${i}`
  );

  return (
    <Container fluid className="car-details-container">
      <Row>
        {/* LEFT SECTION */}
        <Col xs={12} lg={6} className="left-section">
          <h2 className="car-title">Ford Mustang GT.</h2>

          <div className="brand-details">
            <p><strong>Brand:</strong> Ford</p>
            <p><strong>Model:</strong> Mustang GT</p>
            <p><strong>Model Year:</strong> 1968</p>
          </div>

          <div className="price-row">
            <h3 className="price">$25 <span>/ day</span></h3>
            <span className="available">AVAILABLE</span>
          </div>

          {/* MAIN IMAGE */}
          <img className="main-image" src={mainImage} alt="Car" />

          {/* IMAGE GALLERY */}
          <Row className="image-gallery">
            {galleryImages.map((img, index) => (
              <Col xs={6} sm={3} key={index}>
                <img
                  src={img}
                  alt="Gallery"
                  onClick={() => setMainImage(img)}
                  className="gallery-item"
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* RIGHT SECTION */}
        <Col xs={12} lg={6} className="right-section">
          <h4 className="spec-title">Technical Specification</h4>

          <div className="spec-grid">
            <div className="spec-card"><p className="spec-label">Type</p><h5>Manual</h5></div>
            <div className="spec-card"><p className="spec-label">Fuel</p><h5>Petrol</h5></div>
            <div className="spec-card"><p className="spec-label">Seats</p><h5>2</h5></div>
            <div className="spec-card"><p className="spec-label">Color</p><h5>Highland Green</h5></div>
            <div className="spec-card"><p className="spec-label">Luggage Capacity</p><h5>32 L</h5></div>
            <div className="spec-card"><p className="spec-label">Drive</p><h5>RWD</h5></div>
          </div>

          <button className="book-btn">Book Now</button>
          

          <div className="equipment">
            <h4>Car Equipment</h4>
            <div className="equipment-grid">
              <span>✔ Air Bags</span>
              <span>✔ Bluetooth</span>
              <span>✔ GPS</span>
              <span>✔ Reverse Camera</span>
              <span>✔ AC</span>
              <span>✔ Premium Stereo</span>
            </div>
          </div>
        </Col>
      </Row>

      {/* Description */}
      <Row>
        <Col xs={12} className="description">
          <h4>Description:</h4>
          <p>
            This car is a die-cast scale model of the iconic 1968 Ford Mustang GT Fastback,
            famously driven by Steve McQueen in the movie Bullitt. Its exterior is finished
            in its distinctive Highland Green color.
          </p>
        </Col>
      </Row>

      {/* Details */}
      <Row>
        <Col xs={12} className="details">
          <h4>Details :</h4>
          <ul>
            <li><strong>Year of Manufacture:</strong> 1968</li>
            <li><strong>Engine:</strong> V8</li>
            <li><strong>Mileage:</strong> 13–20 MPG</li>
            <li><strong>Type:</strong> Sedan</li>
          </ul>
        </Col>
      </Row>

      {/* Damage Notes */}
      <Row>
        <Col xs={12} className="damage-notes">
          <h4>Damage Notes :</h4>
          <ul>
            <li>Minor paint scratches on rear bumper</li>
            <li>Slight wear on interior leather (driver seat)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
