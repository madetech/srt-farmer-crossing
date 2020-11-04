const FarmerCrossing = require('./')

describe('FarmerCrossing', () => {
    let instance
    
    beforeEach(() => {
        instance = new FarmerCrossing()
    })

    it('is a class', () => {
        expect(instance).toBeInstanceOf(FarmerCrossing)
    })

    it('when there are no bags of corn the price is 25p', () => {
        const totalPrice = instance.calculatePriceOfCrossing(0);

        expect(totalPrice).toEqual(25);
    })

    it('when there is one bag of corn the price is 25p', () => {
        const totalPrice = instance.calculatePriceOfCrossing(1);

        expect(totalPrice).toEqual(25);
    })

    it('when there are 2 bags of corn the price is 75p', () => {      
        const totalPrice = instance.calculatePriceOfCrossing(2);
        
        expect(totalPrice).toEqual(75);
    })

    it('when there are 100 bags of corn the price is 4975p', () => {      
        const totalPrice = instance.calculatePriceOfCrossing(100);
        
        expect(totalPrice).toEqual(4975);
    })

    it('when number in a string is provided the calculation works', () => {
        const getTotalPrice = () => instance.calculatePriceOfCrossing('5');

        expect(getTotalPrice).not.toThrowError("Invalid input")
        expect(getTotalPrice()).toEqual(225)
    })

    it('when a negative number is provided an error is thrown', () => {
        const getTotalPrice = () => instance.calculatePriceOfCrossing(-1);

        expect(getTotalPrice).toThrowError("Invalid input")
    })

    it('when invalid input is provided an error is thrown', () => {
        const getTotalPrice = () => instance.calculatePriceOfCrossing('invalid');

        expect(getTotalPrice).toThrowError("Invalid input")
    })
})