import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import {
  barbers,
  bookingDates,
  rupiah,
  services,
  timeSlots,
  whatsappNumber,
} from "@/data/mock";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Booking Kursi — El Legendary Barbershop Malang" },
      {
        name: "description",
        content:
          "Pesan kursi cukur El Legendary Malang dalam empat langkah: pilih layanan, barber, jadwal, lalu konfirmasi.",
      },
      { property: "og:title", content: "Booking Kursi — El Legendary Malang" },
      {
        property: "og:description",
        content: "Booking cukur online, cepat, dan tanpa antre lama di barbershop.",
      },
    ],
  }),
  component: BookingPage,
});

const steps = ["Layanan", "Barber", "Jadwal", "Konfirmasi"];

function BookingPage() {
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [barberId, setBarberId] = useState<string | null>(null);
  const [dateId, setDateId] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingCode, setBookingCode] = useState<string | null>(null);

  const service = services.find((s) => s.id === serviceId) ?? null;
  const barber = barbers.find((b) => b.id === barberId) ?? null;
  const date = bookingDates.find((d) => d.id === dateId) ?? null;

  const canContinue =
    (step === 0 && service) ||
    (step === 1 && barber) ||
    (step === 2 && date && time) ||
    (step === 3 && name.trim().length > 1 && phone.trim().length > 8);

  const handleNext = () => {
    if (!canContinue) return;
    if (step === 3) {
      setBookingCode(`ELG-${Math.floor(1000 + Math.random() * 9000)}`);
      return;
    }
    setStep(step + 1);
  };

  const waMessage = encodeURIComponent(
    `Halo El Legendary, saya ${name} ingin konfirmasi booking ${bookingCode ?? ""} untuk ${service?.name ?? ""} bersama ${barber?.name ?? ""} pada ${date?.label ?? ""} pukul ${time ?? ""}.`,
  );

  if (bookingCode) {
    return (
      <div className="bg-coal">
        <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8">
          <div className="rounded-2xl bg-charcoal p-8 text-center ring-1 ring-gold/20">
            <p className="font-cond text-xs uppercase tracking-[0.28em] text-gold">
              Booking Diterima
            </p>
            <h1 className="mt-3 font-display text-5xl leading-none text-sand">{bookingCode}</h1>
            <p className="mt-3 font-body text-sm text-sand-dim">
              Simpan kode ini untuk mengecek status booking Anda.
            </p>
            <dl className="mt-8 space-y-3 border-t border-sand/10 pt-6 text-left">
              <Row label="Nama" value={name} />
              <Row label="WhatsApp" value={phone} />
              <Row label="Layanan" value={service?.name ?? "-"} />
              <Row label="Barber" value={barber?.name ?? "-"} />
              <Row label="Jadwal" value={`${date?.label ?? "-"} · ${time ?? "-"}`} />
              <Row label="Status" value="Pending" />
              <div className="flex items-center justify-between border-t border-sand/10 pt-3">
                <dt className="font-cond text-sm text-sand-dim">Total</dt>
                <dd className="font-display text-2xl text-gold">
                  {service ? rupiah(service.price) : "-"}
                </dd>
              </div>
            </dl>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center rounded-[10px] bg-gold py-2.5 pl-3 pr-4 font-cond text-sm font-medium text-charcoal ring-1 ring-gold/60 transition-opacity hover:opacity-90"
            >
              Konfirmasi via WhatsApp <span className="ml-1.5">→</span>
            </a>
            <div className="mt-4">
              <Link to="/" className="font-cond text-sm text-sand-dim hover:text-gold">
                Kembali ke beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-coal">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-8 text-center">
          <p className="font-cond text-xs uppercase tracking-[0.28em] text-gold">Booking</p>
          <h1 className="mt-2 text-balance font-display text-5xl leading-none text-sand sm:text-6xl">
            Reservasi Kursi Anda
          </h1>
        </div>

        <div className="overflow-hidden rounded-2xl bg-charcoal ring-1 ring-black/5">
          <div className="flex border-b border-sand/10">
            {steps.map((label, i) => (
              <div
                key={label}
                className={`flex flex-1 items-center gap-2 px-4 py-3 ${
                  i === step ? "bg-gold/10" : ""
                } ${i > 0 ? "border-l border-sand/10" : ""}`}
              >
                <span
                  className={`grid size-5 place-items-center rounded-full font-cond text-xs ${
                    i <= step ? "bg-gold text-charcoal" : "bg-coal text-sand-dim ring-1 ring-sand/20"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`font-cond text-sm ${i === step ? "text-sand" : "text-sand-dim"}`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            {step === 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceId(s.id)}
                    className={`flex items-center justify-between gap-3 rounded-[10px] bg-coal p-4 text-left transition-colors ${
                      serviceId === s.id
                        ? "ring-2 ring-gold"
                        : "ring-1 ring-sand/10 hover:ring-gold/40"
                    }`}
                  >
                    <span className="font-cond font-medium text-sand">
                      {s.name}
                      <span className="ml-1 text-sm text-sand-dim">· {s.duration} mnt</span>
                    </span>
                    <span className="shrink-0 font-display text-lg text-gold">
                      {rupiah(s.price)}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {barbers.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    disabled={!b.active}
                    onClick={() => setBarberId(b.id)}
                    className={`flex items-center gap-4 rounded-[10px] bg-coal p-4 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                      barberId === b.id
                        ? "ring-2 ring-gold"
                        : "ring-1 ring-sand/10 hover:ring-gold/40"
                    }`}
                  >
                    <img
                      src={b.photo}
                      alt={b.name}
                      loading="lazy"
                      width={512}
                      height={640}
                      className="size-14 shrink-0 rounded-lg object-cover"
                    />
                    <span className="min-w-0">
                      <span className="block font-cond font-medium text-sand">{b.name}</span>
                      <span className="block font-body text-xs text-sand-dim">
                        {b.specialty} · ★ {b.rating}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="font-cond text-sm uppercase tracking-[0.2em] text-sand-dim">
                  Pilih tanggal
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {bookingDates.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDateId(d.id)}
                      className={`rounded-[10px] bg-coal px-4 py-2.5 font-cond text-sm transition-colors ${
                        dateId === d.id
                          ? "text-sand ring-2 ring-gold"
                          : "text-sand-dim ring-1 ring-sand/10 hover:ring-gold/40"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                <p className="mt-7 font-cond text-sm uppercase tracking-[0.2em] text-sand-dim">
                  Pilih jam
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      disabled={slot.taken}
                      onClick={() => setTime(slot.time)}
                      className={`rounded-[10px] bg-coal px-3 py-2.5 font-cond text-sm transition-colors disabled:cursor-not-allowed disabled:text-sand-dim/40 disabled:line-through ${
                        time === slot.time
                          ? "text-sand ring-2 ring-gold"
                          : "text-sand-dim ring-1 ring-sand/10 enabled:hover:ring-gold/40"
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                <p className="mt-3 font-body text-xs text-sand-dim">
                  Jam yang dicoret sudah terisi barber lain.
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="nama"
                      className="font-cond text-sm uppercase tracking-[0.2em] text-sand-dim"
                    >
                      Nama lengkap
                    </label>
                    <input
                      id="nama"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda"
                      className="mt-2 w-full rounded-[10px] bg-coal px-4 py-3 font-body text-sand ring-1 ring-sand/10 outline-none placeholder:text-sand-dim/60 focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="wa"
                      className="font-cond text-sm uppercase tracking-[0.2em] text-sand-dim"
                    >
                      Nomor WhatsApp
                    </label>
                    <input
                      id="wa"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="08xx xxxx xxxx"
                      inputMode="tel"
                      className="mt-2 w-full rounded-[10px] bg-coal px-4 py-3 font-body text-sand ring-1 ring-sand/10 outline-none placeholder:text-sand-dim/60 focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="rounded-[12px] bg-coal p-5 ring-1 ring-sand/10">
                  <p className="font-cond text-sm uppercase tracking-[0.2em] text-gold">
                    Ringkasan
                  </p>
                  <dl className="mt-4 space-y-3">
                    <Row label="Layanan" value={service?.name ?? "-"} />
                    <Row label="Barber" value={barber?.name ?? "-"} />
                    <Row label="Tanggal" value={date?.label ?? "-"} />
                    <Row label="Jam" value={time ?? "-"} />
                  </dl>
                  <div className="mt-4 flex items-center justify-between border-t border-sand/10 pt-4">
                    <span className="font-cond text-sm text-sand-dim">Total</span>
                    <span className="font-display text-2xl text-gold">
                      {service ? rupiah(service.price) : "-"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between gap-3 border-t border-sand/10 pt-6">
              <button
                type="button"
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="inline-flex items-center rounded-[10px] border border-sand/20 px-4 py-2.5 font-cond text-sm text-sand transition-colors hover:border-gold/50 hover:text-gold disabled:opacity-30"
              >
                ← Kembali
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canContinue}
                className="inline-flex items-center rounded-[10px] bg-gold py-2.5 pl-3 pr-4 font-cond text-sm font-medium text-charcoal ring-1 ring-gold/60 transition-opacity hover:opacity-90 disabled:opacity-30"
              >
                {step === 3 ? "Konfirmasi Booking" : `Lanjut ke ${steps[step + 1]}`}
                <span className="ml-1.5">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="font-cond text-sm text-sand-dim">{label}</dt>
      <dd className="text-right font-body text-sm text-sand">{value}</dd>
    </div>
  );
}
