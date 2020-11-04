const FarmerCrossing = require('./')

describe('FarmerCrossing', () => {
    it('is a class', () => {
        const instance = new FarmerCrossing()
        expect(instance).toBeInstanceOf(FarmerCrossing)
    })

    it('when theres one bag of corn the price is 0p', () => {
        const instance = new FarmerCrossing()

        const totalPrice = instance.calculatePriceOfCrossing(0);

        expect(totalPrice).toEqual(0);
    })
})