import { createSelector } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

const selectedEvents = createSelector(
  (state) => state.events,
  (events) => events.filter((event) => event.isFeatured === true)
);

function EventsPage() {
  const router = useRouter();

  console.log(router.query);

  return <h1>The [...slug].js Page</h1>;
}

export default EventsPage;
