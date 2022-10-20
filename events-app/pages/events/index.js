import { useSelector } from "react-redux";

import EventLists from "../../components/events/event-lists";
import EventFilter from "../../components/filter/event-filter";

function EventsPage() {
  const events = useSelector((state) => state.events);

  return (
    <>
      <EventFilter />
      <EventLists events={events} />
    </>
  );
}

export default EventsPage;
