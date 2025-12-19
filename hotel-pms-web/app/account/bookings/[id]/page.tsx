import { getBooking } from "@/services/account";

export default async function BookingDetailsPage({ params }: { params: { id: string } }) {
  const booking = await getBooking(Number(params.id));

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Booking #{booking.number || booking.id}</h1>

      <div className="rounded-xl border bg-white p-4 space-y-2">
        <div className="text-sm text-gray-600">
          Dates: <span className="font-medium">{booking.check_in} → {booking.check_out}</span>
        </div>
        <div className="text-sm text-gray-600">
          Status: <span className="font-medium">{booking.state}</span>
        </div>
        <div className="text-sm text-gray-600">
          Total: <span className="font-semibold">{booking.total}</span>
        </div>
      </div>

      <a href="/account/bookings" className="text-sm underline">
        Back to bookings
      </a>
    </div>
  );
}
