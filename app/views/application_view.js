import React from "react";
import BoardView from "./board_view";
import ControlPanel from "./control_panel";

const ApplicationView = React.createClass({
  render: function () {
    return <div>
      <BoardView/>
      <ControlPanel/>
    </div>
  }
});

export default ApplicationView;
