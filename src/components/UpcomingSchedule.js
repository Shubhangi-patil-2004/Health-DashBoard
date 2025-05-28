import React from "react";
import { upcomingAppointments } from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => (
  <div>
    <h5>The Upcoming Schedule</h5>
    {upcomingAppointments.map((dayGroup, idx) => (
      <div key={idx} className="mb-3">
        <h6 className="text-muted">{dayGroup.day}</h6>
        {dayGroup.appointments.map((appt, idy) => (
          <SimpleAppointmentCard key={idy} {...appt} />
        ))}
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
