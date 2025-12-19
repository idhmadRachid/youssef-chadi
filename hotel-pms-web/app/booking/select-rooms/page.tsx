"use client";

import { useState } from "react";
import { useBookingStore } from "@/store/bookingStore";
import { initBooking } from "@/services/booking";

export default function SelectRoomsPage() {
  const { checkIn, checkOut, adults, children, childrenAges, setCartId } = useBookingStore();
  const [roomTypeId, setRoomTypeId] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function createCart() {
    setError(null);
    if (!checkIn || !checkOut) {
      setError("Please select dates first.");
      return;
    }
    if (!roomTypeId) {
      setError("Please choose a room type id (demo input).");
      return;
    }

    setLoading(true);
    try {
      const res = await initBooking({
        rooms: [{ room_type_id: roomTypeId, quantity: qty }],
        check_in: checkIn,
        check_out: checkOut,
        guests: { adults, children, children_ages: childrenAges },
      });
      setCartId(res.cart_id);
      window.location.href = "/booking/extras";
    } catch (e: any) {
      setError(e?.message || "Failed to init booking");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Select rooms</h1>

      <div className="rounded-xl border bg-white p-4 space-y-3">
        <div className="text-sm text-gray-600">
          (Demo) Enter a room_type_id from your Odoo availability response.
        </div>

        <label className="block">
          <span className="text-sm font-medium">Room Type ID</span>
          <input
            type="number"
            value={roomTypeId || ""}
            onChange={(e) => setRoomTypeId(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Quantity</span>
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          onClick={createCart}
          disabled={loading}
          className="rounded-lg bg-primary text-white px-4 py-2"
        >
          {loading ? "Creating..." : "Continue"}
        </button>
      </div>
    </main>
  );
}
