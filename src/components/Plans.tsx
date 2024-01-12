import React from "react";

type Plan = {
  name: string;
  price: number;
};

interface PlansProps {
  plans: Plan[];
}

const Plans = ({ plans }: PlansProps) => {
  return (
    <div>
      {plans.map(({ name, price }, index) => (
        <li key={index}>
          {name} - ${price}
        </li>
      ))}
    </div>
  );
};

export default Plans;
