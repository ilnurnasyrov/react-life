import React from "react";
import BoardStore from "../stores/board_store";
import BoardActions from "../actions/board_actions";
import "./board_view.styl";

const BoardView = React.createClass(  {
  getInitialState() {
    return BoardStore.getState();
  },
  componentDidMount() {
    BoardStore.listen(this.onChange);
  },
  componentWillUnmount() {
    BoardStore.unlisten(this.onChange);
  },
  onChange(state) {
    this.setState(state);
  },
  toggleCell(x, y) {
    return () => BoardActions.toggleCell(x, y)
  },
  updateView(cells) {
    let xSize = cells.length;
    let ySize = cells[0].length;

    for(let x = 0; x < xSize; x++) {
      for(let y = 0; y < ySize; y++) {
        let id = x + ";" + y;
        let cell = document.getElementById(id);

        if(cells[x][y]) {
          cell.setAttribute("class", "cell true");
        } else {
          cell.setAttribute("class", "cell false");
        }
      }
    }
  },
  shouldComponentUpdate(_props, state) {
    this.updateView(state.cells)
    return false;
  },
  renderCell(cell, y, column) {
    return <div
      className={`cell ${cell}`}
      key={y}
      id={column.x + ";" + y}
      onClick={this.toggleCell(column.x, y)}
    />
  },
  renderColumn(column, x) {
    column.x = x;
    return <div className="column" key={x}>
      {column.map(this.renderCell)}
    </div>
  },
  render() {
    return <div className="board">
      {this.state.cells.map(this.renderColumn)}
    </div>
  }
});

export default BoardView;
