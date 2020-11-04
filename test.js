const FarmerCrossing = require('./')

describe('FarmerCrossing', () => {
    it('is a class', () => {
        const instance = new FarmerCrossing()
        expect(instance).toBeInstanceOf(FarmerCrossing)
    })
})