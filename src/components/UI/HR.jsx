const HorizontalRule = (props) => {
  const hrStyle = {
    width: props.width ? props.width : "100%",
    margin: "1rem auto 1rem",
  };

  return <hr style={hrStyle} />;
};

export default HorizontalRule;
