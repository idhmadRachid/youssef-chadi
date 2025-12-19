export type LoyaltyPoints = {
  points: number;
  tier: string; // Silver, Gold, Platinum...
};

export type LoyaltyHistoryItem = {
  id: number;
  date: string;
  type: "earn" | "spend" | "expire" | "adjust";
  points: number;
  reference?: string;
  note?: string;
};
