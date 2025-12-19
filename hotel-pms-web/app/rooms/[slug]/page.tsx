import type { RoomDetails } from "@/types/room";

async function fetchRoom(roomTypeIdOrSlug: string): Promise<RoomDetails> {
  // If your Odoo endpoint is /rooms/{id}, slug should map to id.
  // For now assume slug is numeric id.
  const id = Number(roomTypeIdOrSlug);
  const res = await fetch(`${process.env.NEXT_PUBLIC_ODOO_API_URL}/rooms/${id}`, {
    cache: "no-store",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to load room details");
  return res.json();
}

export default async function RoomDetailsPage({ params }: { params: { slug: string } }) {
  const room = await fetchRoom(params.slug);

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{room.name}</h1>

      <div className="rounded-xl border bg-white p-4">
        <div className="text-sm text-gray-700">
          Capacity: {room.capacity.adults} adults • {room.capacity.children} children
        </div>
        {room.description ? <p className="mt-2 text-gray-600">{room.description}</p> : null}
      </div>

      <a href="/rooms" className="text-sm underline">
        Back to rooms
      </a>
    </main>
  );
}
