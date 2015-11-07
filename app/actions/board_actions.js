import alt from "../alt";

let interval;

class BoardActions {
  play() {
    this.dispatch();
    if (interval) clearInterval(interval);

    interval = setInterval(function () {
      this.actions.nextGeneration();
    }.bind(this), 200)
  }

  stop() {
    this.dispatch();
    clearInterval(interval)
  }

  nextGeneration() {
    this.dispatch();
  }

  toggleCell(x, y) {
    this.dispatch({x: x, y: y});
  }
}

export default alt.createActions(BoardActions);
