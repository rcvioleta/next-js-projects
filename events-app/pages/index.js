import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import Layout from "../components/layouts/layout";
import EventLists from "../components/events/event-lists";

const selectedEvents = createSelector(
  (state) => state.events,
  (events) => events.filter((event) => event.isFeatured === true)
);

function HomePage() {
  const featuredEvents = useSelector(selectedEvents);

  return (
    <Layout>
      <EventLists events={featuredEvents} />
    </Layout>
  );
}

export default HomePage;
