
class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.athlete = 0;
  }
  shoot() {
    this.athlete++;
    if (this.athlete >= 3){
      this.cranky = true;
    } 
    if (this.cranky === true || this.standing === false) {
      return 'NO!'
    } else {
      return 'Twang!!!'
    }
  }
  run() {
    this.athlete++;
    if (this.athlete >= 3){
      this.cranky = true;
    }
    if (this.standing === false) {
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!'
    }
  }
  sleep() {
    if (this.layingDown === true) {
      this.cranky = false;
      return 'ZZZZ';
    } else {
      return 'NO!'
    }
  }
  layDown() {
    if (this.standing === true) {
      this.standing = false;
      this.layingDown = true;
    }
  }
  standUp() {
    if (this.standing === false) {
      this.standing = true;
      this.layingDown = false;
      this.athlete = 0;
    }
  }
  drinkPotion() {
    if (this.layingDown === true || this.cranky !== true) {
      this.cranky = true;
      return 'Not while I\'m laying down!'
    } else {
      this.cranky = false;
    }
  }
}

module.exports = Centaur

//npm test mythical-creatures/test/centaur-test.js