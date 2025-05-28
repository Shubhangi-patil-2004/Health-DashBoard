import React from "react";
import { healthIndicators } from "../data/healthData";

const AnatomySection = () => (
  <div className="card p-3">
    <img
      src="https://th.bing.com/th/id/OIP.XPdQQbOVWv4lTLBmx9y4EAHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      alt="Human Anatomy"
      style={{ width: "250px", height: "250px" }}
      className="img-fluid mb-3"
    />
    {healthIndicators.map((indicator, idx) => (
      <div
        key={idx}
        className={`badge bg-${
          indicator.status === "healthy" ? "success" : "danger"
        } me-2`}
      >
        {indicator.label}
      </div>
    ))}
  </div>
);

export default AnatomySection;
