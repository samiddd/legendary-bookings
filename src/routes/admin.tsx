import { createFileRoute, Link } from "@tanstack/react-router";

import { products, recentOrders, rupiah, todayBookings } from "@/data/mock";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Dashboard Admin — El Legendary Barbershop Malang" },
      {
        name: "description",
        content:
          "Ringkasan operasional harian El Legendary: booking hari ini, booking pending, order produk, dan stok menipis.",
      },
      { property: "og:title", content: "Dashboard Admin — El Legendary Malang" },
      {
        property: "og:description",
        content: "Pantau booking dan order produk barbershop dalam satu halaman.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminDashboard,
});

const statusStyles: Record<string, string> = {
  Pending: "bg-brick/20 text-brick ring-1 ring-brick/40",
  Confirmed: "bg-gold/15 text-gold ring-1 ring-gold/40",
  Completed: "bg-sand/10 text-sand-dim ring-1 ring-sand/20",
  Cancelled: "bg-sand/5 text-sand-dim ring-1 ring-sand/10",
  Paid: "bg-gold/15 text-gold ring-1 ring-gold/40",
  "Ready for Pickup": "bg-leather/30 text-sand ring-1 ring-leather/50",
};

function AdminDashboard() {
  const pending = todayBookings.filter((b) => b.status === "Pending").length;
  const lowStock = products.filter((p) => p.stock <= 5);

  const stats = [
    { label: "Booking hari ini", value: todayBookings.length, note: "29 Agu 2026" },
    { label: "Booking mendatang", value: 12, note: "7 hari ke depan" },
    { label: "Booking pending", value: pending, note: "Perlu dikonfirmasi" },
    { label: "Order produk", value: recentOrders.length, note: "Belum diambil" },
    { label: "Produk stok rendah", value: lowStock.length, note: "≤ 5 unit" },
  ];

  return (
    <div className="min-h-screen bg-charcoal">
      <header className="border-b border-gold/10 bg-coal">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-lg bg-gold/15 ring-1 ring-gold/30">
              <span className="font-display text-lg leading-none text-gold">EL</span>
            </div>
            <div className="leading-none">
              <p className="font-display text-xl tracking-[0.18em] text-sand">PANEL ADMIN</p>
              <p className="mt-0.5 font-body text-[10px] uppercase tracking-[0.32em] text-sand-dim">
                El Legendary Malang
              </p>
            </div>
          </div>
          <Link to="/" className="font-cond text-sm text-sand-dim transition-colors hover:text-gold">
            Lihat situs →
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <h1 className="font-display text-4xl leading-none text-sand sm:text-5xl">
          Ringkasan Operasional
        </h1>
        <p className="mt-2 font-body text-sm text-sand-dim">
          Sabtu, 29 Agustus 2026 · Jam operasional 09.00 – 21.00 WIB
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[14px] bg-coal p-5 ring-1 ring-black/5">
              <p className="font-cond text-xs uppercase tracking-[0.2em] text-sand-dim">
                {stat.label}
              </p>
              <p className="mt-3 font-display text-4xl leading-none text-gold">{stat.value}</p>
              <p className="mt-2 font-body text-xs text-sand-dim">{stat.note}</p>
            </div>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="font-display text-3xl leading-none text-sand">Booking Hari Ini</h2>
          <div className="mt-4 overflow-x-auto rounded-[14px] bg-coal ring-1 ring-black/5">
            <table className="w-full min-w-[820px] text-left">
              <thead>
                <tr className="border-b border-sand/10 font-cond text-xs uppercase tracking-[0.15em] text-sand-dim">
                  <th className="px-5 py-3">Kode</th>
                  <th className="px-5 py-3">Customer</th>
                  <th className="px-5 py-3">WhatsApp</th>
                  <th className="px-5 py-3">Layanan</th>
                  <th className="px-5 py-3">Barber</th>
                  <th className="px-5 py-3">Jam</th>
                  <th className="px-5 py-3">Harga</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="font-body text-sm text-sand">
                {todayBookings.map((b) => (
                  <tr key={b.code} className="border-b border-sand/5 last:border-0">
                    <td className="px-5 py-3 font-cond text-gold">{b.code}</td>
                    <td className="px-5 py-3">{b.customer}</td>
                    <td className="px-5 py-3 text-sand-dim">{b.whatsapp}</td>
                    <td className="px-5 py-3">{b.service}</td>
                    <td className="px-5 py-3 text-sand-dim">{b.barber}</td>
                    <td className="px-5 py-3 font-cond">{b.time}</td>
                    <td className="px-5 py-3">{rupiah(b.price)}</td>
                    <td className="px-5 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 font-cond text-xs ${statusStyles[b.status]}`}
                      >
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-3xl leading-none text-sand">Order Produk Terbaru</h2>
            <div className="mt-4 space-y-3">
              {recentOrders.map((order) => (
                <div
                  key={order.code}
                  className="flex items-center justify-between gap-4 rounded-[12px] bg-coal p-4 ring-1 ring-black/5"
                >
                  <div className="min-w-0">
                    <p className="font-cond text-sand">
                      <span className="text-gold">{order.code}</span> · {order.customer}
                    </p>
                    <p className="mt-1 truncate font-body text-xs text-sand-dim">{order.items}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-display text-lg text-gold">{rupiah(order.total)}</p>
                    <span
                      className={`mt-1 inline-block rounded-full px-2.5 py-0.5 font-cond text-xs ${statusStyles[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl leading-none text-sand">Produk Stok Rendah</h2>
            <div className="mt-4 space-y-3">
              {lowStock.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 rounded-[12px] bg-coal p-4 ring-1 ring-brick/25"
                >
                  <img
                    src={product.photo}
                    alt={product.name}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-cond text-sand">{product.name}</p>
                    <p className="font-body text-xs text-sand-dim">{rupiah(product.price)}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-brick/20 px-3 py-1 font-cond text-xs text-brick ring-1 ring-brick/40">
                    Sisa {product.stock}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
