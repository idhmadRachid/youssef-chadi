"use client";

import { useBookingStore } from "@/store/bookingStore";

export default function GuestSelector() {
  const { adults, children, childrenAges, setGuests } = useBookingStore();

  const setAdults = (value: number) => setGuests(Math.max(1, value), children, childrenAges);

  const setChildren = (value: number) => setGuests(adults, Math.max(0, value), childrenAges);

  const setChildAge = (index: number, age: number) => {
    const next = [...childrenAges];
    next[index] = age;
    setGuests(adults, children, next);
  };

  return (
    <div className="bg-white rounded-xl shadow-card border border-gray-100 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Adults</div>
          <div className="text-xs text-gray-500">Age 18+</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-9 w-9 rounded-lg border" onClick={() => setAdults(adults - 1)}>-</button>
          <div className="w-10 text-center font-semibold">{adults}</div>
          <button className="h-9 w-9 rounded-lg border" onClick={() => setAdults(adults + 1)}>+</button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Children</div>
          <div className="text-xs text-gray-500">Age 0–17</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-9 w-9 rounded-lg border" onClick={() => setChildren(children - 1)}>-</button>
          <div className="w-10 text-center font-semibold">{children}</div>
          <button className="h-9 w-9 rounded-lg border" onClick={() => setChildren(children + 1)}>+</button>
        </div>
      </div>

      {children > 0 && (
        <div className="space-y-2">
          <div className="text-sm font-medium">Children ages</div>
          <div className="grid grid-cols-2 gap-2">
            {childrenAges.map((age, i) => (
              <label key={i} className="flex items-center justify-between gap-2 border rounded-lg p-2">
                <span className="text-sm text-gray-700">Child {i + 1}</span>
                <input
                  type="number"
                  min={0}
                  max={17}
                  value={age}
                  onChange={(e) => setChildAge(i, Number(e.target.value))}
                  className="w-20 rounded-md border px-2 py-1 text-sm"
                />
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
