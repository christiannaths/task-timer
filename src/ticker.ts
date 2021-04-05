class Ticker {
  ticker: any;
  fn: () => void;
  ms?: number;

  constructor(fn: () => void, ms = 100) {
    this.fn = fn;
    this.ms = ms;
  }

  start() {
    this.ticker = setInterval(this.fn, this.ms);
    return this.ticker;
  }
  stop({ force = false } = {}) {
    if (!force) this.fn();
    clearTimeout(this.ticker);
  }
}

export default Ticker;
