export default function ConfirmationPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-3">
      <h1 className="text-2xl font-bold">Booking confirmed</h1>
      <p className="text-gray-600">
        Your booking has been confirmed. You will receive WhatsApp / email confirmation from Odoo.
      </p>

      <a className="underline" href="/account/bookings">
        View my bookings
      </a>
    </main>
  );
}
