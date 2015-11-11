import React from "react";
import BoardView from "./board_view";
import BoardControl from "./board_control";

const ApplicationView = React.createClass({
  render() {
    return <div>
      <BoardView/>
      <BoardControl/>
    </div>
  }
});

export default ApplicationView;
