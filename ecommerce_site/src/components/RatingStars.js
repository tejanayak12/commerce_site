import React from "react";

export default function RatingStars({ rating }) {
  const starCount = 5; // Number of stars

  // Calculate the percentage of filled stars
  const starPercentage = (rating / starCount) * 100;

  return (
    <div className="rating-stars">
      <div
        className="rating-stars-filled"
        style={{ width: `${starPercentage}%` }}
      >
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    </div>
  );
}
