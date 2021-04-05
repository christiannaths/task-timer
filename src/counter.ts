class Counter {
  count: number;

  constructor(start = 0) {
    this.count = start;
  }

  increment(n = 1) {
    this.count = this.count + n;
    return this.count;
  }
  get() {
    return this.count;
  }
  set(n: number) {
    this.count = n;
    return this.count;
  }
  reset() {
    this.count = 0;
    return this.count;
  }
}

export default Counter;
