const FarmerCrossing = require('./')

describe('FarmerCrossing', () => {
    let instance
    
    beforeEach(() => {
        instance = new FarmerCrossing()
    })

    it('is a class', () => {
        expect(instance).toBeInstanceOf(FarmerCrossing)
    })

    it('when there is one bag of corn the price is 0p', () => {
        const totalPrice = instance.calculatePriceOfCrossing(0);

        expect(totalPrice).toEqual(0);
    })

    it('when there are 2 bags of corn the price is 75p', () => {      
        const totalPrice = instance.calculatePriceOfCrossing(2);
        
        expect(totalPrice).toEqual(75);
    })

    it('when there are 100 bags of corn the price is 4975p', () => {      
        const totalPrice = instance.calculatePriceOfCrossing(100);
        
        expect(totalPrice).toEqual(4975);
    })
})