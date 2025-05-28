import React from "react";
import { healthStatusCards } from "../data/healthData";

const HealthStatusCards = () => (
  <div>
    {healthStatusCards.map((card, idx) => (
      <div className="card p-3 mb-2" key={idx}>
        <h6>{card.title}</h6>
        <small>{card.date}</small>
        <span className={`badge bg-${card.statusColor}`}>{card.status}</span>
      </div>
    ))}
  </div>
);
export default HealthStatusCards;
