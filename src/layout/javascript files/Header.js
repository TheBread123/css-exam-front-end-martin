import { Link } from "react-router-dom";
import classes from "../css files/LayoutStyles.module.css";
import CSSLogo from "../../images/CSSLogo.png";

//serves as the header of the webpage
function Header() {
  return (
    <header className={classes.header}>
      <div>
        {" "}
        <img src={CSSLogo} alt="CSS Logo" />
      </div>
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
