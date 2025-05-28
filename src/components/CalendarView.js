import React from "react";
import { calendarAppointments } from "../data/calendar";

const CalendarView = () => (
  <div className="card p-3 mt-4">
    <h5>October 2021</h5>
    <table className="table table-bordered">
      <tbody>
        {calendarAppointments.map((week, i) => (
          <tr key={i}>
            {week.map((day, j) => (
              <td key={j}>
                <strong>{day.date}</strong>
                <div>
                  {day.slots.map((slot, k) => (
                    <div key={k} className="text-muted small">
                      {slot}
                    </div>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CalendarView;
