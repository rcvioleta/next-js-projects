import store from "../../store/index";

import EventDetails from "../../components/events/event-details";

function EventPage({ event }) {
  let component = <p>Loading Event...</p>;

  if (event) {
    component = (
      <EventDetails
        title={event.title}
        description={event.description}
        location={event.location}
        imagePath={event.image}
        date={event.date}
      />
    );
  }

  return component;
}

export async function getStaticPaths() {
  const events = store.getState().events;

  const paths = events.reduce((acc, event) => {
    if (event.isFeatured) {
      acc.concat({
        params: {
          eventId: event.id.toString(),
        },
      });
    }
    return acc;
  }, []);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const event = store.getState().events.find((event) => {
    return event.id === params.eventId;
  });

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event },
  };
}

export default EventPage;
