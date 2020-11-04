class FarmerCrossing {
  calculatePriceOfCrossing(bagsOfCorn) {
    const parsedBagsOfCorn = parseInt(bagsOfCorn, 10);
    if (isNaN(parsedBagsOfCorn)) {
      throw "Invalid input";
    }

    if (parsedBagsOfCorn < 0) {
      throw "Invalid input";
    }

    if (parsedBagsOfCorn === 0) {
      return 25;
    }

    const numberOfTrips = parsedBagsOfCorn * 2 - 1;

    return numberOfTrips * 25;
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = FarmerCrossing;
} else {
  window.FarmerCrossing = FarmerCrossing;
}
