import React from "react";

function InputComponent(props) {
  let Player1;
  let Player2;
  const handleNameChange1 = text => {
    Player1 = text.target.value;
  };
  const handleNameChange2 = text => {
    Player2 = text.target.value;
  };

  const handleSave = () => {
    if (Player1 && Player2) {
      props.onUpdate(Player1, Player2);
    } else {
      console.log("Enter the player names...");
    }
  };

  return (
    <div>
      <label>Player 1: </label>
      <input type="text" onChange={handleNameChange1} requuired></input>
      <label>Player 2: </label>
      <input type="text" onChange={handleNameChange2} requuired></input>
      <button onclick={handleSave}>Play</button>
    </div>
  );
}

export default InputComponent;
