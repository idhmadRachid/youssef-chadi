"use client";

import RoomCard from "@/components/rooms/RoomCard";
import type { RoomListItem } from "@/types/room";

export default function RoomsGrid({
  rooms,
  checkIn,
  checkOut,
  adults,
  children,
  childrenAges,
}: {
  rooms: RoomListItem[];
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  childrenAges: number[];
}) {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {rooms.map((room) => {
        const params = new URLSearchParams({
          roomTypeId: String(room.room_type_id),
          checkIn,
          checkOut,
          adults: String(adults),
          children: String(children),
          childrenAges: JSON.stringify(childrenAges),
        });

        return (
          <RoomCard
            key={room.room_type_id}
            room={room}
            selectHref={`/booking/select-rooms?${params.toString()}`}
          />
        );
      })}
    </div>
  );
}
