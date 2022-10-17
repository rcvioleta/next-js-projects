import { createSelector } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

import Layout from "../../components/layouts/layout";

const selectedEvents = createSelector(
  (state) => state.events,
  (events) => events.filter((event) => event.isFeatured === true)
);

function EventsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <Layout>
      <h1>The [...slug].js Page</h1>
    </Layout>
  );
}

export default EventsPage;
