export type CartSummary = {
  total: number;
  tax: number;
  deposit: number;
  currency: string;
  breakdown?: Array<{
    label: string;
    amount: number;
  }>;
};

export type CartExtra = {
  serviceId: number;
  quantity: number;
};

export type CartRoom = {
  roomTypeId: number;
  quantity: number;
};

export type BookingCartInitResponse = {
  cart_id: number;
  expires_at?: string;
};
