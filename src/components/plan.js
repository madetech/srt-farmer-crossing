import { useEffect, useState } from "react";
import { FarmerCrossing } from "../services/FarmerCrossing";

const printSymbol = (num, symbol) => Array(num).fill(symbol);

const PlanStep = ({ step }) => {
  return (
    <div className="step">
      <span className="farm">
        <span className="sprite">
          {printSymbol(step.farm.farmer, "👨‍🌾")}
          {printSymbol(step.farm.geese, "🦆")}
          {printSymbol(step.farm.corn, "🌽")}
        </span>
      </span>
      <span className="river">
        <span className="sprite">
          {printSymbol(step.boat.farmer, "👨‍🌾")}
          {printSymbol(step.boat.geese, "🦆")}
          {printSymbol(step.boat.corn, "🌽")}
        </span>
      </span>
      <span className="market">
        <span className="sprite">
          {printSymbol(step.market.farmer, "👨‍🌾")}
          {printSymbol(step.market.geese, "🦆")}
          {printSymbol(step.market.corn, "🌽")}
        </span>
      </span>
    </div>
  );
};

export const Plan = ({ data: { corn, geese } }) => {
  const [plan, setPlan] = useState();

  useEffect(() => {
    const calculator = new FarmerCrossing();
    setPlan(calculator.calculateCrossingPlanForCornAndGeese({ corn, geese }));
  }, [corn, geese]);

  if (!plan) return null;
  if (plan.length === 0) return <p className="error">Not possible!</p>;
  return plan.map((step, i) => <PlanStep key={`${corn}-${geese}-${i}`} step={step} />);
};
