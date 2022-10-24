import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import store from "../../store/index";

import EventListItem from "../../components/events/event-list-item";

function EventPage({ event }) {
  return (
    <>
      <div>title: {event.title}</div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = store.getState().events.map((event) => {
    return {
      params: {
        eventId: event.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = store.getState().events.find((event) => {
    return event.id === params.eventId;
  });

  return {
    props: { event },
  };
}

export default EventPage;
