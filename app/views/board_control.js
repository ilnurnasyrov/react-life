import React from "react";
import BoardActions from "../actions/board_actions";
import "./board_control.styl";

const BoardControl = React.createClass({
  play() { BoardActions.play() },
  stop() { BoardActions.stop() },
  clear() { BoardActions.clear() },
  speedUp() { BoardActions.speedUp() },
  speedDown() { BoardActions.speedDown() },
  randomize() { BoardActions.randomize() },

  render() {
    return <div className="boardControl">
      <div className="button randomize" onClick={this.randomize}> Randomize </div>
      <div className="button clear" onClick={this.clear}> Clear </div>
      <div className="button play" onClick={this.play}> Play </div>
      <div className="button stop" onClick={this.stop}> Stop </div>
      <div className="button speedUp" onClick={this.speedUp}> Speed Up </div>
      <div className="button speedDown" onClick={this.speedDown}> Speed Down </div>
    </div>
  }
});

export default BoardControl;
