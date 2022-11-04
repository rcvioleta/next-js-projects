import Image from "next/image";

import classes from "./event-details.module.css";

function EventDetails(props) {
  const { title, date, description, location, imagePath } = props;

  const formattedDate = new Date(date).toLocaleDateString("us-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <div className={classes.container}>
      <div>
        <Image src={`/${imagePath}`} alt={title} layout="fill" />
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
