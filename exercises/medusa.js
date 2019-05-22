
class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];

  }
  stare(victim) {
    victim.stoned = true;
    if (this.statues.length === 3) {
    this.statues[0].stoned = false;
    this.statues.splice(0, 1, victim)
  } else {
    this.statues.push(victim);
  }
  }
}


module.exports = Medusa

// npm test mythical-creatures/test/medusa-test.js