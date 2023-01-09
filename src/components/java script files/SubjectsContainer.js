import classes from "../css files/ComponentsStyles.module.css";

//will contain the different information about the different subjects of the different tracks
function SubjectContainer(props) {
  return (
    <section className={classes.subjects}>
      <img src={props.imageSrc} alt={props.imgAlt} />
      <div className={classes.lowerArea}>
        <h5>{props.subjectCode}</h5>
        <h6>{props.subjectTitle}</h6>
        <div className={classes.alignRight}>
          <button className={classes.button}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default SubjectContainer;
