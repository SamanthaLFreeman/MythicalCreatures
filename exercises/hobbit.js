class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false
    this.hasRing = false;

    this.name === 'Frodo' ? this.hasRing = true : this.hasRing = false;
  }
  celebrateBirthday() {
    this.age++;
    if (this.age >= 33) {
      this.adult = true;
    }
    this.age >= 101 ? this.old = true : this.old = false;
  }
}

module.exports = Hobbit

// npm test mythical-creatures/test/hobbit-test.js