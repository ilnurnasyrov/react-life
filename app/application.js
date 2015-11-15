import ReactDOM from "react-dom";
import React from "react";
import ApplicaitonView from "./views/application_view";

function main() {
  ReactDOM.render(
    <ApplicaitonView />,
    applicationDom()
  );
};

function applicationDom() {
  let g = document.createElement('div');
  g.setAttribute("id", "application");
  g.setAttribute("class", "container");
  document.body.appendChild(g);

  return document.getElementById("application");
}

main();
