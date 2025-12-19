"use client";

import Link from "next/link";
import type { RoomListItem } from "@/types/room";

type Props = {
  room: RoomListItem;
  selectHref: string; // precomputed in server or client
};

export default function RoomCard({ room, selectHref }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden">
      <div className="aspect-[16/10] bg-gray-100">
        {room.images?.[0]?.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={room.images[0].url} alt={room.name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-sm text-gray-500">
            No image
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight">{room.name}</h3>
          <div className="text-right">
            <div className="text-sm text-gray-500">Total</div>
            <div className="font-bold">
              {room.price.total} {room.price.currency}
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Capacity: {room.capacity.adults} adults • {room.capacity.children} children
        </div>

        <Link
          href={selectHref}
          className="block text-center w-full mt-2 rounded-lg bg-primary text-white py-2 font-medium hover:opacity-95"
        >
          Select room
        </Link>
      </div>
    </div>
  );
}
