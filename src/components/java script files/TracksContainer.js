import classes from "../css files/ComponentsStyles.module.css";

//will contain the different contents of the different tracks
function TracksContainer(props) {
  return (
    <section className={classes.tracks}>
      <img src={props.imageSrc} alt={props.imgAlt} />
      <h5>{props.trackName}</h5>
      <p>{props.trackInformation}</p>
      <button className={classes.button}>Learn More</button>
    </section>
  );
}

export default TracksContainer;
