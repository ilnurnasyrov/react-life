import React from "react";
import BoardStore from "../stores/board_store";
import BoardActions from "../actions/board_actions";
import "./board_view.styl";

const BoardView = React.createClass({
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
