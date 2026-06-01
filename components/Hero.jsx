'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Footer from './Footer';
import ContactForm from './ContactForm';

const S = { IDLE: 'idle', PLAYING: 'playing', END: 'end' };

const CARDS = [
  {
    size: '3.5',
    unit: 'mm',
    code: 'INDARC E6013',
    spec: 'General fabrication · thin sheet · light structural work',
    img: '/3mm.png',
    mailto: 'Bulk Quote – INDARC 3.5mm',
  },
  {
    size: '4.0',
    unit: 'mm',
    code: 'INDARC E6013',
    spec: 'Medium structural · pipeline · heavy fabrication',
    img: '/4mm.png',
    mailto: 'Bulk Quote – INDARC 4.0mm',
  },
  {
    size: '4.5',
    unit: 'mm',
    code: 'INDARC E6013',
    spec: 'Heavy structural · thick plate · industrial construction',
    img: '/4-5mm.png',
    mailto: 'Bulk Quote – INDARC 4.5mm',
  },
];

const WHY_US = [
  {
    title: 'Genuine INDARC Products',
    desc: 'Every rod authenticated. Zero grey market stock. Your procurement team gets exactly what is invoiced, every single time.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Bulk-Ready Inventory',
    desc: 'Ready stock across all three diameters. No pre-orders, no wait times. Dispatch within 24 hours of order confirmation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
  {
    title: 'Owner-Direct Service',
    desc: 'You deal with Santosh or Sandeep personally. No sales agents, no layers. Honest pricing and real accountability on every order.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Fast Karnataka Delivery',
    desc: 'Hubli-based warehouse serving the full Karnataka region. Reliable, fast turnaround for contractors and procurement managers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

function ProductCard({ card, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{
        minHeight: '380px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(52px)',
        transition: 'opacity 0.55s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={card.img}
        alt={`INDARC ${card.size}mm welding rods`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.05) 100%)' }}
      />

      {/* Default state */}
      <div
        className="absolute inset-0 flex flex-col justify-between p-7 transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <p className="font-dmsans text-[0.65rem] tracking-[0.22em] uppercase text-white/60 font-medium">
          {card.code}
        </p>
        <div>
          <p
            className="font-display font-bold text-white leading-none mb-3"
            style={{ fontSize: 'clamp(3rem, 4.5vw, 4.2rem)', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
          >
            {card.size}
            <span className="font-dmsans font-light text-white/70" style={{ fontSize: '0.38em', letterSpacing: '0.05em' }}>
              {card.unit}
            </span>
          </p>
          <p className="font-dmsans text-white/75 text-[0.78rem] leading-relaxed font-light">{card.spec}</p>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 transition-opacity duration-300"
        style={{ background: 'rgba(6,6,6,0.87)', opacity: hovered ? 1 : 0 }}
      >
        <p
          className="font-display font-bold text-white leading-none mb-1"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', letterSpacing: '-0.02em', textShadow: '0 0 60px rgba(201,169,110,0.2)' }}
        >
          {card.size}
        </p>
        <p className="font-dmsans font-semibold text-white/50 tracking-[0.35em] uppercase mb-5" style={{ fontSize: '0.75rem' }}>
          {card.unit.toUpperCase()}
        </p>
        <div className="mb-5" style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }} />
        <p className="font-dmsans font-medium text-white/55 text-[0.68rem] tracking-[0.35em] uppercase mb-10">
          Welding Rods
        </p>
        <a
          href={`mailto:contact@ssindia.in?subject=${card.mailto}`}
          className="font-dmsans font-medium text-[0.72rem] tracking-[0.15em] uppercase text-white/80 border border-white/20 px-6 py-2.5 rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          Request Quote →
        </a>
      </div>
    </div>
  );
}

export default function Hero({ quoteOpen, onQuoteChange }) {
  const [phase, setPhaseState] = useState(S.IDLE);
  const phaseRef = useRef(S.IDLE);

  const [showSizes, setShowSizes] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  const scrollLock = useRef(false);
  const videoRef = useRef(null);
  const panelRef = useRef(null);

  function setPhase(p) {
    phaseRef.current = p;
    setPhaseState(p);
  }

  function startVideo() {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPhase(S.PLAYING);
  }

  const handleQuoteOpen = useCallback(() => { onQuoteChange(true); }, [onQuoteChange]);

  const handleQuoteClose = useCallback(() => {
    setExpanded(false);
    setVisibleCards([false, false, false]);
    setTimeout(() => onQuoteChange(false), 750);
  }, [onQuoteChange]);

  // IDLE: scroll down → start video
  useEffect(() => {
    if (phase !== S.IDLE) return;
    function onWheel(e) {
      if (e.deltaY <= 0 || scrollLock.current) return;
      scrollLock.current = true;
      startVideo();
      setTimeout(() => { scrollLock.current = false; }, 1200);
    }
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // END: scroll down → open panel (no reverse on scroll up)
  useEffect(() => {
    if (phase !== S.END) return;
    function onWheel(e) {
      if (e.deltaY <= 0 || scrollLock.current) return;
      scrollLock.current = true;
      setTimeout(() => { scrollLock.current = false; }, 1400);
      handleQuoteOpen();
    }
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [phase, handleQuoteOpen]);

  // Panel: scroll up at top of panel → close back to END overlay
  function handlePanelWheel(e) {
    const panel = panelRef.current;
    if (!panel || scrollLock.current) return;
    if (panel.scrollTop === 0 && e.deltaY < 0) {
      scrollLock.current = true;
      setTimeout(() => { scrollLock.current = false; }, 1400);
      handleQuoteClose();
    }
  }

  // Stagger end overlay text
  useEffect(() => {
    if (phase === S.END) {
      const t1 = setTimeout(() => setShowSizes(true), 0);
      const t2 = setTimeout(() => setShowTitle(true), 500);
      const t3 = setTimeout(() => setShowCTA(true), 1050);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
    setShowSizes(false); setShowTitle(false); setShowCTA(false);
  }, [phase]);

  // Panel expand + stagger cards
  useEffect(() => {
    if (!quoteOpen) {
      setExpanded(false);
      setVisibleCards([false, false, false]);
      return;
    }
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setExpanded(true);
        setTimeout(() => setVisibleCards([true, false, false]), 70);
        setTimeout(() => setVisibleCards([true, true, false]), 230);
        setTimeout(() => setVisibleCards([true, true, true]), 390);
      })
    );
    return () => cancelAnimationFrame(raf);
  }, [quoteOpen]);

  function handleTimeUpdate() {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    if (phaseRef.current === S.PLAYING && v.duration - v.currentTime <= 2.5) {
      setPhase(S.END);
    }
  }

  const isIdle = phase === S.IDLE;
  const isEnd = phase === S.END;
  const isPlaying = phase === S.PLAYING;

  return (
    <>
      {/* ── VIDEO HERO ── */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isPlaying ? 0.25 : 1,
            background: 'linear-gradient(160deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.72) 100%)',
          }}
        />

        {/* IDLE */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-500"
          style={{ opacity: isIdle ? 1 : 0, pointerEvents: isIdle ? 'auto' : 'none' }}
        >
          <p className="font-dmsans text-[0.67rem] tracking-[0.3em] uppercase text-white/50 mb-8">
            Hubli, Karnataka &nbsp;·&nbsp; Since 2015
          </p>
          <h1
            className="font-display font-bold text-white leading-[1.03] mb-5"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.2rem)', textShadow: '0 2px 32px rgba(0,0,0,0.7)' }}
          >
            Bulk Welding Rods.
            <br />
            <em>Verified Supplier.</em>
          </h1>
          <p
            className="font-dmsans font-light text-white/75 text-[0.95rem] tracking-wide max-w-[380px] mb-10 md:mb-14 leading-relaxed"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
          >
            Karnataka&apos;s fastest growing INDARC distributor — contractors,
            fabricators &amp; procurement teams.
          </p>
          <div className="flex flex-col items-center gap-2 opacity-60 animate-bounce">
            <p className="font-dmsans text-[0.67rem] tracking-[0.22em] uppercase text-white/55">Scroll to watch</p>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-white/40">
              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* END overlay */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-700"
          style={{ opacity: isEnd ? 1 : 0, pointerEvents: isEnd ? 'auto' : 'none' }}
        >
          <div style={{ opacity: showSizes ? 1 : 0, transform: showSizes ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.5s ease' }}>
            <p className="font-dmsans font-semibold text-[#00BCD4] text-[0.75rem] tracking-[0.28em] uppercase mb-7">
              3.5 mm &nbsp;·&nbsp; 4 mm &nbsp;·&nbsp; 4.5 mm
            </p>
          </div>
          <div style={{ opacity: showTitle ? 1 : 0, transform: showTitle ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.5s ease' }}>
            <h2
              className="font-display font-bold text-white leading-[1.05] mb-6 md:mb-10"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', textShadow: '0 2px 32px rgba(0,0,0,0.7)' }}
            >
              <em>INDARC Welding Rods</em>
              <br />
              Bulk Stock. Hubli, Karnataka.
            </h2>
          </div>
          <div style={{ opacity: showCTA ? 1 : 0, transform: showCTA ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.5s ease' }}>
            <button
              onClick={handleQuoteOpen}
              className="font-dmsans font-semibold text-[0.78rem] tracking-[0.18em] uppercase text-white bg-[#00838F] px-10 py-4 rounded-full hover:bg-[#00BCD4] transition-all duration-300 cursor-pointer"
            >
              Request A Bulk Quote →
            </button>
          </div>
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
            style={{ opacity: showCTA ? 0.45 : 0, transition: 'opacity 0.5s ease' }}
          >
            <p className="font-dmsans text-[0.64rem] tracking-[0.22em] uppercase text-white/50">scroll for quote</p>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-white/35 animate-bounce">
              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── QUOTE PANEL — full scrollable page sliding up ── */}
      {quoteOpen && (
        <div
          ref={panelRef}
          className="fixed inset-0 z-40 overflow-y-auto"
          style={{
            background: '#EAE5D9',
            transform: expanded ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onWheel={handlePanelWheel}
        >
          {/* Navbar spacer */}
          <div className="h-[68px] flex-shrink-0" />

          {/* Panel header */}
          <div className="flex items-start justify-between gap-4 px-6 md:px-14 pt-6 md:pt-8 pb-4 md:pb-6">
            <div>
              <p className="font-dmsans text-[0.65rem] tracking-[0.25em] uppercase text-black/40 font-medium mb-1.5">
                INDARC · Hubli, Karnataka
              </p>
              <h2
                className="font-display font-bold text-black leading-[1.0]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Request A Bulk Quote
              </h2>
              <p className="font-dmsans font-light text-black/55 text-[0.88rem] mt-2 tracking-wide">
                Choose your rod size — we respond within 24 hours.
              </p>
            </div>
            <button
              onClick={handleQuoteClose}
              className="flex-shrink-0 ml-8 mt-1 w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black/40 hover:text-black hover:border-black/35 transition-all duration-200 cursor-pointer"
              aria-label="Close"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* ── 3 CARDS ── */}
          <div className="px-5 md:px-14 pb-10 md:pb-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {CARDS.map((card, i) => (
              <ProductCard key={card.size} card={card} visible={visibleCards[i]} />
            ))}
          </div>

          {/* ── WHY PARTNER WITH US ── */}
          <section className="px-5 md:px-14 py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <p className="font-dmsans font-semibold text-[0.65rem] tracking-[0.22em] uppercase text-[#00838F] mb-3 text-center">
                The SS India Advantage
              </p>
              <h3
                className="font-display font-bold text-[#0D1557] text-center mb-12 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
              >
                Why Procurement Managers<br />Choose SS India Corporation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {WHY_US.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: '#F5F7FF', border: '1px solid #E8EAF6', borderTop: '3px solid #00838F' }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: '#1A237E' }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="font-dmsans font-semibold text-[#0D1557] text-[1rem] mb-3">{item.title}</h4>
                    <p className="font-dmsans font-light text-[#37474F] text-[0.88rem] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CONTACT FORM ── */}
          <section className="px-5 md:px-14 py-12 md:py-16" style={{ background: '#EAE5D9' }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
              <div>
                <p className="font-dmsans font-semibold text-[0.65rem] tracking-[0.22em] uppercase text-[#00838F] mb-4">
                  Get In Touch
                </p>
                <h3
                  className="font-display font-bold text-black leading-[1.1] mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
                >
                  Talk Directly to Santosh or Sandeep
                </h3>
                <p className="font-dmsans font-light text-black/60 text-[0.92rem] leading-relaxed mb-8">
                  No sales agents. No delays. Send your requirement — product size, quantity, delivery location — and
                  you&apos;ll have a quote the same day.
                </p>
                <div className="space-y-4">
                  <a href="tel:+918043853656" className="flex items-center gap-3 font-dmsans font-medium text-[0.88rem] text-black/70 hover:text-[#00838F] transition-colors">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#00838F' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.69a16 16 0 006.29 6.29l1.21-1.21a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </span>
                    +91 80438 53656
                  </a>
                  <a href="https://wa.me/918043853656" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-dmsans font-medium text-[0.88rem] text-black/70 hover:text-[#00838F] transition-colors">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#00838F' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    </span>
                    WhatsApp — fastest response
                  </a>
                  <p className="flex items-center gap-3 font-dmsans font-light text-[0.85rem] text-black/50">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,131,143,0.12)' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00838F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    Mon–Sat, 9am–7pm IST
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>

          {/* ── FOOTER ── */}
          <Footer />
        </div>
      )}
    </>
  );
}
