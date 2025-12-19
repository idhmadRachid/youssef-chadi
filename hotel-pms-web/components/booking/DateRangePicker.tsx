"use client";

import { useBookingStore } from "@/store/bookingStore";

export default function DateRangePicker() {
  const { checkIn, checkOut, setDates } = useBookingStore();

  return (
    <div className="bg-white rounded-xl shadow-card border border-gray-100 p-4">
      <div className="grid grid-cols-2 gap-3">
        <label className="space-y-1">
          <div className="text-sm font-medium">Check-in</div>
          <input
            type="date"
            value={checkIn ?? ""}
            onChange={(e) => setDates(e.target.value || null, checkOut)}
            className="w-full rounded-lg border px-3 py-2"
          />
        </label>

        <label className="space-y-1">
          <div className="text-sm font-medium">Check-out</div>
          <input
            type="date"
            value={checkOut ?? ""}
            onChange={(e) => setDates(checkIn, e.target.value || null)}
            className="w-full rounded-lg border px-3 py-2"
          />
        </label>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Dates are required to search availability (pricing is calculated by Odoo).
      </p>
    </div>
  );
}
