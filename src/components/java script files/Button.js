import classes from "../css files/ComponentsStyles.module.css";

//buttons for the web app
function Button(props) {
  return <button className={classes.button}>{props.inText}</button>;
}
export function ButtonWithFocus(props) {
  return <button className={classes.buttonFocus}>{props.inText}</button>;
}

export default Button;
