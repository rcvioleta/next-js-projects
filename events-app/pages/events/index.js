import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import EventLists from "../../components/events/event-lists";

const selectedEvents = createSelector(
  (state) => state.events,
  (events) => events.filter((event) => event.isFeatured === true)
);

function EventsPage() {
  const featuredEvents = useSelector(selectedEvents);

  return <EventLists events={featuredEvents} />;
}

export default EventsPage;
