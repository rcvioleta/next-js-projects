import Image from "next/image";
import Link from "next/link";

import styles from "./event-list-item.module.css";

function EventListItem(props) {
  const { id, title, date, description, location, imagePath } = props;

  const formattedDate = new Date(date).toLocaleDateString("us-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  let showDescription = "";

  if (description) {
    showDescription = `
      <div>
        <p>${description}</p>
      </div>
    `;
  }

  return (
    <div className={styles.container}>
      <div>
        <Image src={`/${imagePath}`} alt={title} layout="fill" />
      </div>
      <div>
        <h1>{title}</h1>
        <time className={styles.date}>{formattedDate}</time>
        <div className={styles.address}>
          <address>{formattedAddress}</address>
        </div>
        {showDescription}
        <div className={styles.link}>
          <Link href={`/events/${id}`}>
            <a>Explore Event</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventListItem;
