import { odooClient } from "@/services/odooClient";
import type { BookingInitPayload } from "@/types/booking";
import type { BookingCartInitResponse, CartSummary, CartExtra } from "@/types/cart";

export async function initBooking(payload: BookingInitPayload): Promise<BookingCartInitResponse> {
  const { data } = await odooClient.post("/booking/init", payload);
  return data;
}

export async function updateCart(cartId: number, payload: { extras?: CartExtra[]; meal_plan_id?: number }): Promise<{ status: string }> {
  // Odoo controller should accept PATCH; if your Odoo uses POST, change here.
  const { data } = await odooClient.patch(`/cart/${cartId}`, payload);
  return data;
}

export async function getCartSummary(cartId: number): Promise<CartSummary> {
  const { data } = await odooClient.get(`/cart/${cartId}/summary`);
  return data;
}
