class Interval {
  constructor (delay) {
    this.delay = delay || 400;
  }

  changeDelay(calc) {
    this.delay = calc(this.delay);
    if(this.interval) {
      this.stop();
      this._run();
    }
  }

  run(callback) {
    this.delay = this.delay || 400;
    this.callback = callback;
    this.stop();
    this._run();
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  _run() {
    this.interval = setInterval(this.callback, this.delay);
  }
}

export default Interval;
