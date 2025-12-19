import { getDashboard } from "@/services/account";

export default async function AccountPage() {
  const data = await getDashboard();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">My Account</h1>
      <p>Loyalty Points: {data.loyalty.points}</p>
      <p>Tier: {data.loyalty.tier}</p>
    </div>
  );
}
