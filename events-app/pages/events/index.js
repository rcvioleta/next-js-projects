import { useSelector } from "react-redux";

import EventLists from "../../components/events/event-lists";

function EventsPage() {
  const events = useSelector((state) => state.events);

  return <EventLists events={events} />;
}

export default EventsPage;
