import EventDetails from "../../components/events/event-details";

import store from "../../store/index";

function EventsPage({ events }) {
  return events.map((event) => {
    return (
      <EventDetails
        key={event.id}
        title={event.title}
        imagePath={event.image}
        date={event.date}
        location={event.location}
        description={event.description}
      />
    );
  });
}

export async function getStaticPaths() {
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const years = ["2021", "2022", "2023", "2024", "2025", "2026"];

  const params = [];

  for (let i = 0; i < years.length; i++) {
    for (let j = 0; j < months.length; j++) {
      params.push({
        params: {
          slug: [years[i], months[j]],
        },
      });
    }
  }

  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [year, month] = params.slug;

  const filteredEvents = store.getState().events.filter((event) => {
    return event.date.match(new RegExp(`${year}\-${month}`, "g"));
  });

  if (!filteredEvents.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: { events: filteredEvents },
  };
}

export default EventsPage;
