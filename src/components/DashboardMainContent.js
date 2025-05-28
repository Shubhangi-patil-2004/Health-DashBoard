import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainComponents = () => (
  <div className="container-fluid p-4">
    <DashboardOverview />
    <CalendarView />
    <div className="row mt-4">
      <div className="col-md-8">
        <UpcomingSchedule />
      </div>
      <div className="col-md-4">
        <ActivityFeed />
      </div>
    </div>
  </div>
);

export default DashboardMainComponents;
