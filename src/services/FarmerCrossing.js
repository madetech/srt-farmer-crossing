export class FarmerCrossing {
  calculatePriceOfCrossing(itemsToTransport) {
    const parsedItemsToTransport = parseInt(itemsToTransport, 10);
    if (isNaN(parsedItemsToTransport)) {
      throw new Error("Invalid input");
    }

    if (parsedItemsToTransport < 0) {
      throw new Error("Invalid input");
    }

    if (parsedItemsToTransport === 0) {
      return 25;
    }

    const numberOfTrips = parsedItemsToTransport * 2 - 1;

    return numberOfTrips * 25;
  }

  calculateCrossingPlanForCornAndGeese({ corn, geese }) {
    if (geese >= 2 && corn >= 2) {
      return [];
    }

    if (corn === 0 && geese === 0) {
      return this.getPlanForZeroAndZero();
    } else if (corn === 1 && geese === 0) {
      return this.getPlanForOneAndZero("corn", "geese");
    } else if (corn === 0 && geese === 1) {
      return this.getPlanForOneAndZero("geese", "corn");
    } else if (corn === 1 && geese === 1) {
      return this.getPlanForOneAndOne();
    }
  }

  getInitialState(
    firstResourceName,
    secondResourceName,
    firstResourceCount,
    secondResourceCount
  ) {
    return {
      left: {
        [firstResourceName]: firstResourceCount,
        [secondResourceName]: secondResourceCount,
        farmer: 1,
      },
      boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
      right: { geese: 0, corn: 0, farmer: 0 },
    };
  }

  getPlanForZeroAndZero() {
    const firstResourceName = "geese";
    const secondResourceName = "corn";

    return [
      this.getInitialState(firstResourceName, secondResourceName, 0, 0),
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 0 },
        boat: {
          [firstResourceName]: 0,
          [secondResourceName]: 0,
          farmer: 1,
          direction: "market",
        },
        right: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 0 },
      },
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 0 },
        boat: {
          [firstResourceName]: 0,
          [secondResourceName]: 0,
          farmer: 0,
          direction: "none",
        },
        right: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 1 },
      },
    ];
  }

  getPlanForOneAndZero(firstResourceName, secondResourceName) {
    return [
      this.getInitialState(firstResourceName, secondResourceName, 1, 0),
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 0 },
        boat: {
          [firstResourceName]: 1,
          [secondResourceName]: 0,
          farmer: 1,
          direction: "market",
        },
        right: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 0 },
      },
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 0 },
        boat: {
          [firstResourceName]: 0,
          [secondResourceName]: 0,
          farmer: 0,
          direction: "none",
        },
        right: { [firstResourceName]: 1, [secondResourceName]: 0, farmer: 1 },
      },
    ];
  }

  getPlanForOneAndOne() {
    const firstResourceName = "corn";
    const secondResourceName = "geese";

    return [
      this.getInitialState(firstResourceName, secondResourceName, 1, 1),
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 1, farmer: 0 },
        boat: {
          [firstResourceName]: 1,
          [secondResourceName]: 0,
          farmer: 1,
          direction: "market",
        },
        right: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 0 },
      },
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 1, farmer: 0 },
        boat: {
          [firstResourceName]: 0,
          [secondResourceName]: 0,
          farmer: 0,
          direction: "none",
        },
        right: { [firstResourceName]: 1, [secondResourceName]: 0, farmer: 1 },
      },
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 1, farmer: 0 },
        boat: {
          [firstResourceName]: 0,
          [secondResourceName]: 0,
          farmer: 1,
          direction: "farm",
        },
        right: { [firstResourceName]: 1, [secondResourceName]: 0, farmer: 0 },
      },
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 1, farmer: 1 },
        boat: {
          [firstResourceName]: 0,
          [secondResourceName]: 0,
          farmer: 0,
          direction: "none",
        },
        right: { [firstResourceName]: 1, [secondResourceName]: 0, farmer: 0 },
      },
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 0 },
        boat: {
          [firstResourceName]: 0,
          [secondResourceName]: 1,
          farmer: 1,
          direction: "market",
        },
        right: { [firstResourceName]: 1, [secondResourceName]: 0, farmer: 0 },
      },
      {
        left: { [firstResourceName]: 0, [secondResourceName]: 0, farmer: 0 },
        boat: {
          [firstResourceName]: 0,
          [secondResourceName]: 0,
          farmer: 0,
          direction: "none",
        },
        right: { [firstResourceName]: 1, [secondResourceName]: 1, farmer: 1 },
      },
    ];
  }
}
