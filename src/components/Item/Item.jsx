import classes from "./Item.module.css";

const calcBorderDiv = (StartingAngle, itemWidth, itemHeight) => {
  let beta;
  let range;

  if (StartingAngle <= 90) {
    beta = StartingAngle;
    range = 1;
  } else if (StartingAngle > 90 && StartingAngle <= 180) {
    beta = StartingAngle - 90;
    range = 2;
  } else if (StartingAngle > 180 && StartingAngle <= 270) {
    beta = StartingAngle - 180;
    range = 3;
  } else {
    beta = StartingAngle - 270;
    range = 4;
  }

  const alfa = 90 - beta;
  const a = Math.sin((beta * Math.PI) / 180.0) * itemWidth;
  const b = Math.cos((beta * Math.PI) / 180.0) * itemWidth;
  const x = Math.sin((alfa * Math.PI) / 180.0) * itemHeight;
  const y = Math.cos((alfa * Math.PI) / 180.0) * itemHeight;

  let borderHeight;
  let borderWidth;

  if (range === 4 || range === 2) {
    borderHeight = b + y;
    borderWidth = a + x;
  } else {
    borderHeight = a + x;
    borderWidth = b + y;
  }

  return { borderHeight, borderWidth };
};

const Item = (props) => {
  const style = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
    top: `${props.posy}px`,
    left: `${props.posx}px`,
    transform: `translate(-50%, -50%) rotate(${props.rotation}deg)`,
  };

  const centerPointStyle = {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transform: `rotate(-${props.rotation}deg)`,
    padding: "3px",
    color: "#fff",
  };

  const border = {
    border: "3px solid red",
    width: calcBorderDiv(props.rotation, props.width, props.height).borderWidth,
    height: calcBorderDiv(props.rotation, props.width, props.height)
      .borderHeight,
    position: "absolute",
    top: `${props.posy}px`,
    left: `${props.posx}px`,
    transform: `translate(-50%, -50%)`,
  };

  return (
    <>
      <div style={style} className={classes.item}>
        <p style={centerPointStyle}>{props.rotation}</p>
      </div>
      <div style={border}></div>
    </>
  );
};

export default Item;
