import React from "react";
import TodoListComponent from "./todo_list_component";

const TodoBoxComponent = React.createClass({
  render: function () {
    return <TodoListComponent/>
  }
});

export default TodoBoxComponent;
