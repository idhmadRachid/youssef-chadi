import { getBookings } from "@/services/account";

export default async function BookingsPage() {
  const bookings = await getBookings();

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">My bookings</h1>

      <div className="rounded-xl border bg-white divide-y">
        {bookings.map((b) => (
          <a
            key={b.id}
            href={`/account/bookings/${b.id}`}
            className="p-4 block hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{b.number}</div>
                <div className="text-sm text-gray-500">
                  {b.check_in} → {b.check_out}
                </div>
              </div>
              <div className="text-sm font-semibold">{b.total}</div>
            </div>
            <div className="mt-1 text-xs text-gray-500">Status: {b.state}</div>
          </a>
        ))}
        {!bookings.length ? <div className="p-4 text-sm text-gray-600">No bookings yet.</div> : null}
      </div>
    </div>
  );
}
