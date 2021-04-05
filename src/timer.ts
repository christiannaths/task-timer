class Timer {
  startTime: number;

  constructor() {
    this.startTime = 0;
  }

  start() {
    this.startTime = Date.now();
  }
  getS() {
    if (!this.startTime) return 0 + "s";
    return ((Date.now() - this.startTime) / 1000).toFixed(1) + "s";
  }
}

export default Timer;
