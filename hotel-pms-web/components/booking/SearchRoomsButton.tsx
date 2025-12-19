"use client";

import { useBookingStore } from "@/store/bookingStore";

export default function SearchRoomsButton() {
  const { checkIn, checkOut, adults, children, childrenAges } = useBookingStore();

  const disabled = !checkIn || !checkOut;

  const go = () => {
    const params = new URLSearchParams({
      checkIn: checkIn || "",
      checkOut: checkOut || "",
      adults: String(adults),
      children: String(children),
      childrenAges: JSON.stringify(childrenAges),
    });
    window.location.href = `/rooms?${params.toString()}`;
  };

  return (
    <button
      onClick={go}
      disabled={disabled}
      className="flex items-center justify-center rounded-xl bg-primary px-4 py-3 font-semibold text-white hover:opacity-95 disabled:opacity-50"
    >
      Search Rooms
    </button>
  );
}
