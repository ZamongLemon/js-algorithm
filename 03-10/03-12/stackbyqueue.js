class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(value) {
    this.q1.push(value);
    return this;
  }

  pop() {
    if (this.q1.length === 0) {
      return null;
    }

    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    const poppedValue = this.q1.shift();

    [this.q1, this.q2] = [this.q2, this.q1];

    return poppedValue;
  }
}
