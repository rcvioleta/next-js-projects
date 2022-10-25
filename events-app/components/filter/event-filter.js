import { useRouter } from "next/router";
import { useState } from "react";

import classes from "./event-filter.module.css";

function EventFilter(props) {
  const router = useRouter();

  const [selectedMonth, setSelectedMonth] = useState("01");
  const [selectedYear, setSelectedYear] = useState("2022");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = ["2021", "2022", "2023", "2024", "2025", "2026"];

  const handleFindEvent = () => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  return (
    <div className={classes.filter}>
      <div className={classes.month}>
        <label htmlFor="event-month">Month</label>
        <select
          id="event-month"
          value={selectedMonth}
          onChange={(evt) => setSelectedMonth(evt.target.value)}
        >
          {months.map((month, index) => {
            return (
              <option key={index} value={`0${index + 1}`.slice(-2)}>
                {month}
              </option>
            );
          })}
        </select>
      </div>
      <div className={classes.year}>
        <label htmlFor="event-year">Year</label>
        <select
          id="event-year"
          value={selectedYear}
          onChange={(evt) => setSelectedYear(evt.target.value)}
        >
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <div className={classes["find-event"]}>
        <button onClick={() => handleFindEvent()}>Find Events</button>
      </div>
    </div>
  );
}

export default EventFilter;
