import { createFileRoute, Link } from "@tanstack/react-router";

import { rupiah, services, type Service } from "@/data/mock";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Layanan & Harga — El Legendary Barbershop Malang" },
      {
        name: "description",
        content:
          "Daftar lengkap layanan cukur dan perawatan El Legendary Malang beserta harga dan estimasi durasi.",
      },
      { property: "og:title", content: "Layanan & Harga — El Legendary Malang" },
      {
        property: "og:description",
        content: "Potongan klasik, cukur jenggot, perawatan rambut, hingga paket lengkap Legend.",
      },
    ],
  }),
  component: ServicesPage,
});

const groups: { title: string; category: Service["category"]; note: string }[] = [
  { title: "Cukur & Jenggot", category: "Cukur", note: "Potongan rapi dengan finishing handuk panas." },
  { title: "Perawatan", category: "Perawatan", note: "Rawat rambut dan kulit kepala secara berkala." },
];

function ServicesPage() {
  return (
    <div className="bg-charcoal">
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
        <p className="font-cond text-xs uppercase tracking-[0.28em] text-gold">Layanan &amp; Harga</p>
        <h1 className="mt-2 max-w-[20ch] text-balance font-display text-5xl leading-none text-sand sm:text-6xl">
          Semua Layanan Kami
        </h1>
        <p className="mt-4 max-w-[52ch] text-pretty font-body text-sand-dim">
          Harga sudah termasuk keramas dan penataan akhir. Durasi adalah estimasi rata-rata di
          kursi.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.category} className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <div className="mb-5 flex items-end justify-between gap-6 border-b border-sand/10 pb-4">
            <h2 className="font-display text-3xl leading-none text-sand sm:text-4xl">
              {group.title}
            </h2>
            <p className="hidden font-body text-sm text-sand-dim sm:block">{group.note}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.category === group.category)
              .map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col rounded-[14px] bg-coal p-6 ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:ring-gold/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-cond text-xl font-semibold text-sand">{service.name}</h3>
                    <span className="shrink-0 font-display text-2xl leading-none text-gold">
                      {rupiah(service.price)}
                    </span>
                  </div>
                  <p className="mt-2 font-body text-sm leading-relaxed text-sand-dim">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 font-cond text-xs text-sand-dim">
                    <span className="text-gold">◷</span> {service.duration} menit
                  </div>
                  <Link
                    to="/booking"
                    className="mt-5 inline-flex items-center justify-center rounded-[10px] border border-sand/20 px-4 py-2.5 font-cond text-sm font-medium text-sand transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    Booking layanan ini →
                  </Link>
                </div>
              ))}
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-coal p-8 ring-1 ring-gold/15 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl leading-none text-sand">Belum yakin pilih apa?</h2>
            <p className="mt-2 font-body text-sm text-sand-dim">
              Barber kami akan bantu menyesuaikan layanan dengan bentuk wajah Anda.
            </p>
          </div>
          <Link
            to="/booking"
            className="inline-flex shrink-0 items-center rounded-[10px] bg-gold py-2.5 pl-3 pr-4 font-cond text-sm font-medium text-charcoal ring-1 ring-gold/60 transition-opacity hover:opacity-90"
          >
            Booking Sekarang <span className="ml-1.5">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
