import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";
import barber4 from "@/assets/barber-4.jpg";
import productPomade from "@/assets/product-pomade.jpg";
import productBeardOil from "@/assets/product-beard-oil.jpg";
import productBalm from "@/assets/product-balm.jpg";
import productRazor from "@/assets/product-razor.jpg";

export const rupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: "Cukur" | "Perawatan";
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "potongan-klasik",
    name: "Potongan Klasik",
    description: "Cukur, styling, dan finishing rapi untuk semua jenis rambut.",
    price: 55000,
    duration: 30,
    category: "Cukur",
    featured: true,
  },
  {
    id: "kumis-jenggot",
    name: "Cukur Kumis & Jenggot",
    description: "Bentuk garis jenggot rapi dengan silet baja dan handuk panas.",
    price: 45000,
    duration: 25,
    category: "Cukur",
    featured: true,
  },
  {
    id: "paket-legend",
    name: "Paket Lengkap Legend",
    description: "Potongan, cukur jenggot, keramas, dan pijat dengan handuk panas.",
    price: 120000,
    duration: 60,
    category: "Cukur",
    featured: true,
  },
  {
    id: "perawatan-rambut",
    name: "Perawatan Rambut",
    description: "Masker dan tonik untuk mengembalikan kekuatan rambut.",
    price: 75000,
    duration: 45,
    category: "Perawatan",
    featured: true,
  },
  {
    id: "pewarna",
    name: "Pewarna & Highlight",
    description: "Warna natural hingga highlight, ditata sesuai gaya Anda.",
    price: 150000,
    duration: 50,
    category: "Perawatan",
    featured: true,
  },
  {
    id: "cukur-anak",
    name: "Cukur Anak",
    description: "Potongan ramah anak dengan suasana yang tenang dan sabar.",
    price: 35000,
    duration: 20,
    category: "Cukur",
    featured: true,
  },
  {
    id: "creambath",
    name: "Creambath & Pijat Kepala",
    description: "Relaksasi kepala dan bahu dengan krim hangat beraroma cedar.",
    price: 90000,
    duration: 40,
    category: "Perawatan",
  },
  {
    id: "shaving-ritual",
    name: "Royal Shaving Ritual",
    description: "Cukur basah lengkap: handuk panas, busa klasik, dan aftershave balm.",
    price: 110000,
    duration: 45,
    category: "Cukur",
  },
];

export type Barber = {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  bio: string;
  photo: string;
  active: boolean;
  schedule: string;
};

export const barbers: Barber[] = [
  {
    id: "rizky",
    name: 'Rizky "Sobat"',
    specialty: "Potongan klasik & fade",
    rating: 4.9,
    bio: "Barber senior dengan pengalaman 12 tahun. Ahli membaca bentuk kepala dan menyesuaikan garis potongan.",
    photo: barber1,
    active: true,
    schedule: "Senin – Sabtu · 09.00 – 17.00",
  },
  {
    id: "andra",
    name: "Andra Pratama",
    specialty: "Kumis & jenggot",
    rating: 4.8,
    bio: "Spesialis cukur basah dengan silet baja. Sabar merapikan garis jenggot sampai simetris.",
    photo: barber2,
    active: true,
    schedule: "Selasa – Minggu · 12.00 – 21.00",
  },
  {
    id: "bayu",
    name: "Bayu Nugroho",
    specialty: "Pewarna & styling",
    rating: 4.9,
    bio: "Paham tren warna terbaru namun tetap menjaga kesehatan rambut pelanggan.",
    photo: barber3,
    active: true,
    schedule: "Senin – Jumat · 10.00 – 19.00",
  },
  {
    id: "dimas",
    name: "Dimas K.",
    specialty: "Fade & crop modern",
    rating: 4.7,
    bio: "Tangan cepat untuk skin fade dan textured crop. Sedang cuti pelatihan bulan ini.",
    photo: barber4,
    active: false,
    schedule: "Sedang tidak tersedia",
  },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  photo: string;
};

