import React from "react";

function Cell(props) {
  let style = {
    color: props.value ? "black" : "transparent",
  };
  let value = props.value || "_";
  if (props.onWinner) {
    for (const index of props.onWinner) {
      if (index === props.id) {
        style = {
          backgroundColor: "yellow",
        };
      }
    }
  }

  return (
    <button
      onClick={() => props.onCellClick(props.id)}
      style={style}
      className="cell"
    >
      {value}
    </button>
  );
}

export default Cell;
