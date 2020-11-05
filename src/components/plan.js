import { useEffect, useState } from "react";
import { FarmerCrossing } from "../services/FarmerCrossing";

const printSymbol = (num, symbol) => num > 0 ? <span className="sprite"><span className="spriteContents>"><span className="spriteImage">{symbol}</span><span className="spriteNumber">{num}</span></span></span> : "";

const PlanStep = ({ step }) => {
  return (
    <div className="step">
      <span className="farm">
          {printSymbol(step.farm.farmer, "👨‍🌾")}
          {printSymbol(step.farm.geese, "🦆")}
          {printSymbol(step.farm.corn, "🌽")}
      </span>
      <span className="river">
          {printSymbol(step.boat.farmer, "👨‍🌾")}
          {printSymbol(step.boat.geese, "🦆")}
          {printSymbol(step.boat.corn, "🌽")}
      </span>
      <span className="market">
          {printSymbol(step.market.farmer, "👨‍🌾")}
          {printSymbol(step.market.geese, "🦆")}
          {printSymbol(step.market.corn, "🌽")}
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
  return <div className="plan">{plan.map((step, i) => <PlanStep key={`${corn}-${geese}-${i}`} step={step} />)}</div>;
};
