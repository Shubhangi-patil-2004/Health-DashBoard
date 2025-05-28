import React from "react";

const SimpleAppointmentCard = ({ title, time }) => (
  <div className="card p-2 mb-2">
    <strong>{title}</strong>
    <p className="mb-0 small text-muted">{time}</p>
  </div>
);

export default SimpleAppointmentCard;
