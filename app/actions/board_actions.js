import alt from "../alt";
import Interval from "../lib/interval";

let interval = new Interval();

class BoardActions {
  toggleCell(x, y) { this.dispatch({x: x, y: y}) }

  nextGeneration() { this.dispatch() }

  randomize() { this.dispatch() }

  clear() {
    this.dispatch();
    interval.stop();
  }

  play() { interval.run(this.actions.nextGeneration) }

  stop() { interval.stop() }

  speedUp () {
    interval.changeDelay((delay) => delay / 2.0);
  }

  speedDown() {
    interval.changeDelay((delay) => delay * 2.0);
  }
}

export default alt.createActions(BoardActions);
