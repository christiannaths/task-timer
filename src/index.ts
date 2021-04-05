import Spinnies from "spinnies";
import Timer from "./timer";
import Ticker from "./ticker";
import Counter from "./counter";

const spinnies = new Spinnies();

interface Constructor {
  id: string;
  action: string;
  start?: number;
  units: string;
}

class ProgressCounter {
  id: string;
  timer: any;
  counter: any;
  ticker: any;

  constructor({ id, action, units, start = 0 }: Constructor) {
    this.id = id;
    this.timer = new Timer();
    this.counter = new Counter(start);
    this.ticker = new Ticker(() => {
      spinnies.update(this.id, {
        text: `${action} ${this.counter.get()} ${units}: ${this.timer.getS()}`,
      });
    });

    spinnies.add(this.id, {
      text: `${action} ${this.counter.get()} ${units}: ${this.timer.getS()}`,
    });
  }

  start() {
    this.timer.start();
    this.ticker.start();
  }

  incrementCount(n = 1) {
    this.counter.increment(n);
  }

  setCount(n = 1) {
    this.counter.set(n);
  }

  stop(status = "stopped") {
    this.ticker.stop({ force: true });
    spinnies.update(this.id, { status: status });
  }

  pass() {
    this.ticker.stop();
    spinnies.succeed(this.id);
  }

  fail() {
    this.ticker.stop();
    spinnies.fail(this.id);
  }
}

export default ProgressCounter;
