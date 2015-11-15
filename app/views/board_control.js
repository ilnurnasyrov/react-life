import React from "react";
import BoardActions from "../actions/board_actions";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <div className="btn btn-info" onClick={this.randomize}>
        <span className="glyphicon glyphicon-random"></span>
      </div>
      <div className="btn btn-info" onClick={this.clear}>
        <span className="glyphicon glyphicon-trash"></span>
      </div>
      <div className="btn btn-success" onClick={this.play}>
        <span className="glyphicon glyphicon-play"></span>
      </div>
      <div className="btn btn-primary" onClick={this.stop}>
        <span className="glyphicon glyphicon-pause"></span>
      </div>
      <div className="btn-group">
        <div className="btn btn-info" onClick={this.speedDown}>
          <span className="glyphicon glyphicon-backward"></span>
        </div>
        <div className="btn btn-info" onClick={this.speedUp}>
          <span className="glyphicon glyphicon-forward"></span>
        </div>
      </div>
    </div>
  }
});

export default BoardControl;
