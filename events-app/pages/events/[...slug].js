import { useRouter } from "next/router";

function EventsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The [...slug].js Page</h1>
    </div>
  );
}

export default EventsPage;
