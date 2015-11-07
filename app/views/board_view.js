import React from "react";
import BoardStore from "../stores/board_store";
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
  render: function () {
    return <div className="board">
      {this.state.cells.map((row, i) => {
        return <div className="row" key={i}>
          {row.map((cell, j) => {
            return <div className={`cell ${cell}`} key={j}/>
          })}
        </div>
      })}
    </div>
  }
});

export default BoardView;
