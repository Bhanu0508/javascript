import React from "react";
import Cell from "./Cells";
import values from "./Game";
// import InputComponent from "./input-component";

let tableData = [];
class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      next: "X",
      cells: [null, null, null, null, null, null, null, null, null],
      player1: "",
      player2: "",
    };
  }
  handleCellClick = id => {
    let currentValue = this.state.cells[id];
    if (values.calculateWinner(this.state.cells) || currentValue) return;

    tableData.push({
      next: this.state.next,
      position: id,
      serialNum: this.state.cells.filter(cell => cell != null).length + 1,
      player1: this.state.player1,
      player2: this.state.player2,
    });

    if (currentValue) return;

    let newCells = [...this.state.cells];
    newCells[id] = this.state.next;

    let newNext = this.state.next === "O" ? "X" : "O";

    this.setState({ cells: newCells, next: newNext });
  };

  restart = () => {
    tableData = [];
    this.setState({
      next: "X",
      cells: [null, null, null, null, null, null, null, null, null],
    });
  };

  render() {
    let status;
    let win;
    if (
      this.state.cells.filter(cell => cell !== null).length ===
        this.state.cells.length &&
      !values.calculateWinner(this.state.cells)
    ) {
      status = "stale Mate";
    } else {
      win = values.calculateWinner(this.state.cells);
      if (win) {
        let winner =
          win.status === "X" ? this.state.player1 : this.state.player2;
        status = "Winner is : " + winner;
      } else {
        let move =
          this.state.next === "X" ? this.state.player1 : this.state.player2;
        status = "Next Move By : " + move;
      }
    }

    return (
      <div>
        <div className="form">
          <label> Player 1 :</label>
          <br></br>
          <input
            type="text"
            id="player1"
            onChange={e => {
              this.setState({
                player1: e.target.value,
              });
            }}
          ></input>
          <br></br>
          <label> Player 2 :</label>
          <br></br>
          <input
            type="text"
            id="player2"
            onChange={e => {
              this.setState({
                player2: e.target.value,
              });
            }}
          ></input>
          <br></br>
          <br></br>
          <button
            onClick={() => {
              console.log(this.state);
            }}
          >
            Submit
          </button>
        </div>
        <h4>{status}</h4>
        <button className="restart " onClick={this.restart}>
          Restart The Game
        </button>
        <div className="board">
          {this.state.cells.map((value, index) => (
            <Cell
              id={index}
              value={value}
              onCellClick={this.handleCellClick}
              onWinner={win ? win.winnerArray : null}
            />
          ))}
        </div>
        <div>
          <values.MyTable data={tableData} />
        </div>
      </div>
    );
  }
}

export default Board;
