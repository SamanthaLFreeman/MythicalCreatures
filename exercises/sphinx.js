class Sphinx {
  constructor() {
    this.riddles = [];
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
  if (this.riddles.length > 3) {
    this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
  console.log(this.riddles.answer)
    this.riddles.pop();
  }
}

module.exports = Sphinx;

//npm test mythical-creatures/test/sphinx-test.js