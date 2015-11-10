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
  updateView(cells) {
    displayGeneration(cells);
  },
  shouldComponentUpdate(_props, state) {
    this.updateView(state.cells)
    return false;
  },
  render() {
    return <div className="board">
      {this.state.cells.map(this.renderColumn)}
    </div>
  }
});

function displayGeneration(gen) {
  for(let x = 0; x < gen.length; x++) {
    for(let y = 0; y < gen.length; y++) {
      let id = x + ";" + y;
      let cell = document.getElementById(id);

      if(gen[x][y]) {
        cell.setAttribute("class", "cell true");
      } else {
        cell.setAttribute("class", "cell false");
      }
    }
  }
}

export default BoardView;
