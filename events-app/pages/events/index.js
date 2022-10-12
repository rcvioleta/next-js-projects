import { useSelector } from "react-redux";

function EventsPage() {
  const events = useSelector((state) => state.events);

  console.log("events", events);

  return (
    <div>
      <h1>The Events Page</h1>
    </div>
  );
}

export default EventsPage;
