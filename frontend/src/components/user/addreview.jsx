import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../../css/user/addreview.css";

const AddReview = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rating: ${rating}\nFeedback: ${feedback}`);
  };

  return (
    <div className="rating-container">
      <h4 className="title">Rate Your Experience</h4>

      <div className="stars">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
                className="hidden-input"
              />
              <FaStar
                size={30}
                className="star"
                color={ currentRating <= (hover || rating)? "#d4a017": "#ccc"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>

      <textarea className="feedback-box" placeholder="Type here..." value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddReview;
