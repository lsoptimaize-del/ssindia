import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      className="w-full font-dmsans"
      style={{
        background: '#0D1557',
        borderTop: '2px solid #00838F',
      }}
    >
      {/* Row 1 — Brand + Nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <span className="font-display font-bold text-white text-[1.3rem] tracking-tight">
            SS India Corporation
          </span>
          <span className="text-[#00BCD4] border border-[#00BCD4]/50 text-[0.62rem] tracking-[0.18em] px-2 py-0.5 rounded-full uppercase">
            Hubli
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.78rem] text-white/45 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/8" />
      </div>

      {/* Row 2 — Owner info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[0.78rem] text-white/50 tracking-wide">
          Santosh &amp; Sandeep &nbsp;·&nbsp;
          <a
            href="tel:+918043853656"
            className="text-[#00BCD4] hover:text-white transition-colors duration-200"
          >
            +91 80438 53656
          </a>
          &nbsp;·&nbsp; Hubli, Dharwad, Karnataka
        </p>
        <p className="text-[0.78rem] text-white/50 tracking-wide">
          IndiaMART Verified Supplier &nbsp;·&nbsp; 2025
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/8" />
      </div>

      {/* Row 3 — Copyright */}
      <div className="px-6 py-5 text-center">
        <p className="text-[0.75rem] text-white/30 tracking-wide">
          © 2025 SS India Corporation. All rights reserved. &nbsp;·&nbsp; INDARC Welding Rod Distributors, Hubli Karnataka
        </p>
      </div>
    </footer>
  );
}
