import styles from "./event-list-item.module.css";

function EventListItem(props) {
  const { title, date, location, imagePath } = props;

  const formattedDate = new Date(date).toLocaleDateString("us-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <div className={styles.container}>
      <div>
        <img src={imagePath} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <time className={styles.date}>{formattedDate}</time>
        <div className={styles.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={styles.link}>
          <a href="/">Explore Event</a>
        </div>
      </div>
    </div>
  );
}

export default EventListItem;
