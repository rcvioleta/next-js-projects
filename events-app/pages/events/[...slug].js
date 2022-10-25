import store from "../../store/index";

function EventsPage({ event }) {
  return (
    <>
      <h1>{event.title}</h1>
      <div>{event.description}</div>
    </>
  );
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

  const filteredEvent =
    store.getState().events.find((event) => {
      return event.date.match(new RegExp(`${year}\-${month}`, "g"));
    }) || {};

  return {
    props: { event: filteredEvent },
  };
}

export default EventsPage;
