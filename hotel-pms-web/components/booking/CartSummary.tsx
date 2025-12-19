"use client";

import { useEffect, useState } from "react";
import { useBookingStore } from "@/store/bookingStore";
import { getCartSummary } from "@/services/booking";
import type { CartSummary as CartSummaryType } from "@/types/cart";

export default function CartSummary() {
  const { cartId } = useBookingStore();
  const [summary, setSummary] = useState<CartSummaryType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!cartId) return;
      try {
        const res = await getCartSummary(cartId);
        if (!cancelled) setSummary(res);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load cart summary");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [cartId]);

  if (!cartId) {
    return (
      <div className="rounded-xl border bg-white p-4 text-sm text-gray-600">
        No cart yet. Please select a room first.
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border bg-white p-4 text-sm text-red-600">
        {error}
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="rounded-xl border bg-white p-4 text-sm text-gray-600">
        Loading summary...
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-4 space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-600">Tax</span>
        <span className="font-medium">{summary.tax} {summary.currency}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Total</span>
        <span className="font-semibold">{summary.total} {summary.currency}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Deposit</span>
        <span className="font-semibold">{summary.deposit} {summary.currency}</span>
      </div>
    </div>
  );
}
