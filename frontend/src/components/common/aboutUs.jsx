import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import "../../../css/root.css";
import "../../../css/aboutUs.css";
import CardImg from "../../assets/demoCar.jpg";

export default function AboutUs() {
  return (
    <div className="about-wrapper">
      <Container>
       
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title fw-bolder fs-2">About Us</h2>
          </Col>
        </Row>

        
        <Row className="mb-5 features-row">
          <Col md={4} className="feature-left">
            <h3 className="feature-main-text fw-bold">
              Where every <br /> drive feels <br /> extraordinary
            </h3>
          </Col>

          <Col md={4} className="feature-box">
            <h5>Variety Brands</h5>
            <p>Explore vehicles from all top brands.</p>
            <h5>Maximum Freedom</h5>
            <p>Drive anywhere, anytime, without limits.</p>
          </Col>

          <Col md={4} className="feature-box">
            <h5>Awesome Support</h5>
            <p>Quick help for all rental needs.</p>
            <h5>Flexibility On The Go</h5>
            <p>Convenient and reliable booking options.</p>
          </Col>
        </Row>

        
        <Row className="text-center stats-row mb-5">
          <Col md={4}>
            <h2 className="stat-num">20k+</h2>
            <p>Happy customers</p>
          </Col>
          <Col md={4}>
            <h2 className="stat-num">540+</h2>
            <p>Count of cars</p>
          </Col>
          <Col md={4}>
            <h2 className="stat-num">25+</h2>
            <p>Years of expertise</p>
          </Col>
        </Row>

        {/* MID SECTION */}
        <Row className="align-items-center mid-row mb-5">
          <Col md={6}>
            <h2 className="mid-title">Unlock unforgettable memories on the road</h2>
            <p className="mid-text">
              Every journey becomes special when comfort meets convenience. We offer
              a wide range of quality vehicles crafted for every lifestyle.
            </p>
          </Col>
          <Col md={6} className="mid-image-box">
            <img
              src={CardImg}
              alt="car"
              className="mid-image"
            />
          </Col>
        </Row>

        {/* REVIEWS */}
        <Row className="text-center mb-4">
          <Col>
            <h3 className="section-title">Reviews from our customers</h3>
          </Col>
        </Row>

        <Row className="review-row mb-5">
          {[1, 2, 3].map((x) => (
            <Col md={4} key={x} className="d-flex justify-content-center">
              <Card className="review-card">
                <p className="review-text">
                  “Really enjoyed the ride! Service was excellent.”
                </p>
                <img
                  src="/images/about/user.png"
                  alt="user"
                  className="review-user"
                />
                <h6 className="review-name">Customer {x}</h6>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CONTACT */}
        <Row className="text-center mb-3">
          <Col>
            <h3 className="section-title">Contact Us</h3>
          </Col>
        </Row>

        <Row className="contact-row pb-5 text-center">
          <Col md={4}>
            <h6>Address</h6>
            <p>123 Main Street, NY</p>
          </Col>
          <Col md={4}>
            <h6>Email</h6>
            <a href="mailto:laputa@gmail.com">rentgo@gmail.com</a>
          </Col>
          <Col md={4}>
            <h6>Phone</h6>
            <a href="tel:+1234567890" >+1234567890</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}