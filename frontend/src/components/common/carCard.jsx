import { Link } from "react-router";

const CarCard = ({ image, name, type, price, children }) => {
  return (
    <div className="rental-card">
      <img src={image} alt={name} className="rental-img" />

      <div className="card-body">
        <div className="car-name-price">
          <div>
            <h4 className="car-name">{name}</h4>
            <p className="car-type">{type}</p>
          </div>

          <div className="price-block">
            <span className="price">₹{price}</span>
            <p className="per-day">per day</p>
          </div>
        </div>

        <p className="available">Available</p>

        <div className="features">
          <span>⚙ Manual</span>
          <span>⛽ Diesel</span>
        </div>

        <div className="features mt-1">
          <span>❄ AC</span>
          <span>🪑 4 Seats</span>
        </div>

        {/* DEFAULT USER BUTTON */}
        {!children && (
          <Link to="/cars/viewdetails" className="details-btn">
            View Details
          </Link>
        )}

        {/* ADMIN BUTTONS */}
        {children && (
          <div className="mt-3 d-flex gap-2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCard;
