import React from "react";
import BoardActions from "../actions/board_actions";
import "./control_panel.styl";

const StartButton = React.createClass({
  onClick() {
    BoardActions.play();
  },
  render() {
    return <div className="playButton" onClick={this.onClick}>
      Play
    </div>
  }
})

const StopButton = React.createClass({
  onClick() {
    BoardActions.stop();
  },
  render() {
    return <div className="stopButton" onClick={this.onClick}>
      Stop
    </div>
  }
})

const ControlPanel = React.createClass({
  render() {
    return <div className="controllPanel">
      <StartButton/>
      <StopButton/>
    </div>
  }
});

export default ControlPanel;
