import React from "react";

function Squirrel(props) {
  let fur = props.data.primary_fur_color;
  if (fur === "Cinnamon") {
    fur = "#C58C66 ";
  } else if (fur === "Gray") {
    fur = "#808080";
  }
  let dot = {
    height: "25px",
    width: "25px",
    backgroundColor: fur,
    borderRadius: "50%",
    display: "inline-block"
  };
  let symbol = "";
  if (props.data.age === "Juvenile") {
    symbol = "🍼";
  }

  return (
    <div className="Squirrel">
      <h3 className="title">
        ID: {props.data.unique_squirrel_id} {symbol}
      </h3>
      <div style={dot}></div>
    </div>
  );
}

export default Squirrel;
