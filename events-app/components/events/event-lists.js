import EventListItem from "./event-list-item";

import styles from "./event-lists.module.css";

function EventList(props) {
  return props.events.map((event) => {
    return (
      <div className={styles.lists}>
        <EventListItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          imagePath={event.image}
        />
      </div>
    );
  });
}

export default EventList;
