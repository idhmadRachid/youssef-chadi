export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <a href="/" className="font-bold">Riad Tidar</a>
          <nav className="flex gap-4 text-sm">
            <a href="/account" className="hover:underline">Dashboard</a>
            <a href="/account/bookings" className="hover:underline">Bookings</a>
            <a href="/account/invoices" className="hover:underline">Invoices</a>
            <a href="/account/loyalty" className="hover:underline">Loyalty</a>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </div>
  );
}
