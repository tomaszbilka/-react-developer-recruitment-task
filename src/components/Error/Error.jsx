import classes from "./Error.module.css";

const ErrorMsg = (props) => {
  return (
    <div className={classes.wrap}>
      <p className={classes.title}>Upss... something went wrong!</p>
      <b className={classes.msg}>
        Send us below message and we will handle it!
      </b>
      <span>
        {props.message ? props.message : "No one knows what was wrong :/"}
      </span>
    </div>
  );
};

export default ErrorMsg;
