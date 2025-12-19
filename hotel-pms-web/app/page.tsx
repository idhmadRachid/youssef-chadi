import BookingBar from "@/components/home/BookingBar";

const roomCards = [
  { title: "Deluxe Room", price: "$520 / Night", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=70" },
  { title: "Standard Room", price: "$450 / Night", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=70" },
  { title: "Superior Room", price: "$520 / Night", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=70" },
];

const facilityCards = [
  { title: "Restaurant & Bar", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=70", desc: "Fine dining, cocktails, and curated menus." },
  { title: "Spa & Wellness", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=70", desc: "Relaxing rituals, hammam, and massages." },
  { title: "Infinity Pool", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=70", desc: "Sunset views and poolside comfort." },
];

const updates = [
  { title: "A Journey into Our Luxurious Resort", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=70", date: "Oct 12, 2025" },
  { title: "Exclusive Dining Experiences at Our Resort", img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=70", date: "Oct 10, 2025" },
  { title: "Rejuvenate Secrets from Our Spa", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=70", date: "Oct 08, 2025" },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[72vh] min-h-[620px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=2000&q=75')",
          }}
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-6xl px-5 pt-20 text-white">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/85">
              A place made for unforgettable experiences
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">
              Welcome to Our Luxurious <br className="hidden md:block" /> Hotel & Resort
            </h1>

            {/* Booking Bar */}
            <div className="mt-10">
              <BookingBar />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center">
          <p className="mx-auto max-w-3xl font-serif text-2xl leading-relaxed text-[#3b332a] md:text-3xl">
            Curated to match your preferences and desires, our selection includes luxury resorts,
            exclusive tours, and transfers for an unparalleled experience.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.28em] text-[#8b6a3f]">
            <span className="h-px w-8 bg-[#8b6a3f]/60" />
            <span>Explore</span>
            <span className="h-px w-8 bg-[#8b6a3f]/60" />
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6a3f]">Rooms & Suites</p>
          <h2 className="mt-3 font-serif text-4xl text-[#2f281f]">
            Our Exquisite Rooms & Suites Collection
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {roomCards.map((r) => (
            <div key={r.title} className="group overflow-hidden bg-white shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.img}
                  alt={r.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="font-serif text-xl text-[#2f281f]">{r.title}</div>
                <div className="mt-2 text-sm text-[#6f6458]">
                  From <span className="font-semibold">{r.price}</span>
                </div>
                <a
                  href="/rooms"
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#8b6a3f] hover:underline"
                >
                  View Details <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARALLAX BANNER */}
      <section className="relative h-[260px] overflow-hidden md:h-[320px]">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=75')",
          }}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="font-serif text-5xl tracking-[0.18em] text-white/75 md:text-6xl">
            SEA PEARL
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-[#fbfaf7] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6a3f]">Facilities</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2f281f]">
              Explore Our Exclusive Resort Facilities
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {facilityCards.map((f) => (
              <div key={f.title} className="bg-white shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.img} alt={f.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="font-serif text-xl text-[#2f281f]">{f.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-[#6f6458]">{f.desc}</p>
                  <button className="mt-4 rounded-full border border-[#8b6a3f]/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#8b6a3f] hover:bg-[#8b6a3f]/10">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#f7f4ee] py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="mx-auto h-14 w-14 overflow-hidden rounded-full bg-white shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
              alt="Guest"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 font-serif text-2xl leading-relaxed text-[#2f281f] md:text-3xl">
            “Exceptional resort! From the exquisite dining to the serene spa and the captivating
            infinity pool, every moment was pure bliss.”
          </div>

          <div className="mt-6 flex items-center justify-center gap-1 text-[#2f8f3a]">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-xl">{s}</span>
            ))}
          </div>

          <div className="mt-4 text-xs uppercase tracking-[0.28em] text-[#8b6a3f]">
            Susan Baker
          </div>
        </div>
      </section>

      {/* SERVICES (image left + bullets right) */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=70"
                alt="Services"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 hidden w-40 overflow-hidden rounded-2xl shadow-card md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=70"
                alt="Extra"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6a3f]">Services</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2f281f]">
              Your Every Hotel Need, Met with Our Diverse Services.
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-[#6f6458]">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#8b6a3f]" /> Airport transfer & chauffeur</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#8b6a3f]" /> Spa & wellness treatments</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#8b6a3f]" /> Fine dining & rooftop lounge</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#8b6a3f]" /> Guided tours & experiences</li>
            </ul>

            <a
              href="/rooms"
              className="mt-8 inline-flex rounded-full bg-[#8b6a3f] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:opacity-95"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCES GRID */}
      <section className="bg-[#fbfaf7] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6a3f]">Experiences</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2f281f]">
              Explore Unforgettable Experiences
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=70",
              "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=70",
              "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=70",
              "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=70"
            ].map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Experience" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST UPDATES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6a3f]">News & Blog</p>
          <h2 className="mt-3 font-serif text-4xl text-[#2f281f]">
            Explore Our Latest Updates
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {updates.map((u) => (
            <article key={u.title} className="bg-white shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={u.img} alt={u.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-[#8b6a3f]">{u.date}</div>
                <h3 className="mt-3 font-serif text-xl text-[#2f281f]">{u.title}</h3>
                <a href="#" className="mt-4 inline-flex text-xs uppercase tracking-[0.22em] text-[#8b6a3f] hover:underline">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#f7f4ee] py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6a3f]">Newsletter</p>
          <h3 className="mt-3 font-serif text-3xl text-[#2f281f]">
            For Exclusive Offers & Updates Subscribe <br className="hidden md:block" /> Our SeaPearl Newsletter!
          </h3>

          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3">
            <input
              className="h-12 flex-1 rounded-full border border-[#8b6a3f]/25 bg-white px-5 text-sm outline-none"
              placeholder="Enter your email"
            />
            <button className="h-12 rounded-full bg-[#8b6a3f] px-6 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:opacity-95">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
