'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
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
    num: '01',
    word: 'GENUINE',
    title: 'Genuine INDARC Products',
    desc: 'Every single rod in our inventory is rigorously authenticated. We maintain zero grey market stock, ensuring that your procurement team gets exactly what is invoiced, every single time. Build your reputation on the foundation of guaranteed, genuine quality that meets the highest industrial standards without compromise.',
    img: '/genuine_products.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '02',
    word: 'READY',
    title: 'Bulk-Ready Inventory',
    desc: 'We maintain massive ready stock across all three primary diameters to support your largest projects. Say goodbye to frustrating pre-orders and unpredictable wait times. Our streamlined logistics ensure that your bulk orders are processed and dispatched within 24 hours of confirmation, keeping your timelines on track.',
    img: '/bulk_inventory.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
  {
    num: '03',
    word: 'DIRECT',
    title: 'Owner-Direct Service',
    desc: 'Experience the clarity and speed of dealing with the business owners personally. We have eliminated sales agents and bureaucratic layers to give you honest pricing and direct, real accountability on every single order. When you partner with us, you are guaranteed a transparent and dedicated relationship built on trust.',
    img: '/owner_direct.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    num: '04',
    word: 'FAST',
    title: 'Fast Karnataka Delivery',
    desc: 'Strategically located with our primary warehouse in Hubli, we serve the entire Karnataka region with unprecedented speed. We provide a reliable, rapid turnaround tailored specifically for busy contractors and demanding procurement managers who cannot afford downtime. Your materials arrive exactly when you need them.',
    img: '/fast_delivery.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

function useInView(options = { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);
  return [ref, inView];
}

function RevealText({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ProductCard({ card, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.15)] min-h-[65vh] md:min-h-[480px]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(52px)',
        transition: 'opacity 0.75s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={card.img}
        alt={`INDARC ${card.size}mm welding rods`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)' }}
      />

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

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 transition-opacity duration-300"
        style={{ background: 'rgba(6,6,6,0.87)', opacity: hovered ? 1 : 0 }}
      >
        <p
          className="font-display font-bold text-white leading-none mb-1"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', letterSpacing: '-0.02em' }}
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

function MobileWhyUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    
    const elements = document.querySelectorAll('.mobile-why-us-text');
    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="md:hidden relative bg-[#080D2E] z-20 pb-10">
      {/* Sticky Image Background */}
      <div className="sticky top-0 w-full h-[55vh] z-10 overflow-hidden">
        <div className="absolute top-6 left-6 z-30">
          <p className="font-dmsans font-bold text-[0.6rem] tracking-[0.28em] uppercase text-[#00838F]">
            The SS India Advantage
          </p>
        </div>
        {WHY_US.map((item, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          >
            <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D2E] via-[#080D2E]/40 to-transparent" />
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
               <p className="font-display font-bold text-white/10 leading-none" style={{ fontSize: '8rem', letterSpacing: '-0.04em' }}>
                  {item.num}
               </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scrolling Text Cards */}
      <div className="relative z-20 -mt-[15vh]">
        {WHY_US.map((item, i) => (
          <div key={i} data-index={i} className="mobile-why-us-text flex flex-col justify-end min-h-[85vh] px-5 pb-[5vh]">
            <div className="bg-[#080D2E]/85 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BCD4]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              <p className="font-dmsans font-medium text-[#00BCD4] text-[0.7rem] tracking-[0.25em] uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-[#00BCD4]/40" /> {item.word}
              </p>
              <h3 className="font-display font-bold text-white text-[2.2rem] leading-[1.05] mb-5 tracking-tight relative z-10">
                {item.title}
              </h3>
              <div className="flex gap-4 items-start relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1" style={{ background: 'rgba(0,131,143,0.15)', border: '1px solid rgba(0,188,212,0.2)' }}>
                  {item.icon}
                </div>
                <p className="font-dmsans font-light text-white/70 leading-[1.6] text-[0.95rem]">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyUsSection({ panelRef }) {
  const outerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const n = WHY_US.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const container = panelRef.current;
    const outer = outerRef.current;
    if (!container || !outer) return;

    function update() {
      const outerRect = outer.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const raw = (containerRect.top - outerRect.top) / ((n - 1) * container.clientHeight);
      setProgress(Math.max(0, Math.min(1, raw)));
    }

    container.addEventListener('scroll', update, { passive: true });
    update();
    return () => container.removeEventListener('scroll', update);
  }, [panelRef, n, isMobile]);

  if (isMobile) {
    return <MobileWhyUsSection />;
  }

  const activeIndex = Math.round(progress * (n - 1));

  return (
    <div ref={outerRef} className="hidden md:block" style={{ height: `${(n + 1) * 100}vh`, position: 'relative', zIndex: 20 }}>
      <div
        className="sticky top-0 overflow-hidden flex flex-col md:flex-row w-full h-screen"
        style={{ background: '#080D2E' }}
      >
        {/* Images Track (Left) */}
        <div className="relative w-full h-1/2 md:w-1/2 md:h-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-75"
            style={{
              width: `${n * 100}%`,
              transform: `translateX(-${progress * (n - 1) * (100 / n)}%)`,
              willChange: 'transform',
            }}
          >
            {WHY_US.map((item, i) => (
              <div key={i} className="h-full flex-shrink-0 relative" style={{ width: `${100 / n}%` }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D2E]/80 to-transparent md:bg-black/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Texts Track (Right) */}
        <div className="relative w-full h-1/2 md:w-1/2 md:h-full overflow-hidden bg-[#080D2E]">
          {/* Top label */}
          <div className="absolute top-6 left-8 md:top-10 md:left-14 z-20">
            <p className="font-dmsans font-bold text-[0.6rem] tracking-[0.28em] uppercase text-[#00838F]">
              The SS India Advantage
            </p>
          </div>
          
          <div
            className="flex h-full transition-transform duration-75"
            style={{
              width: `${n * 100}%`,
              transform: `translateX(-${progress * (n - 1) * (100 / n)}%)`,
              willChange: 'transform',
            }}
          >
            {WHY_US.map((item, i) => (
              <div key={i} className="h-full flex-shrink-0 flex items-center px-8 md:px-14" style={{ width: `${100 / n}%` }}>
                <div className="max-w-xl w-full">
                  <div className="relative">
                    <p
                      className="font-display font-bold select-none absolute -top-10 md:-top-16 -left-4"
                      style={{
                        fontSize: 'clamp(5rem, 12vw, 10rem)',
                        lineHeight: 0.85,
                        color: 'rgba(255,255,255,0.03)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {item.num}
                    </p>
                  <div className="relative z-10 transition-all duration-700" style={{ opacity: i === activeIndex ? 1 : 0, transform: i === activeIndex ? 'translateY(0)' : 'translateY(20px)' }}>
                    <p className="font-dmsans font-medium text-[#00BCD4] text-[0.68rem] tracking-[0.25em] uppercase mb-3">
                      {item.num} &nbsp;-&nbsp; {item.word}
                    </p>
                    <h3
                       className="font-display font-bold text-white mb-6"
                       style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
                    >
                       {item.title}
                    </h3>
                    <div className="h-px bg-white/10 w-full max-w-[200px] mb-6 md:mb-8" />
                    <div className="flex gap-4 md:gap-6 items-start">
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 mt-1"
                        style={{ background: 'rgba(0,131,143,0.15)', border: '1px solid rgba(0,188,212,0.2)' }}
                      >
                        {item.icon}
                      </div>
                      <p
                        className="font-dmsans font-light text-white/65 leading-[1.8]"
                        style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress dots & controls */}
          <div className="absolute bottom-6 md:bottom-10 left-8 md:left-14 right-8 md:right-14 z-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {WHY_US.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === activeIndex ? 24 : 6,
                    height: 2,
                    borderRadius: 2,
                    background: i === activeIndex ? '#00BCD4' : 'rgba(255,255,255,0.18)',
                    transition: 'all 0.35s ease',
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-dmsans font-semibold text-[0.65rem] tracking-[0.22em] uppercase text-white/20">
                {activeIndex + 1} of {n}
              </span>
            </div>
          </div>
        </div>
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
    window.dispatchEvent(new CustomEvent('panelscroll', { detail: { scrollTop: 0 } }));
    setTimeout(() => onQuoteChange(false), 750);
  }, [onQuoteChange]);

  // IDLE: scroll down → start video
  useEffect(() => {
    if (phase !== S.IDLE) return;
    let touchStartY = 0;

    function onWheel(e) {
      if (e.deltaY <= 0 || scrollLock.current) return;
      scrollLock.current = true;
      startVideo();
      setTimeout(() => { scrollLock.current = false; }, 1200);
    }

    function onTouchStart(e) {
      touchStartY = e.touches[0].clientY;
    }

    function onTouchEnd(e) {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      if (deltaY > 40 && !scrollLock.current) {
        scrollLock.current = true;
        startVideo();
        setTimeout(() => { scrollLock.current = false; }, 1200);
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // END: scroll down → open panel
  useEffect(() => {
    if (phase !== S.END) return;
    let touchStartY = 0;

    function onWheel(e) {
      if (e.deltaY <= 0 || scrollLock.current) return;
      scrollLock.current = true;
      setTimeout(() => { scrollLock.current = false; }, 1400);
      handleQuoteOpen();
    }

    function onTouchStart(e) {
      touchStartY = e.touches[0].clientY;
    }

    function onTouchEnd(e) {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      if (deltaY > 40 && !scrollLock.current) {
        scrollLock.current = true;
        setTimeout(() => { scrollLock.current = false; }, 1400);
        handleQuoteOpen();
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [phase, handleQuoteOpen]);

  // Panel: scroll up at top → close
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

  // Panel expand
  useEffect(() => {
    if (!quoteOpen) {
      setExpanded(false);
      return;
    }
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setExpanded(true);
      })
    );
    return () => cancelAnimationFrame(raf);
  }, [quoteOpen]);

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
          onEnded={() => setPhase(S.END)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isPlaying ? 0.35 : 1,
            background: 'linear-gradient(160deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.85) 100%)',
          }}
        />

        {/* PLAYING overlay */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-start justify-end px-10 md:px-16 pb-16 transition-opacity duration-700"
          style={{ opacity: isPlaying ? 1 : 0, pointerEvents: 'none' }}
        >
          <p
            className="font-dmsans font-medium text-[0.68rem] tracking-[0.3em] uppercase text-white/70 mb-4"
            style={{
              opacity: isPlaying ? 1 : 0,
              transform: isPlaying ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
              textShadow: '0 1px 10px rgba(0,0,0,0.8)'
            }}
          >
            Hubli, Karnataka &nbsp;·&nbsp; INDARC Authorised Distributor
          </p>
          <h2
            className="font-display font-bold text-white leading-[1.05]"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              textShadow: '0 2px 32px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.8)',
              opacity: isPlaying ? 1 : 0,
              transform: isPlaying ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
            }}
          >
            Bulk Welding Rods.<br /><em>Ready Stock. 24hr Dispatch.</em>
          </h2>
        </div>

        {/* IDLE */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 transition-opacity duration-500"
          style={{ opacity: isIdle ? 1 : 0, pointerEvents: isIdle ? 'auto' : 'none' }}
        >
          <p className="font-dmsans font-medium text-[0.55rem] md:text-[0.67rem] tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/80 mb-5 md:mb-8 drop-shadow-xl mx-auto leading-relaxed">
            <span className="md:hidden">INDARC E6013 &nbsp;·&nbsp; Hubli</span>
            <span className="hidden md:inline">INDARC E6013 Welding Rods &nbsp;·&nbsp; Hubli, Karnataka</span>
          </p>
          <h1
            className="font-display font-bold text-white leading-[1.05] md:leading-[1.03] mb-5 md:mb-6"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 6.2rem)', textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.6)' }}
          >
            Bulk Welding Rods.
            <br />
            <em style={{ fontSize: 'clamp(2.2rem, 9vw, 6.2rem)' }}>Authorised Distributor.</em>
          </h1>
          <p
            className="font-dmsans font-light text-white/90 text-[0.85rem] md:text-[1rem] tracking-wide max-w-[290px] md:max-w-[420px] mb-10 md:mb-12 leading-[1.6] md:leading-relaxed mx-auto"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)' }}
          >
            <span className="md:hidden">Karnataka's trusted supplier of genuine INDARC electrodes. Ready stock for fast dispatch.</span>
            <span className="hidden md:inline">Karnataka's trusted bulk supplier of genuine INDARC welding electrodes. Ready stock in Hubli for fast dispatch to contractors and fabrication teams.</span>
          </p>
          <div className="flex flex-col items-center gap-2 opacity-80 animate-bounce cursor-pointer" onClick={startVideo}>
            <p className="font-dmsans font-semibold text-[0.6rem] md:text-[0.67rem] tracking-[0.2em] md:tracking-[0.22em] uppercase text-white/90" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Scroll to watch</p>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-white drop-shadow-lg">
              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* END overlay */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-700"
          style={{ opacity: isEnd ? 1 : 0, pointerEvents: isEnd ? 'auto' : 'none' }}
        >
          <div style={{ opacity: showSizes ? 1 : 0, transform: showSizes ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.5s ease' }}>
            <p className="font-dmsans font-bold text-[#00BCD4] text-[0.75rem] tracking-[0.28em] uppercase mb-7 drop-shadow-md">
              3.5 mm &nbsp;·&nbsp; 4 mm &nbsp;·&nbsp; 4.5 mm
            </p>
          </div>
          <div style={{ opacity: showTitle ? 1 : 0, transform: showTitle ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.5s ease' }}>
            <h2
              className="font-display font-bold text-white leading-[1.05] mb-8 md:mb-10"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.6)' }}
            >
              <em>INDARC E6013 Rods</em>
              <br />
              Bulk Ready Stock. Hubli.
            </h2>
          </div>
          <div style={{ opacity: showCTA ? 1 : 0, transform: showCTA ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.5s ease', pointerEvents: 'auto' }}>
            <Link
              href="/contact"
              className="font-dmsans font-bold text-[0.78rem] tracking-[0.18em] uppercase text-white bg-[#00838F] px-10 py-4 rounded-full hover:bg-[#00BCD4] shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:shadow-[0_15px_40px_rgba(0,188,212,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer inline-block"
            >
              Request A Bulk Quote →
            </Link>
          </div>
          <Link
            href="/contact"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
            style={{ opacity: showCTA ? 0.75 : 0, transition: 'opacity 0.5s ease', pointerEvents: 'auto' }}
          >
            <p className="font-dmsans font-semibold text-[0.64rem] tracking-[0.22em] uppercase text-white/80" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>scroll for quote</p>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-white animate-bounce drop-shadow-lg">
              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── QUOTE PANEL ── */}
      {quoteOpen && (
        <div
          ref={panelRef}
          data-lenis-prevent="true"
          className="fixed inset-0 z-40 overflow-y-auto touch-pan-y"
          style={{
            background: '#EAE5D9',
            transform: expanded ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
            WebkitOverflowScrolling: 'touch',
          }}
          onScroll={(e) => {
            window.dispatchEvent(new CustomEvent('panelscroll', { detail: { scrollTop: e.currentTarget.scrollTop } }));
          }}
          onWheel={handlePanelWheel}
        >
          {/* ── SECTION 1: Product Cards - stacked naturally on mobile ── */}
          <div className="md:sticky md:top-0 min-h-screen md:h-screen flex flex-col bg-[#EAE5D9]" style={{ zIndex: 10 }}>
            {/* Subtle background texture/accent */}
            <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #000 0%, transparent 70%)' }} />
            
            <div className="h-[40px] md:h-[80px] flex-shrink-0" />
            <div className="flex items-start justify-between gap-4 px-6 md:px-14 pt-8 md:pt-6 pb-4 relative z-10">
              <div>
                <RevealText delay={0.1}>
                  <p className="font-dmsans text-[0.7rem] tracking-[0.25em] uppercase text-[#0D1557]/60 font-bold mb-2">
                    INDARC · Hubli, Karnataka
                  </p>
                </RevealText>
                <RevealText delay={0.2}>
                  <h2
                    className="font-display font-bold text-[#0D1557] leading-[1.05] tracking-tight"
                    style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
                  >
                    Request A Bulk Quote
                  </h2>
                </RevealText>
                <RevealText delay={0.3}>
                  <p className="font-dmsans font-light text-[#0D1557]/70 text-[1.05rem] md:text-[0.95rem] mt-4 md:mt-3 tracking-wide max-w-xl">
                    Choose your rod size below. We respond to all inquiries with a finalized quote within 24 hours.
                  </p>
                </RevealText>
              </div>
            </div>
            <div className="flex-1 px-5 md:px-14 pb-32 md:pb-16 pt-8 flex flex-col md:grid md:grid-cols-3 gap-[120px] md:gap-8 content-start md:content-center relative z-10">
              {CARDS.map((card, i) => (
                <div
                  key={card.size}
                  className="sticky md:static"
                  style={{
                    top: `calc(130px + ${i * 16}px)`,
                    zIndex: i + 1,
                  }}
                >
                  <RevealText delay={0.15 * i}>
                    <ProductCard card={card} visible={true} />
                  </RevealText>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 2: Why Us - horizontal scroll strip (Desktop) / vertical stack (Mobile) ── */}
          <WhyUsSection panelRef={panelRef} />

          {/* ── SECTION 3: Contact & Footer ── */}
          <div className="relative md:mt-[-100vh]" style={{ zIndex: 30 }}>
            <section
              className="relative min-h-screen flex flex-col justify-center px-6 md:px-14 py-20 md:py-16"
              style={{
                backgroundImage: 'url(/contact_bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark Premium Overlay */}
              <div className="absolute inset-0 bg-[#060A22]/85 backdrop-blur-[2px]" />
              
              <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                {/* Left */}
                <div>
                  <RevealText delay={0}>
                    <p className="font-dmsans font-bold text-[0.65rem] tracking-[0.28em] uppercase text-[#00838F] mb-5">
                      Get In Touch
                    </p>
                    <h3
                      className="font-display font-bold text-white leading-[1.0] mb-6"
                      style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.5rem)' }}
                    >
                      Talk directly<br /><em>with us.</em>
                    </h3>
                  </RevealText>
                  <RevealText delay={0.1}>
                    <p className="font-dmsans font-light text-white/60 text-[1rem] md:text-[0.9rem] leading-relaxed mb-10 max-w-sm hidden md:block">
                      No sales agents, no delays. Send your requirement - product size, quantity, delivery location - quote same day.
                    </p>
                  </RevealText>
                  
                  <div className="space-y-6 md:space-y-5 hidden md:block">
                    <RevealText delay={0.2}>
                      <a href="tel:+918043853656" className="flex items-center gap-5 md:gap-4 group">
                        <div className="w-12 h-12 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 bg-[#00838F]/20 border border-[#00BCD4]/20">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.69a16 16 0 006.29 6.29l1.21-1.21a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-dmsans font-bold text-[0.65rem] md:text-[0.58rem] tracking-[0.2em] uppercase text-white/40 mb-1 md:mb-0.5">Call</p>
                          <p className="font-dmsans font-medium text-white text-[1.1rem] md:text-[1rem] group-hover:text-[#00BCD4] transition-colors">+91 80438 53656</p>
                        </div>
                      </a>
                    </RevealText>
                    <RevealText delay={0.3}>
                      <a href="https://wa.me/918043853656" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 md:gap-4 group">
                        <div className="w-12 h-12 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 bg-[#00838F]/20 border border-[#00BCD4]/20">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-dmsans font-bold text-[0.65rem] md:text-[0.58rem] tracking-[0.2em] uppercase text-white/40 mb-1 md:mb-0.5">WhatsApp</p>
                          <p className="font-dmsans font-medium text-white text-[1.1rem] md:text-[1rem] group-hover:text-[#00BCD4] transition-colors">Fastest response</p>
                        </div>
                      </a>
                    </RevealText>
                    <RevealText delay={0.4}>
                      <div className="flex items-center gap-5 md:gap-4">
                        <div className="w-12 h-12 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#00838F]/10 border border-[#00BCD4]/10">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00838F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-dmsans font-bold text-[0.65rem] md:text-[0.58rem] tracking-[0.2em] uppercase text-white/40 mb-1 md:mb-0.5">Hours</p>
                          <p className="font-dmsans font-light text-white/60 text-[0.95rem] md:text-[0.88rem]">Mon–Sat, 9am–7pm IST</p>
                        </div>
                      </div>
                    </RevealText>
                  </div>
                </div>
                
                {/* Right: form */}
                <RevealText delay={0.3}>
                  <div
                    className="rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                  >
                    <p className="font-dmsans font-bold text-[0.65rem] md:text-[0.6rem] tracking-[0.25em] uppercase text-white/50 mb-8 md:mb-6">
                      Send Your Bulk Requirement
                    </p>
                    <ContactForm dark />
                  </div>
                </RevealText>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
