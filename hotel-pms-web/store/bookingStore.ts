import { create } from "zustand";
import type { CartExtra, CartRoom } from "@/types/cart";

type BookingState = {
  // Search / funnel state
  checkIn: string | null;
  checkOut: string | null;
  adults: number;
  children: number;
  childrenAges: number[];

  // Cart state
  cartId: number | null;
  selectedRooms: CartRoom[];
  mealPlanId: number | null;
  extras: CartExtra[];

  // Actions
  setDates: (checkIn: string | null, checkOut: string | null) => void;
  setGuests: (adults: number, children: number, ages: number[]) => void;

  setCartId: (cartId: number | null) => void;

  setSelectedRooms: (rooms: CartRoom[]) => void;
  setMealPlanId: (id: number | null) => void;

  setExtras: (extras: CartExtra[]) => void;
  resetBooking: () => void;
};

export const useBookingStore = create<BookingState>((set) => ({
  checkIn: null,
  checkOut: null,
  adults: 2,
  children: 0,
  childrenAges: [],

  cartId: null,
  selectedRooms: [],
  mealPlanId: null,
  extras: [],

  setDates: (checkIn, checkOut) => set({ checkIn, checkOut }),

  setGuests: (adults, children, ages) => {
    // Always normalize children ages length to children count
    const normalized = Array.from({ length: children }, (_, i) => ages?.[i] ?? 0);
    set({ adults, children, childrenAges: normalized });
  },

  setCartId: (cartId) => set({ cartId }),

  setSelectedRooms: (selectedRooms) => set({ selectedRooms }),
  setMealPlanId: (mealPlanId) => set({ mealPlanId }),

  setExtras: (extras) => set({ extras }),

  resetBooking: () =>
    set({
      checkIn: null,
      checkOut: null,
      adults: 2,
      children: 0,
      childrenAges: [],
      cartId: null,
      selectedRooms: [],
      mealPlanId: null,
      extras: [],
    }),
}));
