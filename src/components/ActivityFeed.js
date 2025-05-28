import React from "react";

const ActivityFeed = () => (
  <div className="card p-3">
    <h5>Activity</h5>
    <p>3 appointments on this week</p>
    <div className="d-flex align-items-end gap-2" style={{ height: "100px" }}>
      {[40, 60, 80, 20, 90, 30, 70].map((h, i) => (
        <div
          key={i}
          className="bg-primary"
          style={{ width: "10px", height: `${h}px` }}
        ></div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;
