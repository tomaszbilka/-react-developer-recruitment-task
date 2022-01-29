import { useState } from "react";
import Item from "../Item/Item";
import classes from "./Canvas.module.css";

const Canvas = (props) => {
  //adjust the height of the canvas to the container (Board) on init
  const [ratio, setRatio] = useState(props.height / (window.innerHeight * 0.8));
  const style = {
    width: props.width / ratio,
    height: props.height / ratio,
  };

  //resize canvas depend to size of window and keep proportion
  window.onresize = function () {
    if (props.width / ratio > window.innerWidth) {
      setRatio(props.width / window.innerWidth);
    } else {
      setRatio(props.height / (window.innerHeight * 0.8));
    }
  };

  return (
    <div style={style} className={classes.container}>
      {props?.items.map((el, index) => (
        <Item
          width={el.width / ratio}
          height={el.height / ratio}
          color={el.color}
          key={index}
          posx={el.x / ratio}
          posy={el.y / ratio}
          rotation={el.rotation}
        />
      ))}
    </div>
  );
};

export default Canvas;
