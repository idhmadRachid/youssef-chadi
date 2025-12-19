"use client";

import { useBookingStore } from "@/store/bookingStore";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/80">{label}</div>
      {children}
    </div>
  );
}

export default function BookingBar() {
  const { checkIn, checkOut, adults, children, childrenAges, setDates, setGuests } = useBookingStore();

  const go = () => {
    if (!checkIn || !checkOut) return;
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: String(adults),
      children: String(children),
      childrenAges: JSON.stringify(childrenAges),
    });
    window.location.href = `/rooms?${params.toString()}`;
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid gap-3 rounded-2xl bg-[#8b6a3f] p-3 shadow-2xl md:grid-cols-5 md:gap-2 md:p-4">
        <Field label="Check-in">
          <input
            type="date"
            value={checkIn ?? ""}
            onChange={(e) => setDates(e.target.value || null, checkOut)}
            className="h-11 w-full rounded-xl bg-white/10 px-3 text-sm text-white outline-none ring-1 ring-white/15 placeholder:text-white/60"
          />
        </Field>

        <Field label="Check-out">
          <input
            type="date"
            value={checkOut ?? ""}
            onChange={(e) => setDates(checkIn, e.target.value || null)}
            className="h-11 w-full rounded-xl bg-white/10 px-3 text-sm text-white outline-none ring-1 ring-white/15"
          />
        </Field>

        <Field label="Adults">
          <input
            type="number"
            min={1}
            value={adults}
            onChange={(e) => setGuests(Math.max(1, Number(e.target.value)), children, childrenAges)}
            className="h-11 w-full rounded-xl bg-white/10 px-3 text-sm text-white outline-none ring-1 ring-white/15"
          />
        </Field>

        <Field label="Children">
          <input
            type="number"
            min={0}
            value={children}
            onChange={(e) => setGuests(adults, Math.max(0, Number(e.target.value)), childrenAges)}
            className="h-11 w-full rounded-xl bg-white/10 px-3 text-sm text-white outline-none ring-1 ring-white/15"
          />
        </Field>

        <button
          onClick={go}
          className="h-11 rounded-xl bg-black px-4 text-sm font-semibold text-white hover:opacity-95"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
}
