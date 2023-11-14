const Band = require("./band");

class Bands {
  constructor() {
    this.bands = [];
  }

  addBand(band = new Band()) {
    this.bands.push(band);
  }

  getBands() {
    return this.bands;
  }

  deleteBand(id = "") {
    this.bands = this.bands.filter((band) => band.id !== id);
    return this.bands;
  }

  voteBand(id = "") {
    this.bands = this.bands.map((b) => {
      if (b.id === id) {
        b.votes++;
        return b;
      }
      return b;
    });
  }
}

module.exports = Bands;
