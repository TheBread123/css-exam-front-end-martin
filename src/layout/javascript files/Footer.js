import classes from "../css files/LayoutStyles.module.css";
import CSSLogo from "../../images/CSSLogo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

//footer of the webpage
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.leftContainer}>
        <img src={CSSLogo} alt="CSS Logo" />
        <p className={classes.b2}>CSS Headliner</p>
        <div className={classes.signatureContainer}>
          <p>Passionately designed & developed by CSS 💻</p>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <p className={classes.s1}>UST Computer Science Society</p>
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
      </div>
      <div className={classes.rightContainer2}>
        <p className={classes.s1}>UST Computer </p>
        <ul>
          <li>
            <AiOutlineMail />
            <Link to="/">Email</Link>
          </li>
          <li>
            <AiOutlineFacebook />
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <AiOutlineTwitter />
            <Link to="/">Twitter</Link>
          </li>
          <li>
            <AiOutlineInstagram />
            <Link to="/">Instagram</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
