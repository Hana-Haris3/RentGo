import React, { useState } from "react";
import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";
import "../../../css/root.css";
import "../../../css/viewallcars.css"; 
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { BookmarkIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import carImg  from "../../assets/democar.jpg"
import { CiSearch } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { MdEventSeat, MdWindPower } from "react-icons/md";
import { Link } from "react-router";
import { SiAudi, SiBmw, SiFerrari, SiFord, SiJeep, SiTesla } from "react-icons/si";



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

  const [selected, setSelected] = useState([]);
  const [passenger, setPassenger] = useState([]);
  const [transmission, setTransmission] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([5000, 30000]);

  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => setShowFilters(!showFilters);

  const toggleSelected = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const togglePassenger = (item) => {
    setPassenger((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const toggleTransmission = (item) => {
    setTransmission((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const toggleFuel = (fuel) => {
    setFuelTypes((prev) =>
      prev.includes(fuel) ? prev.filter((x) => x !== fuel) : [...prev, fuel]
    );
  };

  
const FiltersContent = () => (
  <div className="filters-wrapper">
    <h4 className="fw-bold ">Filters</h4>

    <div className="filter-section">
      <h6 className="mb-3">Car Type</h6>

      <div className="car-type-wrapper">
        {carTypes.map((type) => (
          <label
            key={type.label}
            className={`car-type-option ${selected.includes(type.label) ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              checked={selected.includes(type.label)}
              onChange={() => toggleSelected(type.label)}
            />
            <span className="car-icon">{type.icon}</span>
            {type.label}
          </label>
        ))}
      </div>
    </div>

    <div className="filter-section">
      <h6 className="mb-3">Passengers</h6>

      <div className="car-type-wrapper">
        {["2", "4", "5", "6", "7+"].map((num) => (
          <label
            key={num}
            className={`car-type-option ${passenger.includes(num) ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              checked={passenger.includes(num)}
              onChange={() => togglePassenger(num)}
            />
            {num}
          </label>
        ))}
      </div>
    </div>

    <div className="filter-section">
      <h6 className="mb-3">Transmission</h6>

      <div className="car-type-wrapper">
        {["Automatic", "Manual"].map((type) => (
          <label
            key={type}
            className={`car-type-option ${transmission.includes(type) ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              checked={transmission.includes(type)}
              onChange={() => toggleTransmission(type)}
            />
            {type}
          </label>
        ))}
      </div>
    </div>

    <div className="filter-section">
      <h6 className="mb-3">Price Range (₹)</h6>

      <div className="d-flex justify-content-between mb-2">
        <span>₹{priceRange[0]}</span>
        <span>₹{priceRange[1]}</span>
      </div>

      <Slider
        value={priceRange}
        min={0}
        max={50000}
        step={500}
        onValueChange={(v) => setPriceRange(v)}
        className="w-100"
      />
    </div>

    <div className="filter-section">
      <h6 className="mb-3">Fuel Type</h6>

      <FieldGroup className="gap-3">

        {["CNG", "Petrol", "Diesel", "Electrical", "Hybrid"].map((fuel) => (
          <Field orientation="horizontal" key={fuel}>
            <Checkbox
              id={`fuel-${fuel}`}
              checked={fuelTypes.includes(fuel)}
              onCheckedChange={() => toggleFuel(fuel)}
            />
            <FieldLabel htmlFor={`fuel-${fuel}`} className="font-normal">
              {fuel}
            </FieldLabel>
          </Field>
        ))}

      </FieldGroup>
    </div>





    <Toggle
      aria-label="Toggle bookmark"
      size="sm"
      variant="outline"
      className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-green-500 data-[state=on]:*:[svg]:stroke-black-500 w-50 border-dark rounded-4"
    >
      <BookmarkIcon />
       Available
    </Toggle>

   

    <ButtonGroup>
      <Button variant="success" size="sm">
        Apply
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Clear
      </Button>
    </ButtonGroup>
  

  

  </div>
);


  return (
    <>
      <Container fluid className="page-container">
        <Row className="h-100">

          <Col lg={3} className="d-none d-lg-block p-0">
            <div className="sidebar-container">
              <FiltersContent />
            </div>
          </Col>

          <Col lg={9} className="cards-container">

            <div className="navbar-custom shadow-sm">
              <div className="navbar-title">Cars for you</div>

              <Button
                variant="dark"
                className="d-lg-none"
                onClick={toggleFilters}
              >
                Filters
              </Button>
            </div>

            <div className="search-wrapper d-flex justify-content-center align-items-center gap-1 mt-4 mb-5">
                <div className="search-input-wrapper">
                    <span className="search-icon"><CiSearch/></span>
                    <input
                    type="text"
                    placeholder="search by car name, brand.."
                    className="search-input"
                    />
                </div>

                <button className="search-btn">Search</button>
                </div>


            <Row className="g-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Col md={6} lg={4} key={i}>
                  <div className="rental-card">
                        <img src={carImg} alt="Car" className="rental-img" />
        
                        <div className="card-body">
                        <div className="car-name-price">
                            <div>
                            <h4 className="car-name">Mercedes</h4>
                            <p className="car-type">Sedan</p>
                            </div>
                            <div className="price-block">
                            <span className="price">$25</span>
                            <p className="per-day">per day</p>
                            </div>
                        </div>
        
                        <p className="available">Available</p>
        
                        <div className="features">
                            <span><IoSettingsSharp/> Manual</span>
                            <span><BsFillFuelPumpDieselFill/> Deisel</span>
                        </div>
        
                        <div className="features mt-1">
                            <span><MdWindPower/> Air Conditioner</span>
                            <span><MdEventSeat/> 4 Seats</span>
                        </div>
        
                            <Link as={Link} to="/cars/viewdetails" className="details-btn">View Details</Link>
                        
                        </div>
                    </div>
                </Col>
              ))}
            </Row>

          </Col>
        </Row>
      </Container>

      <div className="footer-brands">
        <span><SiJeep className="img-fluid"/></span>
        <span><SiFord className="img-fluid"/></span>
        <span><SiBmw className="img-fluid"/></span>
        <span><SiAudi className="img-fluid"/></span>
        <span><SiFerrari className="img-fluid"/></span>
      </div>

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
