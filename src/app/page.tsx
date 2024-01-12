import BuildYourOwnPlan from "@/components/BuildYourOwnPlan";
import Plans from "@/components/Plans";

const plans = [
  { name: "Hourly Pass", price: 44.5 },
  { name: "Full Day Pass", price: 150.5 },
  { name: "Monthly Pass", price: 1160.0 },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Our Plans - Total Plans ({plans.length})</h1>
      <Plans plans={plans} />
      <BuildYourOwnPlan />
    </main>
  );
}
