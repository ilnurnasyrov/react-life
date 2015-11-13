import alt from "../alt";
import Repeater from "../utils/repeater";

let repeater = new Repeater();

class BoardActions {
  toggleCell(x, y) { this.dispatch({x: x, y: y}) }

  nextGeneration() { this.dispatch() }

  randomize() { this.dispatch() }

  clear() {
    this.dispatch();
    repeater.stop();
  }

  play() { repeater.run(this.actions.nextGeneration) }

  stop() { repeater.stop() }

  speedUp () {
    repeater.changeDelay((delay) => delay / 2.0);
  }

  speedDown() {
    repeater.changeDelay((delay) => delay * 2.0);
  }
}

export default alt.createActions(BoardActions);
