import { FarmerCrossing } from "./FarmerCrossing";

describe("FarmerCrossing", () => {
  let instance;

  beforeEach(() => {
    instance = new FarmerCrossing();
  });

  describe("calculatePriceOfCrossing", () => {
    it("when there are no bags of corn the price is 25p", () => {
      const totalPrice = instance.calculatePriceOfCrossing(0);

      expect(totalPrice).toEqual(25);
    });

    it("when there is one bag of corn the price is 25p", () => {
      const totalPrice = instance.calculatePriceOfCrossing(1);

      expect(totalPrice).toEqual(25);
    });

    it("when there are 2 bags of corn the price is 75p", () => {
      const totalPrice = instance.calculatePriceOfCrossing(2);

      expect(totalPrice).toEqual(75);
    });

    it("when there are 100 bags of corn the price is 4975p", () => {
      const totalPrice = instance.calculatePriceOfCrossing(100);

      expect(totalPrice).toEqual(4975);
    });

    it("when number in a string is provided the calculation works", () => {
      const getTotalPrice = () => instance.calculatePriceOfCrossing("5");

      expect(getTotalPrice).not.toThrowError("Invalid input");
      expect(getTotalPrice()).toEqual(225);
    });

    it("when a negative number is provided an error is thrown", () => {
      const getTotalPrice = () => instance.calculatePriceOfCrossing(-1);

      expect(getTotalPrice).toThrowError("Invalid input");
    });

    it("when invalid input is provided an error is thrown", () => {
      const getTotalPrice = () => instance.calculatePriceOfCrossing("invalid");

      expect(getTotalPrice).toThrowError("Invalid input");
    });
  });

  describe("calculateCrossingPlan", () => {
    it("when transporting no corn and no geese the successful plan is returned", () => {
      const crossingPlan = instance.calculateCrossingPlanForCornAndGeese({
        corn: 0,
        geese: 0,
      });

      const plan = [
        {
          farm: { geese: 0, corn: 0, farmer: 1 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 1, direction: "market" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 0, farmer: 1 },
        },
      ];

      expect(crossingPlan).toEqual(plan);
    });

    it("when transporting one corn and no geese the successful plan is returned", () => {
      const crossingPlan = instance.calculateCrossingPlanForCornAndGeese({
        corn: 1,
        geese: 0,
      });

      const plan = [
        {
          farm: { geese: 0, corn: 1, farmer: 1 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 1, farmer: 1, direction: "market" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 1, farmer: 1 },
        },
      ];

      expect(crossingPlan).toEqual(plan);
    });

    it("when transporting no corn and one goose the successful plan is returned", () => {
      const crossingPlan = instance.calculateCrossingPlanForCornAndGeese({
        corn: 0,
        geese: 1,
      });

      const plan = [
        {
          farm: { geese: 1, corn: 0, farmer: 1 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 1, corn: 0, farmer: 1, direction: "market" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 1, corn: 0, farmer: 1 },
        },
      ];

      expect(crossingPlan).toEqual(plan);
    });

    it("when transporting one corn and one goose the successful plan is returned", () => {
      const crossingPlan = instance.calculateCrossingPlanForCornAndGeese({
        corn: 1,
        geese: 1,
      });

      const plan = [
        {
          farm: { geese: 1, corn: 1, farmer: 1 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 1, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 1, farmer: 1, direction: "market" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 1, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 1, farmer: 1 },
        },
        {
          farm: { geese: 1, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 1, direction: "farm" },
          market: { geese: 0, corn: 1, farmer: 0 },
        },
        {
          farm: { geese: 1, corn: 0, farmer: 1 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 1, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 1, corn: 0, farmer: 1, direction: "market" },
          market: { geese: 0, corn: 1, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 1, corn: 1, farmer: 1 },
        },
      ];

      expect(crossingPlan).toEqual(plan);
    });

    it("when transporting two corn and one goose the successful plan is returned", () => {
      const crossingPlan = instance.calculateCrossingPlanForCornAndGeese({
        corn: 2,
        geese: 1,
      });

      const plan = [
        {
          farm: { geese: 1, corn: 2, farmer: 1 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 2, farmer: 0 },
          boat: { geese: 1, corn: 0, farmer: 1, direction: "market" },
          market: { geese: 0, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 2, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 1, corn: 0, farmer: 1 },
        },
        {
          farm: { geese: 0, corn: 2, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 1, direction: "farm" },
          market: { geese: 1, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 2, farmer: 1 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 1, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 1, farmer: 0 },
          boat: { geese: 0, corn: 1, farmer: 1, direction: "market" },
          market: { geese: 1, corn: 0, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 1, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 1, corn: 1, farmer: 1 },
        },
        {
          farm: { geese: 0, corn: 1, farmer: 0 },
          boat: { geese: 1, corn: 0, farmer: 1, direction: "farm" },
          market: { geese: 0, corn: 1, farmer: 0 },
        },
        {
          farm: { geese: 1, corn: 1, farmer: 1 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 1, farmer: 0 },
        },
        {
          farm: { geese: 1, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 1, farmer: 1, direction: "market" },
          market: { geese: 0, corn: 1, farmer: 0 },
        },
        {
          farm: { geese: 1, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 2, farmer: 1 },
        },
        {
          farm: { geese: 1, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 1, direction: "farm" },
          market: { geese: 0, corn: 2, farmer: 0 },
        },
        {
          farm: { geese: 1, corn: 0, farmer: 1 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 0, corn: 2, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 1, corn: 0, farmer: 1, direction: "market" },
          market: { geese: 0, corn: 2, farmer: 0 },
        },
        {
          farm: { geese: 0, corn: 0, farmer: 0 },
          boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
          market: { geese: 1, corn: 2, farmer: 1 },
        },
      ];

      expect(crossingPlan).toEqual(plan);
    });

    it("when transporting one corn and two geese the successful plan is returned", () => {
      const crossingPlan = instance.calculateCrossingPlanForCornAndGeese({
        corn: 1,
        geese: 2,
      });

      const plan = [
        {
          farm: { corn: 1, geese: 2, farmer: 1 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 0, geese: 0, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 2, farmer: 0 },
          boat: { corn: 1, geese: 0, farmer: 1, direction: "market" },
          market: { corn: 0, geese: 0, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 2, farmer: 0 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 1, geese: 0, farmer: 1 },
        },
        {
          farm: { corn: 0, geese: 2, farmer: 0 },
          boat: { corn: 0, geese: 0, farmer: 1, direction: "farm" },
          market: { corn: 1, geese: 0, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 2, farmer: 1 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 1, geese: 0, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 1, farmer: 0 },
          boat: { corn: 0, geese: 1, farmer: 1, direction: "market" },
          market: { corn: 1, geese: 0, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 1, farmer: 0 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 1, geese: 1, farmer: 1 },
        },
        {
          farm: { corn: 0, geese: 1, farmer: 0 },
          boat: { corn: 1, geese: 0, farmer: 1, direction: "farm" },
          market: { corn: 0, geese: 1, farmer: 0 },
        },
        {
          farm: { corn: 1, geese: 1, farmer: 1 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 0, geese: 1, farmer: 0 },
        },
        {
          farm: { corn: 1, geese: 0, farmer: 0 },
          boat: { corn: 0, geese: 1, farmer: 1, direction: "market" },
          market: { corn: 0, geese: 1, farmer: 0 },
        },
        {
          farm: { corn: 1, geese: 0, farmer: 0 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 0, geese: 2, farmer: 1 },
        },
        {
          farm: { corn: 1, geese: 0, farmer: 0 },
          boat: { corn: 0, geese: 0, farmer: 1, direction: "farm" },
          market: { corn: 0, geese: 2, farmer: 0 },
        },
        {
          farm: { corn: 1, geese: 0, farmer: 1 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 0, geese: 2, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 0, farmer: 0 },
          boat: { corn: 1, geese: 0, farmer: 1, direction: "market" },
          market: { corn: 0, geese: 2, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 0, farmer: 0 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 1, geese: 2, farmer: 1 },
        },
      ];

      expect(crossingPlan).toEqual(plan);
    });

    it("when transporting zero corn and two geese the successful plan is returned", () => {
      const crossingPlan = instance.calculateCrossingPlanForCornAndGeese({
        corn: 0,
        geese: 2,
      });

      const plan = [
        {
          farm: { corn: 0, geese: 2, farmer: 1 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 0, geese: 0, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 1, farmer: 0 },
          boat: { corn: 0, geese: 1, farmer: 1, direction: "market" },
          market: { corn: 0, geese: 0, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 1, farmer: 0 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 0, geese: 1, farmer: 1 },
        },
        {
          farm: { corn: 0, geese: 1, farmer: 0 },
          boat: { corn: 0, geese: 0, farmer: 1, direction: "farm" },
          market: { corn: 0, geese: 1, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 1, farmer: 1 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 0, geese: 1, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 0, farmer: 0 },
          boat: { corn: 0, geese: 1, farmer: 1, direction: "market" },
          market: { corn: 0, geese: 1, farmer: 0 },
        },
        {
          farm: { corn: 0, geese: 0, farmer: 0 },
          boat: { corn: 0, geese: 0, farmer: 0, direction: "none" },
          market: { corn: 0, geese: 2, farmer: 1 },
        },
      ];

      expect(crossingPlan).toEqual(plan);
    });

    it("when transporting more than one corn and one goose an unsuccessful plan is returned", () => {
      const crossingPlan = instance.calculateCrossingPlanForCornAndGeese({
        corn: 2,
        geese: 2,
      });

      expect(crossingPlan).toEqual([]);
    });
  });
});
