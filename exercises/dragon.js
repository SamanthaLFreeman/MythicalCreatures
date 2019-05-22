class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.chew = 0;
  }
  eat() {
    this.chew++;
    if (this.chew >= 3) {
      this.hungry = false;
    }
  }
}


 module.exports = Dragon

//npm test mythical-creatures/test/dragon-test.js