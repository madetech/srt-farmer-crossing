export class Plan {
  constructor(
    firstResourceName,
    firstResourceCount,
    secondResourceName,
    secondResourceCount
  ) {
    this.firstResourceName = firstResourceName;
    this.firstResourceCount = firstResourceCount;
    this.secondResourceName = secondResourceName;
    this.secondResourceCount = secondResourceCount;

    this.plan = [this.getInitialState()];
  }

  getState() {
    return this.plan;
  }

  getInitialState() {
    return {
      farm: {
        [this.firstResourceName]: this.firstResourceCount,
        [this.secondResourceName]: this.secondResourceCount,
        farmer: 1,
      },
      boat: { geese: 0, corn: 0, farmer: 0, direction: "none" },
      market: { geese: 0, corn: 0, farmer: 0 },
    };
  }

  moveAcross(direction, resource) {
    const start = direction === "farm" ? "market" : "farm";
    const end = start === "market" ? "farm" : "market";
    const lastState = this.plan[this.plan.length - 1];
    const middleState = JSON.parse(JSON.stringify(lastState));

    if (resource) this.moveResourceIntoBoat(middleState, resource, start);
    this.moveFarmerIntoBoat(middleState, start, direction);

    const endState = JSON.parse(JSON.stringify(middleState));

    if (resource) this.moveResourceOutOfBoat(endState, resource, end);
    this.moveFarmerOutOfBoat(endState, end);

    this.plan.push(middleState, endState);
  }

  moveResourceIntoBoat(state, resource, fromLocation) {
    state[fromLocation][resource] = state[fromLocation][resource] - 1;
    state.boat[resource] = state.boat[resource] + 1;
  }

  moveFarmerIntoBoat(state, fromLocation, direction) {
    state[fromLocation].farmer = 0;
    state.boat.farmer = 1;
    state.boat.direction = direction;
  }

  moveResourceOutOfBoat(state, resource, toLocation) {
    state.boat[resource] = state.boat[resource] - 1;
    state[toLocation][resource] = state[toLocation][resource] + 1;
  }

  moveFarmerOutOfBoat(state, toLocation) {
    state[toLocation].farmer = 1;
    state.boat.farmer = 0;
    state.boat.direction = "none";
  }
}
