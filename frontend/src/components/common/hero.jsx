import React from "react";
import "../../../css/root.css";
import "../../../css/hero.css";
import carImg from "../../../public/hero-img.png"; // replace with actual path
import { FaCar } from "react-icons/fa";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">
          Rent a Car the Fast and Easy
          <br />
          Way with <span className="highlight">RentGo</span>
        </h1>

        <p className="hero-desc">
          Reliable rentals, transparent pricing, and trusted service for every journey.
          <br /> Drive with confidence — anywhere, anytime.
        </p>

        <Link className="rent-btn btn-inline-block d-flex gap-1" as={Link} to="/cars"><FaCar/>Rent Car</Link>
      </div>

      <img src={carImg} alt="Car" className="hero-img" />
    </section>
  );
}
