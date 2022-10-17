import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Layout from "../../components/layouts/layout";
import EventListItem from "../../components/events/event-list-item";
import { useEffect, useState } from "react";

function EventPage() {
  // const [event, setEvent] = useState({});
  const { eventId } = useRouter().query;
  const events = useSelector((state) => state.events);
  const event = events.find((event) => event.id === eventId);

  console.log("event: ", event);
  console.log("event id: ", eventId);

  let eventComponent = "<p>Loading event...</p>";

  if (event.title) {
    eventComponent = `This is the title ${event.title}`;
  }

  return <Layout>{eventComponent}</Layout>;
}

export default EventPage;
