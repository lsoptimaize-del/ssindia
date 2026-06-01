'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ quoteOpen = false, solid = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handle(y, ref) {
      if (y === 0) {
        setHidden(false);
      } else if (y > ref.current + 10) {
        setHidden(true);
      } else if (y < ref.current - 10) {
        setHidden(false);
      }
      setIsScrolled(y > 50);
      ref.current = y;
    }

    function onWindowScroll() {
      handle(window.scrollY, lastScrollY);
    }

    function onPanelScroll(e) {
      handle(e.detail.scrollTop, lastScrollY);
    }

    window.addEventListener('scroll', onWindowScroll, { passive: true });
    window.addEventListener('panelscroll', onPanelScroll);
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('panelscroll', onPanelScroll);
    };
  }, []);

  const darkText = solid ? false : false;

  const navBg = quoteOpen
    ? 'rgba(4, 7, 20, 0.65)'
    : isScrolled
    ? 'rgba(4, 7, 20, 0.65)'
    : solid
    ? '#0D1557'
    : 'transparent';

  const backdropBlur = (isScrolled || quoteOpen) ? 'blur(16px)' : 'none';
  const shadow = (isScrolled || quoteOpen) ? '0 10px 40px rgba(0,0,0,0.2)' : 'none';
  const borderBottom = (isScrolled || quoteOpen) ? '1px solid rgba(255,255,255,0.05)' : 'none';

  const linkColor = darkText ? 'rgba(13,21,87,0.6)' : 'rgba(255,255,255,0.7)';
  const linkHoverUnder = darkText ? '#0D1557' : 'rgba(255,255,255,0.6)';
  const logoColor = darkText ? '#0D1557' : '#ffffff';
  const hamburgerColor = darkText ? '#0D1557' : '#ffffff';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center px-6 md:px-12"
      style={{
        background: navBg,
        boxShadow: shadow,
        borderBottom,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.5s ease, box-shadow 0.5s ease, backdrop-filter 0.5s ease',
      }}
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
                  ? menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
                  : i === 1
                  ? menuOpen ? 'opacity-0' : ''
                  : menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
              style={{ background: hamburgerColor }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[68px] backdrop-blur-3xl flex flex-col pt-12 pb-20 px-8 gap-8 z-50 overflow-y-auto"
          style={{
            background: solid || !darkText ? 'rgba(8,13,46,0.95)' : 'rgba(234,229,217,0.95)',
            minHeight: 'calc(100vh - 68px)',
          }}
        >
          <div className="flex flex-col gap-6 mt-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold text-[2.5rem] tracking-tight transition-colors duration-200 block"
                style={{
                  color: solid || !darkText ? '#ffffff' : '#080D2E',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto">
            <div className="h-px w-full mb-8" style={{ background: solid || !darkText ? 'rgba(255,255,255,0.1)' : 'rgba(8,13,46,0.1)' }} />
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 font-dmsans font-bold text-[0.85rem] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#00BCD4] text-[#080D2E] shadow-[0_10px_30px_rgba(0,188,212,0.3)]"
            >
              Get A Quote →
            </Link>
            <div className="mt-8">
               <p className="font-dmsans font-medium text-[0.6rem] tracking-[0.2em] uppercase mb-2" style={{ color: solid || !darkText ? 'rgba(255,255,255,0.4)' : 'rgba(8,13,46,0.4)' }}>Talk directly with us</p>
               <a href="tel:+918043853656" className="font-dmsans font-medium text-[1.1rem]" style={{ color: solid || !darkText ? '#ffffff' : '#080D2E' }}>+91 80438 53656</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
