import store from "../../store/index";

import EventDetails from "../../components/events/event-details";

function EventPage({ event }) {
  return (
    <EventDetails
      title={event.title}
      description={event.description}
      location={event.location}
      imagePath={event.image}
      date={event.date}
    />
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
