import React from "react";
import BoardStore from "../stores/board_store";
import BoardActions from "../actions/board_actions";
import "./board_view.styl";

const BoardView = React.createClass({
  getInitialState: function () {
    return BoardStore.getState();
  },
  componentDidMount: function () {
    BoardStore.listen(this.onChange);
  },
  componentWillUnmount() {
    BoardStore.unlisten(this.onChange);
  },
  onChange: function (state) {
    this.setState(state);
  },
  toggleCell: function (x, y) {
    return () => { BoardActions.toggleCell(x, y) }
  },
  render: function () {
    return <div className="board">
      {this.state.cells.map((column, x) => {
        return <div className="column" key={x}>
          {column.map((cell, y) => {
            return <div className={`cell ${cell}`} key={y} onClick={this.toggleCell(x, y)}/>
          })}
        </div>
      })}
    </div>
  }
});

export default BoardView;
