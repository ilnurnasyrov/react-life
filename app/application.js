import ReactDOM from "react-dom";
import React from "react";
import ApplicationComponent from "./components/application_component";

function main() {
  let g = document.createElement('div');
  g.setAttribute("id", "application");
  document.body.appendChild(g);

  ReactDOM.render(
    <ApplicationComponent />,
    document.getElementById("application")
  );
};

main();
