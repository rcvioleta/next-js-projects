import classes from "./event-filter.module.css";

function EventFilter(props) {
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

  return (
    <div className={classes.filter}>
      <div>
        <label htmlFor="event-month">Month</label>
        <select id="event-month">
          {months.map((month, index) => {
            return (
              <option key={index} value={month}>
                {month}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="event-year">Year</label>
        <select id="event-year">
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default EventFilter;
