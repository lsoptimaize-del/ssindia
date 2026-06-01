'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ quoteOpen = false, solid = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // solid=true → always navy; solid=false → transparent or warm-off-white when quoteOpen
  const darkText = solid ? false : quoteOpen; // solid=navy(light text), quoteOpen=offwhite(dark text)

  const navBg = solid
    ? '#0D1557'
    : quoteOpen
    ? 'rgba(237,232,222,0.95)'
    : 'transparent';

  const shadow = solid ? '0 2px 20px rgba(0,0,0,0.3)' : 'none';
  const borderBottom = solid ? '2px solid #00838F' : 'none';

  const linkColor = darkText
    ? 'rgba(13,21,87,0.6)'
    : 'rgba(255,255,255,0.7)';
  const linkHoverUnder = darkText ? '#0D1557' : 'rgba(255,255,255,0.6)';
  const logoColor = darkText ? '#0D1557' : '#ffffff';
  const hamburgerColor = darkText ? '#0D1557' : '#ffffff';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center px-6 md:px-12 transition-all duration-500"
      style={{ background: navBg, boxShadow: shadow, borderBottom }}
    >
      {/* Left: Brand */}
      <div className="flex flex-1 justify-start">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <span
            className="font-dmsans font-semibold text-[1.05rem] tracking-wide transition-colors duration-500"
            style={{ color: logoColor }}
          >
            SS India Corporation
          </span>
          <span className="text-[#00BCD4] border border-[#00BCD4]/60 text-[0.65rem] tracking-[0.18em] px-2 py-0.5 rounded-full font-dmsans uppercase">
            Hubli
          </span>
        </Link>
      </div>

      {/* Centre: Nav links */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative font-dmsans font-medium text-[0.82rem] tracking-[0.08em] transition-colors duration-300 group"
            style={{ color: linkColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = darkText ? '#0D1557' : '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = linkColor;
            }}
          >
            {link.label}
            <span
              className="absolute -bottom-0.5 left-0 h-px w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: linkHoverUnder }}
            />
          </Link>
        ))}
      </div>

      {/* Right: CTA */}
      <div className="flex flex-1 justify-end items-center gap-3">
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center font-dmsans font-semibold text-[0.78rem] tracking-[0.12em] uppercase px-5 py-2 rounded-full transition-all duration-300"
          style={
            solid
              ? { background: '#00838F', color: '#ffffff', border: '1px solid #00838F' }
              : {
                  border: darkText
                    ? '1px solid rgba(13,21,87,0.25)'
                    : '1px solid rgba(255,255,255,0.3)',
                  color: darkText ? '#0D1557' : '#ffffff',
                }
          }
          onMouseEnter={(e) => {
            if (solid) {
              e.currentTarget.style.background = '#00BCD4';
              e.currentTarget.style.borderColor = '#00BCD4';
            } else {
              e.currentTarget.style.background = darkText ? '#0D1557' : '#ffffff';
              e.currentTarget.style.color = darkText ? '#ffffff' : '#0D1557';
            }
          }}
          onMouseLeave={(e) => {
            if (solid) {
              e.currentTarget.style.background = '#00838F';
              e.currentTarget.style.borderColor = '#00838F';
            } else {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = darkText ? '#0D1557' : '#ffffff';
            }
          }}
        >
          Get A Quote
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-[1.5px] transition-all duration-300 ${
                i === 0
                  ? menuOpen
                    ? 'translate-y-[6.5px] rotate-45'
                    : ''
                  : i === 1
                  ? menuOpen
                    ? 'opacity-0'
                    : ''
                  : menuOpen
                  ? '-translate-y-[6.5px] -rotate-45'
                  : ''
              }`}
              style={{ background: hamburgerColor }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-[68px] left-0 right-0 backdrop-blur-md flex flex-col py-5 px-6 gap-5 z-50"
          style={{
            background:
              solid || !darkText ? 'rgba(13,21,87,0.97)' : 'rgba(237,232,222,0.97)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-dmsans font-medium text-[0.95rem] transition-colors duration-200"
              style={{
                color:
                  solid || !darkText
                    ? 'rgba(255,255,255,0.8)'
                    : 'rgba(13,21,87,0.7)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="self-start font-dmsans font-medium text-[0.8rem] tracking-[0.1em] uppercase px-5 py-2 rounded-full mt-1 bg-[#00838F] text-white"
          >
            Get A Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
