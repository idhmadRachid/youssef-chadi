export type MealPlan = {
  id: number;
  code: string; // BB, HB, FB, AI
  price?: number; // optional delta
};

export type RoomPrice = {
  total: number;
  per_night?: number;
  currency: string;
};

export type RoomCapacity = {
  adults: number;
  children: number;
};

export type RoomListItem = {
  room_type_id: number;
  name: string;
  capacity: RoomCapacity;
  price: RoomPrice;
  meal_plans: MealPlan[];
  images: { url: string }[];
};

export type RoomDetails = {
  id: number;
  name: string;
  description?: string;
  capacity: RoomCapacity;
  gallery: { url: string }[];
  meal_plans: MealPlan[];
};
