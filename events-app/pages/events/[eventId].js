import { useRouter } from "next/router";

function EventPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The [eventId].js Page</h1>
    </div>
  );
}

export default EventPage;
