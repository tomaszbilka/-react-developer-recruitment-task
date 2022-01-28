import classes from "./InfoHeader.module.css";

const InfoHeader = (props) => {
  return (
    <div>
      <div className={classes.wrap}>
        <p>Name:</p>
        <b>{props.name}</b>
      </div>
      <div className={classes.wrap}>
        <p>ID:</p>
        <input readOnly type='text' value={props.id}></input>
      </div>
    </div>
  );
};

export default InfoHeader;
