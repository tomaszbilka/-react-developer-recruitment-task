import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  const size = {
    width: props.size,
    height: props.size,
  };

  return <div className={classes.spinner} style={size}></div>;
};

export default LoadingSpinner;
