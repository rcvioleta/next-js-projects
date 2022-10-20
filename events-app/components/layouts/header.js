import Link from "next/link";
import classes from "./header.module.css";

function HeaderLayout(props) {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <h1>
          <Link href="/">
            <a>NXTE</a>
          </Link>
        </h1>
      </div>
      <div className={classes.browse}>
        <Link href="/events">
          <a>Browse All Events</a>
        </Link>
      </div>
    </header>
  );
}

export default HeaderLayout;
