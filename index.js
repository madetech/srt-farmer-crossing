class FarmerCrossing {
    calculatePriceOfCrossing(bagsOfCorn) {
        if (bagsOfCorn === 0) {
            return 0;
        }

        const numberOfTrips = bagsOfCorn * 2 - 1;

        return numberOfTrips * 25;
    }

}

if (module && module.exports) {
    module.exports = FarmerCrossing;
} else {
    window.FarmerCrossing = FarmerCrossing;
}