import React from "react";
import "../../../css/carDetails.css";

export default function CarDetails() {
  return (
    <div className="car-details-container">

      {/* LEFT SECTION */}
      <div className="left-section">

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

        <img
          className="main-image"
          src="https://via.placeholder.com/700x400"
          alt="Car"
        />

        {/* IMAGE GALLERY */}
        <div className="image-gallery">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://via.placeholder.com/120x80?text=${i}`}
              alt="Gallery"
            />
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="description">
          <h4>Description:</h4>
          <p>
            This car is a die-cast scale model of the iconic 1968 Ford Mustang GT Fastback,
            famously driven by Steve McQueen in the movie Bullitt. Its exterior is finished
            in its distinctive Highland Green color.
          </p>
        </div>

        {/* DETAILS */}
        <div className="details">
          <h4>Details :</h4>
          <ul>
            <li><strong>Year of Manufacture:</strong> 1968</li>
            <li><strong>Engine:</strong> V8</li>
            <li><strong>Mileage:</strong> 13–20 MPG</li>
          </ul>
        </div>

        {/* DAMAGE NOTES */}
        <div className="damage-notes">
          <h4>Damage Notes :</h4>
          <ul>
            <li>Minor paint scratches on rear bumper</li>
            <li>Slight wear on interior leather (driver seat)</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">

        <h4 className="spec-title">Technical Specification</h4>

        <div className="spec-grid">
          <div className="spec-card">
            <p className="spec-label">Type</p>
            <h5>Manual</h5>
          </div>

          <div className="spec-card">
            <p className="spec-label">Fuel</p>
            <h5>Petrol</h5>
          </div>

          <div className="spec-card">
            <p className="spec-label">Seats</p>
            <h5>2</h5>
          </div>

          <div className="spec-card">
            <p className="spec-label">Color</p>
            <h5>Highland Green</h5>
          </div>

          <div className="spec-card">
            <p className="spec-label">Luggage Capacity</p>
            <h5>32 L</h5>
          </div>

          <div className="spec-card">
            <p className="spec-label">Drive</p>
            <h5>RWD</h5>
          </div>
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

      </div>

    </div>
  );
}
