import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Offcanvas,
  Form
} from "react-bootstrap";
import "../../../css/root.css";
import "../../../css/viewallcars.css"; 
import { Slider } from "@/components/ui/slider";


export default function CarPage() {
  const carTypes = [
    { label: "Hatchback", icon: "🚗" },
    { label: "Sedan", icon: "🚙" },
    { label: "SUV", icon: "🚘" },
    { label: "Crossover", icon: "🚗" },
    { label: "MPV/Minivan", icon: "🚐" },
    { label: "Coupe", icon: "🏎️" },
    { label: "Convertible", icon: "🚘" },
    { label: "Wagon", icon: "🚙" },
  ];

  // ⭐ NEW: State for selected car type
  const [selected, setSelected] = useState("");
  const [passenger, setPassenger] = useState("");
  const [transmission, setTransmission] = useState("");
  const [priceRange, setPriceRange] = useState([5000, 30000]);


  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => setShowFilters(!showFilters);

  const FiltersContent = () => (
    <div className="filters-wrapper">
      <h4 className="fw-bold mb-3">Filters</h4>

      {/* CAR TYPE FILTER */}
      <div className="filter-section">
        <h6 className="mb-3">Car Type</h6>

        <div className="car-type-wrapper">
          {carTypes.map((type) => (
            <label
              key={type.label}
              className={`car-type-option ${
                selected === type.label ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="carType"
                value={type.label}
                checked={selected === type.label}
                onChange={() => setSelected(type.label)}
              />

              <span className="car-icon">{type.icon}</span>
              {type.label}
            </label>
          ))}
        </div>
      </div>

      {/* PASSENGERS */}
    <div className="filter-section">
        <h6 className="mb-3">Passengers</h6>

        <div className="car-type-wrapper">
            {["2", "4", "5", "6", "7+"].map((num) => (
            <label
                key={num}
                className={`car-type-option ${
                passenger === num ? "selected" : ""
                }`}
            >
                <input
                type="radio"
                name="passengers"
                value={num}
                checked={passenger === num}
                onChange={() => setPassenger(num)}
                />

                {num}
            </label>
            ))}
        </div>
        </div>


      {/* TRANSMISSION */}
     <div className="filter-section">
        <h6 className="mb-3">Transmission</h6>

        <div className="car-type-wrapper">
            {["Automatic", "Manual"].map((type) => (
            <label
                key={type}
                className={`car-type-option ${
                transmission === type ? "selected" : ""
                }`}
            >
                <input
                type="radio"
                name="transmission"
                value={type}
                checked={transmission === type}
                onChange={() => setTransmission(type)}
                />
                {type}
            </label>
            ))}
        </div>
        </div>


      {/* PRICE RANGE */}
     <div className="filter-section">
        <h6 className="mb-3">Price Range (₹)</h6>

        {/* Min / Max text display */}
        <div className="d-flex justify-content-between mb-2">
            <span className="price-text">₹{priceRange[0]}</span>
            <span className="price-text">₹{priceRange[1]}</span>
        </div>

        {/* ShadCN Slider */}
        <Slider
            value={priceRange}
            min={0}
            max={50000}
            step={500}
            onValueChange={(value) => setPriceRange(value)}
            className="w-100 "
            id="slider"
        />
    </div>


      {/* FUEL TYPE */}
      <div className="filter-section">
        <h6>Fuel Type</h6>
        <Form.Check type="checkbox" label="Petrol" />
        <Form.Check type="checkbox" label="Diesel" />
      </div>
    </div>
  );

  return (
    <>
      <Container fluid className="page-container">
        <Row className="h-100">

          {/* SIDEBAR (desktop) */}
          <Col lg={3} className="d-none d-lg-block p-0">
            <div className="sidebar-container">
              <FiltersContent />
            </div>
          </Col>

          {/* CAR GRID */}
          <Col lg={9} className="cards-container">

            <div className="navbar-custom shadow-sm">
              <div className="navbar-title">Car Rental</div>

              {/* MOBILE FILTER BUTTON */}
              <Button
                variant="dark"
                className="d-lg-none"
                onClick={toggleFilters}
              >
                Filters
              </Button>
            </div>

            <Row className="g-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Col md={6} lg={4} key={i}>
                  <Card className="car-card shadow-sm">
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/400x220"
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold">Mercedes</Card.Title>
                      <Card.Text>
                        Available <br />
                        4 Seats | Auto | Petrol
                      </Card.Text>
                      <h4 className="fw-bold">$25</h4>
                      <Button variant="warning" className="w-100 mt-2">
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <div className="footer-brands">
        <span>🚗</span>
        <span>Ford</span>
        <span>Mercedes</span>
        <span>Jeep</span>
        <span>Audi</span>
      </div>

      {/* MOBILE FILTERS OFFCANVAS */}
      <Offcanvas show={showFilters} onHide={toggleFilters} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FiltersContent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
