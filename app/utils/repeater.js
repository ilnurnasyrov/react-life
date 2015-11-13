class Repeater {
  constructor (delay) {
    this.delay = delay || 200;
  }

  changeDelay(calc) {
    this.delay = calc(this.delay);

    if(this.interval) this._run();
  }

  run(callback) {
    this.callback = callback;
    this._run();
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  _run() {
    this.stop();
    this.interval = setInterval(this.callback, this.delay);
  }
}

export default Repeater;
