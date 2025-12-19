export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-bold">Riad Tidar</div>
            <p className="mt-2 text-sm text-gray-600">
              A modern headless hotel booking experience powered by Odoo PMS.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Quick links</div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a className="hover:underline" href="/rooms">Rooms</a></li>
              <li><a className="hover:underline" href="/booking/select-rooms">Booking</a></li>
              <li><a className="hover:underline" href="/account">Account</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Contact</div>
            <p className="mt-2 text-gray-600">Marrakech, Morocco</p>
            <p className="text-gray-600">WhatsApp: +212 ...</p>
            <p className="text-gray-600">Email: contact@riad-tidar.com</p>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Riad Tidar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
