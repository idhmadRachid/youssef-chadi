"use client";

import { useState } from "react";
import { useBookingStore } from "@/store/bookingStore";
import { updateCart } from "@/services/booking";

export default function ExtrasPage() {
  const { cartId } = useBookingStore();
  const [serviceId, setServiceId] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function addExtra() {
    setError(null);
    if (!cartId) {
      setError("No cart. Please select rooms first.");
      return;
    }
    if (!serviceId) {
      setError("Enter a serviceId (demo).");
      return;
    }

    setLoading(true);
    try {
      await updateCart(cartId, { extras: [{ serviceId, quantity: qty }] });
      window.location.href = "/booking/checkout";
    } catch (e: any) {
      setError(e?.message || "Failed to update cart");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Extra services</h1>

      <div className="rounded-xl border bg-white p-4 space-y-3">
        <div className="text-sm text-gray-600">
          (Demo) Enter service id from Odoo extras endpoint.
        </div>

        <label className="block">
          <span className="text-sm font-medium">Service ID</span>
          <input
            type="number"
            value={serviceId || ""}
            onChange={(e) => setServiceId(Number(e.target.value))}
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
          onClick={addExtra}
          disabled={loading}
          className="rounded-lg bg-primary text-white px-4 py-2"
        >
          {loading ? "Updating..." : "Continue to checkout"}
        </button>
      </div>
    </main>
  );
}
