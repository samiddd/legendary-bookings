import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/10 bg-coal">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <div className="grid size-9 place-items-center rounded-lg bg-gold/15 ring-1 ring-gold/30">
              <span className="font-display text-lg leading-none text-gold">EL</span>
            </div>
            <div className="leading-none">
              <p className="font-display text-xl tracking-[0.18em] text-sand">EL LEGENDARY</p>
              <p className="mt-0.5 font-body text-[10px] uppercase tracking-[0.32em] text-sand-dim">
                Barbershop · Malang
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-cond text-sm text-sand-dim">
            <Link to="/services" className="transition-colors hover:text-gold">
              Layanan
            </Link>
            <Link to="/barbers" className="transition-colors hover:text-gold">
              Barber
            </Link>
            <Link to="/booking" className="transition-colors hover:text-gold">
              Booking
            </Link>
            <Link to="/admin" className="transition-colors hover:text-gold">
              Admin
            </Link>
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-sand/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-sand-dim">© 2026 El Legendary Barbershop Malang</p>
          <p className="font-cond text-xs uppercase tracking-[0.2em] text-sand-dim">
            Dibuat dengan ketajaman
          </p>
        </div>
      </div>
    </footer>
  );
}
