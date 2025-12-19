import { odooClient } from "@/services/odooClient";
import type { BookingListItem } from "@/types/booking";
import type { LoyaltyPoints } from "@/types/loyalty";

export async function getDashboard(): Promise<{ bookings: BookingListItem[]; loyalty: LoyaltyPoints }> {
  const { data } = await odooClient.get("/account/dashboard");
  return data;
}

export async function getBookings(): Promise<BookingListItem[]> {
  const { data } = await odooClient.get("/account/bookings");
  return data;
}

export async function getBooking(id: number): Promise<any> {
  const { data } = await odooClient.get(`/account/bookings/${id}`);
  return data;
}

export async function getInvoices(): Promise<any[]> {
  const { data } = await odooClient.get("/account/invoices");
  return data;
}
