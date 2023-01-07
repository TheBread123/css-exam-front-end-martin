import classes from "../css files/Layout.module.css";
import Footer from "./Footer";
import Hero from "./Header";

//basic layout of all webpages
function Layout(props) {
  return (
    <div>
      <Hero />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
