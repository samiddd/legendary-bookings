import { createFileRoute, Link } from "@tanstack/react-router";

import { barbers } from "@/data/mock";

export const Route = createFileRoute("/barbers")({
  head: () => ({
    meta: [
      { title: "Barber Kami — El Legendary Barbershop Malang" },
      {
        name: "description",
        content:
          "Kenali barber El Legendary Malang: spesialisasi, rating pelanggan, dan jadwal kerja masing-masing.",
      },
      { property: "og:title", content: "Barber Kami — El Legendary Malang" },
      {
        property: "og:description",
        content: "Profil barber senior El Legendary lengkap dengan spesialisasi dan rating.",
      },
    ],
  }),
  component: BarbersPage,
});

function BarbersPage() {
  return (
    <div className="bg-charcoal">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <p className="font-cond text-xs uppercase tracking-[0.28em] text-brick">Tim Kami</p>
        <h1 className="mt-2 max-w-[20ch] text-balance font-display text-5xl leading-none text-sand sm:text-6xl">
          Barber yang Anda Percaya
        </h1>
        <p className="mt-4 max-w-[52ch] text-pretty font-body text-sand-dim">
          Setiap barber punya keahlian sendiri. Pilih yang paling cocok dengan gaya yang Anda mau.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {barbers.map((barber) => (
            <article
              key={barber.id}
              className={`flex gap-5 rounded-[16px] bg-coal p-5 ring-1 ring-black/5 transition-colors hover:ring-gold/30 ${
                barber.active ? "" : "opacity-70"
              }`}
            >
              <img
                src={barber.photo}
                alt={`Foto barber ${barber.name}`}
                loading="lazy"
                width={512}
                height={640}
                className="aspect-[4/5] w-32 shrink-0 rounded-[10px] object-cover sm:w-40"
              />
              <div className="flex min-w-0 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-cond text-xl font-semibold text-sand">{barber.name}</h2>
                  <span className="shrink-0 font-cond text-sm text-gold">★ {barber.rating}</span>
                </div>
                <p className="mt-1 font-cond text-sm text-brick">{barber.specialty}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-sand-dim">{barber.bio}</p>
                <p className="mt-3 font-body text-xs text-sand-dim">◷ {barber.schedule}</p>
                <div className="mt-auto pt-4">
                  {barber.active ? (
                    <Link
                      to="/booking"
                      className="inline-flex items-center rounded-[10px] bg-gold py-2 pl-3 pr-4 font-cond text-sm font-medium text-charcoal ring-1 ring-gold/60 transition-opacity hover:opacity-90"
                    >
                      Booking dengan {barber.name.split(" ")[0]} <span className="ml-1.5">→</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center rounded-[10px] border border-sand/15 px-3 py-2 font-cond text-sm text-sand-dim">
                      Sedang tidak menerima booking
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
