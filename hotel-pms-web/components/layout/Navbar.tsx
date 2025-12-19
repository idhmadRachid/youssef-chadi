"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-white">
        <Link href="/" className="font-serif text-lg tracking-wide">
          SeaPearl
        </Link>

        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.22em] md:flex">
          <Link href="/" className="opacity-90 hover:opacity-100">Home</Link>
          <Link href="/rooms" className="opacity-90 hover:opacity-100">Rooms</Link>
          <Link href="/booking/select-rooms" className="opacity-90 hover:opacity-100">Booking</Link>
          <Link href="/contact" className="opacity-90 hover:opacity-100">Contact</Link>
        </nav>

        <Link
          href="/rooms"
          className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur hover:bg-white/15"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
