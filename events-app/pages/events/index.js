import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const selectedEvents = createSelector(
  (state) => state.events,
  (events) => events.filter((event) => event.isFeatured === true)
);

function EventsPage() {
  const featuredEvents = useSelector(selectedEvents);

  return (
    <>
      {featuredEvents.map((event) => {
        return (
          <div>
            <h1>{event.title}</h1>
            <time>{event.data}</time>
            <address>{event.location}</address>
            <img src={event.image} alt={event.title} />
          </div>
        );
      })}
    </>
  );
}

export default EventsPage;
