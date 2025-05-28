import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";

const DashboardOverview = () => (
  <div className="row">
    <div className="col-md-8">
      <AnatomySection />
    </div>
    <div className="col-md-4">
      <HealthStatusCards />
    </div>
  </div>
);

export default DashboardOverview;
