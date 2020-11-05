import { useEffect, useState } from "react";
import { FarmerCrossing } from "../services/FarmerCrossing";

const printSymbol = (num, symbol) => Array(num).fill(symbol);

const PlanStep = ({ step }) => {
  return (
    <div className="step">
      {printSymbol(step.left.farmer, "👨‍🌾")}
      {printSymbol(step.left.geese, "🦆")}
      {printSymbol(step.left.corn, "🌽")}
      <span className="river">
        {printSymbol(step.boat.farmer, "👨‍🌾")}
        {printSymbol(step.boat.geese, "🦆")}
        {printSymbol(step.boat.corn, "🌽")}
      </span>
      {printSymbol(step.right.farmer, "👨‍🌾")}
      {printSymbol(step.right.geese, "🦆")}
      {printSymbol(step.right.corn, "🌽")}
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
  return plan.map((step) => <PlanStep step={step} />);
};
