import { Link } from "react-router-dom";
import classes from "../css files/HeaderAndFooter.module.css";

//serves as
function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Insert Logo Here</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Community</Link>
          </li>
          <li>
            <Link to="/">News & Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
