import ReactDOM from "react-dom";
import React from "react";
import ApplicaitonView from "./views/application_view";

function main() {
  let g = document.createElement('div');
  g.setAttribute("id", "application");
  document.body.appendChild(g);

  ReactDOM.render(
    <ApplicaitonView />,
    document.getElementById("application")
  );
};

main();
