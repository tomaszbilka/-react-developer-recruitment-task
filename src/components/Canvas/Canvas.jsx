import Item from "../Item/Item";
import classes from "./Canvas.module.css";

const Canvas = (props) => {
  const style = {
    width: props.width,
    height: props.height,
  };

  return (
    <div style={style} className={classes.container}>
      {props?.items.map((el, index) => (
        <Item
          width={el.width}
          height={el.height}
          color={el.color}
          key={index}
          posx={el.x}
          posy={el.y}
          rotation={el.rotation}
        />
      ))}
    </div>
  );
};

export default Canvas;
