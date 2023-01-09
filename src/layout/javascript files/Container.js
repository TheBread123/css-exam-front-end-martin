import classes from "../css files/LayoutStyles.module.css";

//This will contain the different components of the different sections of the webpage
function Container(props) {
  return <main className={classes.container}>{props.children}</main>;
}

export default Container;
