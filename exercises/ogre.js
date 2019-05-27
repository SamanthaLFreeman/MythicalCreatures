class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter === 3) {
      this.swings++;
    } else if (human.encounterCounter === 6) {
      this.swings++;
    } else {
      return
    }
    if (this.swings === 2) {
      human.knockedOut = true;
    }
 
  }

  swingAt(human) {
    this.swings++;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;

//npm test mythical-creatures/test/ogre-test.js