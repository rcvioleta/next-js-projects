import { useSelector } from "react-redux";

import Layout from "../../components/layouts/layout";
import EventLists from "../../components/events/event-lists";

function EventsPage() {
  const events = useSelector((state) => state.events);

  return (
    <Layout>
      <EventLists events={events} />
    </Layout>
  );
}

export default EventsPage;
