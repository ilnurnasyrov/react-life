import React from "react";
import TodoListComponent from "./todo_list_component";

const ApplicationComponent = React.createClass({
  render: function () {
    return <TodoListComponent/>;
  }
});

export default ApplicationComponent;
