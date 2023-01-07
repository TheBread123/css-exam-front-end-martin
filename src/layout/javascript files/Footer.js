import { Link } from "react-router-dom";
import classes from "../css files/HeaderAndFooter.module.css";

function Footer() {
  return (
    <header className={classes.footer}>
      <div className={classes.logo}>Insert Logo Here</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Footer;
