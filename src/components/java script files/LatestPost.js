import classes from "../css files/ComponentsStyles.module.css";

//This function will contain the image, title, and date of the latest post
function LatestPost(props) {
  return (
    <div className={classes.latestPost}>
      <img src={props.imageSrc} alt={props.imgAlt} />
      <h6>{props.title}</h6>
      <p className={classes.s1}>{props.date}</p>
      <div className={classes.scaledOverlay}></div>
    </div>
  );
}

export default LatestPost;
