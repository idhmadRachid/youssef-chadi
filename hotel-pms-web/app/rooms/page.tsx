import RoomsGrid from "@/components/rooms/RoomsGrid";
import { searchAvailability } from "@/services/availability";

export default async function RoomsPage({ searchParams }: any) {
  const checkIn = searchParams.checkIn;
  const checkOut = searchParams.checkOut;

  if (!checkIn || !checkOut) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-bold">Rooms</h1>
        <p className="mt-2 text-gray-600">Please choose dates first.</p>
        <a className="mt-4 inline-block rounded-lg bg-primary px-4 py-2 text-white" href="/">
          Go to Home
        </a>
      </main>
    );
  }

  const adults = Number(searchParams.adults || 2);
  const children = Number(searchParams.children || 0);
  const childrenAges = JSON.parse(searchParams.childrenAges || "[]");

  // const data = await searchAvailability({
  //   check_in: checkIn,
  //   check_out: checkOut,
  //   rooms: 1,
  //   adults,
  //   children,
  //   children_ages: childrenAges,
  // });

  const data = {
    "rooms": [
      {
        "room_type_id": 3,
        "name": "Deluxe Suite",
        "capacity": {
          "adults": 2,
          "children": 2
        },
        "price": {
          "total": 2800,
          "per_night": 700,
          "currency": "MAD"
        },
        "meal_plans": [
          { "id": 1, "code": "BB", "price": 0 },
          { "id": 2, "code": "HB", "price": 300 }
        ],
        "images": []
      }
    ]
}

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Available rooms</h1>
          <p className="text-sm text-gray-600">
            {checkIn} → {checkOut} • {adults} adults • {children} children
          </p>
        </div>
        <a href="/" className="text-sm underline">Change dates</a>
      </div>

      <RoomsGrid
        rooms={data.rooms}
        checkIn={checkIn}
        checkOut={checkOut}
        adults={adults}
        children={children}
        childrenAges={childrenAges}
      />

      {!data.rooms?.length && (
        <div className="mt-10 rounded-xl border bg-white p-6 text-gray-600">
          No rooms available for these dates/guests.
        </div>
      )}
    </main>
  );
}
