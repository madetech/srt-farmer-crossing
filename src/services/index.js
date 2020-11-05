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

    let plan = [];

    const initialState = {
      left: { geese: geese, corn: corn, farmer: 1 },
      boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
      right: { geese: 0, corn: 0, farmer: 0 },
    };

    plan.push(initialState);

    plan.push({
      left: { geese: geese, corn: 0, farmer: 0 },
      boat: { geese: 0, corn: 1, farmer: 1, direction: "market" },
      right: { geese: 0, corn: 0, farmer: 0 },
    });

    plan.push({
      left: { geese: geese, corn: 0, farmer: 0 },
      boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
      right: { geese: 0, corn: 1, farmer: 1 },
    });

    if (geese > 0) {
      plan.push({
        left: { geese: geese, corn: 0, farmer: 0 },
        boat: { geese: 0, corn: 0, farmer: 1, direction: "farm" },
        right: { geese: 0, corn: 1, farmer: 0 },
      });

      plan.push({
        left: { geese: geese, corn: 0, farmer: 1 },
        boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
        right: { geese: 0, corn: 1, farmer: 0 },
      });

      plan.push({
        left: { geese: 0, corn: 0, farmer: 0 },
        boat: { geese: geese, corn: 0, farmer: 1, direction: "market" },
        right: { geese: 0, corn: 1, farmer: 0 },
      });

      plan.push({
        left: { geese: 0, corn: 0, farmer: 0 },
        boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
        right: { geese: geese, corn: 1, farmer: 1 },
      });
    }

    return plan;
  }
}