export const products: Product[] = [
  {
    id: "pomade",
    name: "Pomade Legend Matte",
    description: "Gaya kuat, kilau natural",
    price: 89000,
    stock: 18,
    photo: productPomade,
  },
  {
    id: "beard-oil",
    name: "Beard Oil Cedar",
    description: "Perawatan jenggot lembut",
    price: 120000,
    stock: 9,
    photo: productBeardOil,
  },
  {
    id: "balm",
    name: "Aftershave Balm",
    description: "Menenangkan pasca cukur",
    price: 105000,
    stock: 3,
    photo: productBalm,
  },
  {
    id: "razor",
    name: "Razor Heritage",
    description: "Silet baja klasik",
    price: 250000,
    stock: 2,
    photo: productRazor,
  },
];

export const bookingDates = [
  { id: "2026-08-29", label: "Sab, 29 Agu" },
  { id: "2026-08-30", label: "Min, 30 Agu" },
  { id: "2026-08-31", label: "Sen, 31 Agu" },
  { id: "2026-09-01", label: "Sel, 1 Sep" },
  { id: "2026-09-02", label: "Rab, 2 Sep" },
];

export const timeSlots = [
  { time: "09.00", taken: false },
  { time: "10.00", taken: true },
  { time: "11.00", taken: false },
  { time: "13.00", taken: false },
  { time: "14.00", taken: true },
  { time: "15.00", taken: false },
  { time: "16.00", taken: false },
  { time: "17.00", taken: true },
  { time: "18.00", taken: false },
  { time: "19.00", taken: false },
];

export type BookingStatus = "Pending" | "Confirmed" | "Completed" | "Cancelled";

export type AdminBooking = {
  code: string;
  customer: string;
  whatsapp: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  price: number;
  status: BookingStatus;
};

export const todayBookings: AdminBooking[] = [
  {
    code: "ELG-8241",
    customer: "Fajar Ramadhan",
    whatsapp: "0812-3311-0921",
    service: "Potongan Klasik",
    barber: 'Rizky "Sobat"',
    date: "29 Agu 2026",
    time: "09.00",
    price: 55000,
    status: "Confirmed",
  },
  {
    code: "ELG-8242",
    customer: "Gilang Saputra",
    whatsapp: "0857-9922-1188",
    service: "Cukur Kumis & Jenggot",
    barber: "Andra Pratama",
    date: "29 Agu 2026",
    time: "11.00",
    price: 45000,
    status: "Pending",
  },
  {
    code: "ELG-8243",
    customer: "Hendra Wijaya",
    whatsapp: "0813-4455-6677",
    service: "Paket Lengkap Legend",
    barber: "Bayu Nugroho",
    date: "29 Agu 2026",
    time: "13.00",
    price: 120000,
    status: "Confirmed",
  },
  {
    code: "ELG-8244",
    customer: "Yoga Kurniawan",
    whatsapp: "0821-7788-3344",
    service: "Perawatan Rambut",
    barber: 'Rizky "Sobat"',
    date: "29 Agu 2026",
    time: "15.00",
    price: 75000,
    status: "Pending",
  },
  {
    code: "ELG-8245",
    customer: "Ilham Nur",
    whatsapp: "0819-2233-9090",
    service: "Cukur Anak",
    barber: "Andra Pratama",
    date: "29 Agu 2026",
    time: "17.00",
    price: 35000,
    status: "Completed",
  },
];

export const recentOrders = [
  { code: "ORD-2091", customer: "Rangga P.", items: "Pomade Legend Matte x1", total: 89000, status: "Paid" },
  { code: "ORD-2092", customer: "Satria B.", items: "Beard Oil Cedar x2", total: 240000, status: "Ready for Pickup" },
  { code: "ORD-2093", customer: "Aditya M.", items: "Razor Heritage x1", total: 250000, status: "Pending" },
];

export const whatsappNumber = "6281234567890";
