class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    };
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    for (var i = 0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i]);
    }
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
    } else { 
      return infant;
    }

    if (this.humanWards.length >= 3) {
      this.disposition = 'Good natured'
    }

  }
}

module.exports = Fairy;

//npm test mythical-creatures/test/fairy-test.js