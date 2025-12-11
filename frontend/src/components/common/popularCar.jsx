import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../css/root.css";
import "../../../css/popularCars.css";
import carImg  from "../../assets/democar.jpg"
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { MdEventSeat, MdWindPower } from "react-icons/md";
import { Link } from "react-router";


export default function PopularCars() {
  const rentals = [1, 2, 3];

  return (
    <section className="popular-section">
      <Container>
        <div className="popular-header d-flex justify-content-between align-items-center">
          <h2 className="popular-title">Popular Rentals</h2>
          <Link to="/cars" as={Link} className="view-all">View All →</Link>
        </div>

        <Row className="mt-4">
          {rentals.map((item, index) => (
            <Col md={4} className="mb-4" key={index}>
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
      </Container>
    </section>
  );
}
