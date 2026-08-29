import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero-barbershop.jpg";
import mapImage from "@/assets/map-malang.jpg";
import { barbers, products, rupiah, services } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Legendary Barbershop Malang — Booking Cukur Online" },
      {
        name: "description",
        content:
          "Barbershop klasik di pusat kota Malang. Lihat layanan, barber, produk grooming, dan pesan kursi Anda secara online.",
      },
      { property: "og:title", content: "El Legendary Barbershop Malang" },
      {
        property: "og:description",
        content:
          "Ritual cukur klasik: kursi kulit, pisau baja, handuk panas. Booking kursi Anda dalam empat langkah.",
      },
    ],
  }),
  component: Home,
});

const advantages = [
  {
    icon: "❖",
    title: "Pisau Cukur Baja",
    text: "Cukur kumis dan garis rambut dengan silet baja yang diasah manual setiap hari.",
  },
  {
    icon: "▤",
    title: "Handuk Panas",
    text: "Uap hangat membuka pori sebelum cukur, membuat garis lebih rapi dan nyaman.",
  },
  {
    icon: "✦",
    title: "Barber Senior",
    text: "Dipimpin oleh barber dengan pengalaman lebih dari tujuh tahun di kursi cukur.",
  },
];

function Home() {
  const featured = services.filter((s) => s.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-3 py-1 font-cond text-[11px] uppercase tracking-[0.28em] text-gold">
              <span className="size-1.5 rounded-full bg-brick" />
              Est. 2016 · Pusat Kota Malang
            </div>
            <h1 className="mt-6 max-w-[18ch] font-display text-6xl leading-none text-sand sm:text-7xl">
              Ketajaman yang Dijaga Sejak Dulu
            </h1>
            <p className="mt-5 max-w-[46ch] text-pretty font-body text-base leading-relaxed text-sand-dim sm:text-lg">
              Kursi kulit tua, pisau cukur baja, dan handuk panas — ritual cukur klasik yang kami
              jaga dengan teliti di tiap potongan.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center rounded-[10px] bg-gold py-2.5 pl-3 pr-4 font-cond text-sm font-medium text-charcoal ring-1 ring-gold/60 transition-opacity hover:opacity-90"
              >
                Booking Sekarang <span className="ml-1.5">→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-[10px] border border-sand/20 px-4 py-2.5 font-cond text-sm font-medium text-sand transition-colors hover:border-gold/50 hover:text-gold"
              >
                Lihat Layanan
              </Link>
            </div>
            <div className="mt-9 flex items-center gap-6 border-t border-sand/10 pt-6">
              <div>
                <p className="font-display text-2xl leading-none text-gold">4.9</p>
                <p className="mt-1 font-body text-xs text-sand-dim">Rating pelanggan</p>
              </div>
              <div className="h-8 w-px bg-sand/15" />
              <div>
                <p className="font-display text-2xl leading-none text-sand">12k+</p>
                <p className="mt-1 font-body text-xs text-sand-dim">Potongan selesai</p>
              </div>
              <div className="h-8 w-px bg-sand/15" />
              <div>
                <p className="font-display text-2xl leading-none text-sand">6</p>
                <p className="mt-1 font-body text-xs text-sand-dim">Barber ahli</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroImage}
              alt="Interior barbershop klasik dengan kursi kulit dan pisau cukur baja"
              width={1080}
              height={1300}
              className="aspect-[4/5] w-full rounded-[14px] object-cover ring-1 ring-gold/15"
            />
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="bg-coal">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="font-cond text-xs uppercase tracking-[0.28em] text-brick">
                Kenapa El Legendary
              </p>
              <h2 className="mt-2 max-w-[22ch] text-balance font-display text-4xl leading-tight text-sand sm:text-5xl">
                Ritual Cukur Klasik, Dijaga Teliti
              </h2>
            </div>
            <p className="hidden max-w-[32ch] text-pretty font-body text-sm text-sand-dim md:block">
              Setiap detail ditata agar Anda keluar dengan rasa percaya diri yang sama.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-charcoal p-6 ring-1 ring-black/5 transition-colors hover:ring-gold/30"
              >
                <div className="grid size-10 place-items-center rounded-lg bg-leather/30 text-lg text-gold ring-1 ring-leather/40">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-cond text-lg font-semibold text-sand">{item.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-sand-dim">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="font-cond text-xs uppercase tracking-[0.28em] text-gold">
                Layanan &amp; Harga
              </p>
              <h2 className="mt-2 max-w-[22ch] text-balance font-display text-4xl leading-tight text-sand sm:text-5xl">
                Pilih Potongan Anda
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden font-cond text-sm text-sand-dim transition-colors hover:text-gold sm:inline-flex"
            >
              Lihat semua →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <div
                key={service.id}
                className="rounded-[14px] bg-coal p-6 ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:ring-gold/30"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BARBER */}
      <section className="bg-coal">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8">
            <p className="font-cond text-xs uppercase tracking-[0.28em] text-brick">Tim Kami</p>
            <h2 className="mt-2 max-w-[22ch] text-balance font-display text-4xl leading-tight text-sand sm:text-5xl">
              Barber yang Anda Percaya
            </h2>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-3">
            {barbers.map((barber) => (
              <div
                key={barber.id}
                className="w-64 shrink-0 snap-start rounded-[14px] bg-charcoal p-5 ring-1 ring-black/5 transition-colors hover:ring-gold/30"
              >
                <img
                  src={barber.photo}
                  alt={`Foto barber ${barber.name}`}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="aspect-[4/5] w-full rounded-[10px] object-cover"
                />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-cond text-lg font-semibold text-sand">{barber.name}</h3>
                  <span className="font-cond text-sm text-gold">★ {barber.rating}</span>
                </div>
                <p className="mt-1 font-body text-xs text-sand-dim">{barber.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8">
            <p className="font-cond text-xs uppercase tracking-[0.28em] text-gold">
              Etalase Grooming
            </p>
            <h2 className="mt-2 max-w-[22ch] text-balance font-display text-4xl leading-tight text-sand sm:text-5xl">
              Produk Rawat Harian
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-[14px] bg-coal p-5 ring-1 ring-black/5"
              >
                <img
                  src={product.photo}
                  alt={product.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="aspect-square w-full rounded-[10px] object-cover"
                />
                <h3 className="mt-4 font-cond text-base font-semibold text-sand">{product.name}</h3>
                <p className="mt-1 font-body text-xs text-sand-dim">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl text-gold">{rupiah(product.price)}</span>
                  <span className="font-cond text-xs text-sand-dim">Stok {product.stock}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING RINGKAS */}
      <section className="bg-coal">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8 text-center">
            <p className="font-cond text-xs uppercase tracking-[0.28em] text-gold">Booking</p>
            <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-sand sm:text-5xl">
              Reservasi Kursi Anda
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl bg-charcoal ring-1 ring-black/5">
            <div className="flex border-b border-sand/10">
              {["Layanan", "Barber", "Jadwal", "Konfirmasi"].map((label, i) => (
                <div
                  key={label}
                  className={`flex flex-1 items-center gap-2 px-4 py-3 ${i === 0 ? "bg-gold/10" : "border-l border-sand/10"}`}
                >
                  <span
                    className={`grid size-5 place-items-center rounded-full font-cond text-xs ${
                      i === 0
                        ? "bg-gold text-charcoal"
                        : "bg-coal text-sand-dim ring-1 ring-sand/20"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={`font-cond text-sm ${i === 0 ? "text-sand" : "text-sand-dim"}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {featured.slice(0, 4).map((service, i) => (
                  <div
                    key={service.id}
                    className={`flex items-center justify-between gap-3 rounded-[10px] bg-coal p-4 ${
                      i === 0 ? "ring-2 ring-gold" : "ring-1 ring-sand/10"
                    }`}
                  >
                    <span className="font-cond font-medium text-sand">
                      {service.name}
                      <span className="ml-1 text-sm text-sand-dim">· {service.duration} mnt</span>
                    </span>
                    <span className="shrink-0 font-display text-lg text-gold">
                      {rupiah(service.price)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Link
                  to="/booking"
                  className="inline-flex items-center rounded-[10px] bg-gold py-2.5 pl-3 pr-4 font-cond text-sm font-medium text-charcoal ring-1 ring-gold/60 transition-opacity hover:opacity-90"
                >
                  Mulai Booking <span className="ml-1.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="font-cond text-xs uppercase tracking-[0.28em] text-brick">Lokasi</p>
              <h2 className="mt-2 max-w-[20ch] text-balance font-display text-4xl leading-tight text-sand sm:text-5xl">
                Di Jantung Kota Malang
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <span className="shrink-0 text-gold">⚐</span>
                  <div>
                    <p className="font-cond font-medium text-sand">
                      Jl. Ijen Boulevard No. 12, Malang
                    </p>
                    <p className="font-body text-sm text-sand-dim">Seberang alun-alun kota</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 text-gold">◷</span>
                  <div>
                    <p className="font-cond font-medium text-sand">Senin – Sabtu</p>
                    <p className="font-body text-sm text-sand-dim">09.00 – 21.00 WIB</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 text-gold">✆</span>
                  <div>
                    <p className="font-cond font-medium text-sand">0812-3456-7890</p>
                    <p className="font-body text-sm text-sand-dim">Hubungi via WhatsApp</p>
                  </div>
                </div>
              </div>
              <Link
                to="/booking"
                className="mt-7 inline-flex items-center rounded-[10px] bg-gold py-2.5 pl-3 pr-4 font-cond text-sm font-medium text-charcoal ring-1 ring-gold/60 transition-opacity hover:opacity-90"
              >
                Booking Sekarang <span className="ml-1.5">→</span>
              </Link>
            </div>
            <img
              src={mapImage}
              alt="Peta lokasi El Legendary Barbershop di pusat kota Malang"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/3] w-full rounded-[14px] object-cover ring-1 ring-gold/15"
            />
          </div>
        </div>
      </section>
    </>
  );
}
