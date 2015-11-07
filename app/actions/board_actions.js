import alt from "../alt";

let interval;

class BoardActions {
  nextGeneration() {
    this.dispatch();
  }

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
}

export default alt.createActions(BoardActions);
