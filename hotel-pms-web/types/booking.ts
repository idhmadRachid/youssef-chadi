export type BookingGuestInfo = {
  fullName: string;
  phone?: string;
  email?: string;
  nationality?: string;
  documentNumber?: string;
};

export type BookingInitPayload = {
  rooms: Array<{
    room_type_id: number;
    quantity: number;
  }>;
  check_in: string;
  check_out: string;
  guests: {
    adults: number;
    children: number;
    children_ages: number[];
  };
  meal_plan_id?: number;
};

export type BookingListItem = {
  id: number;
  number: string;
  check_in: string;
  check_out: string;
  state: string;
  total: number;
  currency?: string;
};
