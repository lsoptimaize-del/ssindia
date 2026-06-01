import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'INDARC E6013 - 3.5mm', href: '/products' },
  { label: 'INDARC E6013 - 4mm', href: '/products' },
  { label: 'INDARC E6013 - 4.5mm', href: '/products' },
  { label: 'Bulk Supply', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full font-dmsans" style={{ background: '#080D2E' }}>
      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, #00838F 30%, #00BCD4 50%, #00838F 70%, transparent)' }} />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-14 pt-16 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

        {/* Brand column */}
        <div className="md:col-span-5">
          <Link href="/" className="inline-block mb-5">
            <span className="font-display font-bold text-white tracking-tight" style={{ fontSize: '1.45rem' }}>
              SS India Corporation
            </span>
          </Link>
          <p className="text-white/35 text-[0.82rem] leading-relaxed mb-6 max-w-xs">
            Authorised INDARC welding rod distributor. Ready stock of E6013 rods - 3.5mm, 4mm, 4.5mm - dispatched within 24 hours from Hubli, Karnataka.
          </p>
          <div className="flex flex-col gap-2.5">
            <a
              href="tel:+918043853656"
              className="inline-flex items-center gap-2.5 text-[#00BCD4] hover:text-white transition-colors duration-200 text-[0.88rem] font-medium"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.69a16 16 0 006.29 6.29l1.21-1.21a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 80438 53656
            </a>
            <a
              href="https://wa.me/918043853656"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white/40 hover:text-[#00BCD4] transition-colors duration-200 text-[0.82rem]"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              WhatsApp
            </a>
            <p className="text-white/25 text-[0.78rem] mt-1">
              Hubli, Dharwad, Karnataka - Mon–Sat, 9am–7pm IST
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:col-span-1" />

        {/* Navigation column */}
        <div className="md:col-span-3">
          <p className="font-bold text-[0.6rem] tracking-[0.22em] uppercase text-white/25 mb-5">
            Navigation
          </p>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors duration-200 text-[0.85rem]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Products column */}
        <div className="md:col-span-3">
          <p className="font-bold text-[0.6rem] tracking-[0.22em] uppercase text-white/25 mb-5">
            Products
          </p>
          <nav className="flex flex-col gap-3">
            {productLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors duration-200 text-[0.85rem]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t border-white/8">
            <p className="text-[0.7rem] text-white/25 tracking-wide leading-relaxed">
              IndiaMART Verified Supplier<br />
              <span className="text-[#00838F]">●</span> Genuine INDARC Stock Only
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-8 md:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.72rem] text-white/20 tracking-wide">
            © 2025 SS India Corporation. All rights reserved.
          </p>
          <p className="text-[0.72rem] text-white/20 tracking-wide">
            INDARC Authorised Distributor · Hubli, Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
}
