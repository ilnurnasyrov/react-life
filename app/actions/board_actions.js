import alt from "../alt";

class BoardActions {
  start() {
    this.interval = setInterval(function () {
      this.dispatch();
    }.bind(this), 200)
  }

  stop() {
    clearInterval(this.interval)
  }
}

export default alt.createActions(BoardActions);
