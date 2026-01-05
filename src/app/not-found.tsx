import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-display text-6xl mb-4">404</h1>
      <h2 className="text-display text-2xl mb-8">Sahifa topilmadi</h2>
      <p className="text-body text-text-secondary mb-8 text-center max-w-md">
        Kechirasiz, siz izlayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

