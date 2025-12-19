import { odooClient } from "@/services/odooClient";
import type { RoomListItem } from "@/types/room";

export type AvailabilitySearchPayload = {
  check_in: string;
  check_out: string;
  rooms: number;
  adults: number;
  children: number;
  children_ages: number[];
  currency?: string;
};

export async function searchAvailability(payload: AvailabilitySearchPayload): Promise<{ rooms: RoomListItem[] }> {
  const { data } = await odooClient.post("/availability/search", payload);
  return data;
}
