import { Plan } from "./Plan";

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

  parseNumber(num) {
    const parsed = parseInt(num, 10);
    if (isNaN(num)) {
      throw new Error("Invalid input");
    }

    return parsed
  }

  calculateCrossingPlanForCornAndGeese({ corn: rawCorn, geese: rawGeese }) {
    const geese = this.parseNumber(rawGeese)
    const corn = this.parseNumber(rawCorn)

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
    } else if (corn === 2 && geese === 1) {
      return this.getPlanForTwoAndOne('corn', 'geese')
    } else if (corn === 1 && geese === 2) {
      return this.getPlanForTwoAndOne('geese', 'corn')
    }
  }

  getInitialState(
    firstResourceName,
    secondResourceName,
    firstResourceCount,
    secondResourceCount
  ) {
    return {
      farm: {
        [firstResourceName]: firstResourceCount,
        [secondResourceName]: secondResourceCount,
        farmer: 1,
      },
      boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
      market: { geese: 0, corn: 0, farmer: 0 },
    };
  }

  getPlanForZeroAndZero() {
    const plan = new Plan("corn", 0, "geese", 0)
    plan.moveAcross('market')
    
    return plan.getState()
  }

  getPlanForOneAndZero(firstResourceName, secondResourceName) {
    const plan = new Plan(firstResourceName, 1, secondResourceName, 0)
    plan.moveAcross('market', firstResourceName)

    return plan.getState()
  }

  getPlanForOneAndOne() {
    const plan = new Plan("corn", 1, "geese", 1)
    plan.moveAcross('market', "corn")
    plan.moveAcross('farm')
    plan.moveAcross('market', "geese")
    
    return plan.getState()
  }

  getPlanForTwoAndOne(firstResourceName, secondResourceName) {
    const plan = new Plan(firstResourceName, 2, secondResourceName, 1)
    plan.moveAcross('market', secondResourceName)
    plan.moveAcross('farm')
    plan.moveAcross('market', firstResourceName)
    plan.moveAcross('farm', secondResourceName)
    plan.moveAcross('market', firstResourceName)
    plan.moveAcross('farm')
    plan.moveAcross('market', secondResourceName)

    return plan.getState()
  }
}
