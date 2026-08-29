import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/services", label: "Layanan" },
  { to: "/barbers", label: "Barber" },
  { to: "/booking", label: "Booking" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/10 bg-charcoal/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid size-9 place-items-center rounded-lg bg-gold/15 ring-1 ring-gold/30">
            <span className="font-display text-lg leading-none text-gold">EL</span>
          </div>
          <div className="leading-none">
            <p className="font-display text-xl tracking-[0.18em] text-sand">EL LEGENDARY</p>
            <p className="mt-0.5 font-body text-[10px] uppercase tracking-[0.32em] text-sand-dim">
              Barbershop · Malang
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 font-cond text-sm tracking-wide text-sand-dim md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/booking"
          className="inline-flex items-center rounded-lg bg-gold py-2 pl-2 pr-3 font-cond text-sm font-medium text-charcoal ring-1 ring-gold/60 transition-opacity hover:opacity-90"
        >
          <span className="mr-1 text-base leading-none">›</span>Booking
        </Link>
      </div>
    </header>
  );
}
