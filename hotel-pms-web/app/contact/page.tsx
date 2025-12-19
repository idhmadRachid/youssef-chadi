export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-600">
        Reach us anytime for reservations, transfers, or special requests.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <div className="font-semibold">Address</div>
          <p className="mt-2 text-sm text-gray-600">Marrakech, Morocco</p>

          <div className="mt-4 font-semibold">WhatsApp</div>
          <p className="mt-2 text-sm text-gray-600">+212 ...</p>

          <div className="mt-4 font-semibold">Email</div>
          <p className="mt-2 text-sm text-gray-600">contact@riad-tidar.com</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-card">
          <div className="font-semibold">Message</div>
          <form className="mt-4 space-y-3">
            <input className="w-full rounded-lg border px-3 py-2" placeholder="Your name" />
            <input className="w-full rounded-lg border px-3 py-2" placeholder="Your email" />
            <textarea className="w-full rounded-lg border px-3 py-2" rows={5} placeholder="Your message" />
            <button className="rounded-lg bg-primary px-4 py-2 text-white font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
