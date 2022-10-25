import classes from "./event-details.module.css";

function EventDetails(props) {
  const { id, title, date, description, location, imagePath } = props;

  const formattedDate = new Date(date).toLocaleDateString("us-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <div className={classes.container}>
      <div>
        <img src={`/${imagePath}`} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <time className={classes.date}>{formattedDate}</time>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

export default EventDetails;
