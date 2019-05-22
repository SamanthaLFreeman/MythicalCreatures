class Wizard {
  constructor(objectName) {
    this.name = objectName.name;
    if (objectName.bearded === undefined) {
      this.bearded = true;
    } else {
      this.bearded = objectName.bearded;
    }
    this.isRested = true;
    this.magic = 0;
  }
  incantation(spell) {
    return spell.toUpperCase();
  }
  cast() {
    this.magic++;
    if (this.magic >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    } else {
      return 'MAGIC BULLET'
    }
  }
}

module.exports = Wizard

//npm test mythical-creatures/test/wizard-test.js