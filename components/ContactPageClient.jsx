'use client';

import { useState, useEffect, useRef } from 'react';
import Footer from './Footer';
import ContactForm from './ContactForm';

const faqs = [
  {
    q: 'Where is SS India Corporation located in Karnataka?',
    a: 'SS India Corporation is based in Hubli, Dharwad district, Karnataka. We operate a ready-stock warehouse supplying INDARC welding rods to contractors, fabrication workshops, and procurement teams across Karnataka.',
  },
  {
    q: 'Do you supply INDARC rods outside Hubli - to Dharwad, Belgaum, Davangere?',
    a: 'Yes. While headquartered in Hubli, we supply bulk INDARC E6013 rods across Karnataka including Dharwad, Belgaum (Belagavi), Davangere, Mysore, Bangalore, and surrounding districts. Call +91 80438 53656 for delivery options and pricing.',
  },
  {
    q: 'What is the minimum order quantity for bulk INDARC rods from Hubli?',
    a: 'We have no rigid minimum order quantity. We welcome trial orders as well as long-term contracts. Call +91 80438 53656 with your requirement - we price fairly at every volume level.',
  },
  {
    q: 'How quickly can SS India dispatch welding rods from Hubli?',
    a: 'Most confirmed bulk orders dispatch within 24 hours from our Hubli warehouse. We carry ready stock of INDARC E6013 in 3.5mm, 4mm, and 4.5mm - no waiting on production or inbound supply.',
  },
  {
    q: "Are SS India Corporation's INDARC welding rods 100% authentic?",
    a: 'Guaranteed. SS India Corporation is an authorised INDARC distributor and IndiaMART Verified Supplier. Every consignment is genuine INDARC brand - zero grey market or substitute stock, no exceptions.',
  },
  {
    q: 'What INDARC welding rod sizes are available in bulk from Hubli?',
    a: 'We stock three diameters of INDARC E6013: 3.5mm for sheet metal and light fabrication, 4mm for medium structural and construction, and 4.5mm for heavy industrial and thick plate welding. All three held in ready stock.',
  },
  {
    q: 'How do I get a bulk pricing quote from SS India Corporation?',
    a: "Call or WhatsApp +91 80438 53656. Share your rod size, quantity, and delivery location. You'll receive a custom bulk pricing quote within the same business day - no agents, no delays.",
  },
];

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-white/10 group">
      <div
        className="flex items-start justify-between gap-6 py-5 md:py-6 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="font-dmsans font-medium text-white/90 text-[1rem] md:text-[1.1rem] leading-snug pr-4 transition-colors group-hover:text-[#00BCD4]">
          {q}
        </h3>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-500 mt-0.5"
          style={{ transform: open ? 'rotate(135deg)' : 'rotate(0deg)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" className="text-white/40 group-hover:text-[#00BCD4] transition-colors" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <div
        className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
        style={{
          maxHeight: open ? '300px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <p className="font-dmsans font-light text-white/60 text-[0.95rem] leading-relaxed pb-6 md:pb-8 pr-10">
          {a}
        </p>
      </div>
    </div>
  );
}

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

export default function ContactPageClient() {
  const [imgReady, setImgReady] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const t1 = setTimeout(() => setImgReady(true), 80);
    const t2 = setTimeout(() => setContentReady(true), 780);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* ── MOBILE HERO BANNER (Top) ── */}
      <div className="md:hidden w-full h-[35vh] relative overflow-hidden bg-[#080D2E]">
        <img
          src="/contact_hero.png"
          alt="Corporate Engineering Desk"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D2E] via-[#080D2E]/40 to-transparent opacity-100" />
      </div>

      {/* ── SPLIT LAYOUT ── */}
      <div className="flex flex-col md:flex-row md:h-screen bg-[#080D2E]">
        {/* Left - image slides in from left (Desktop Only) */}
        <div
          className="hidden md:block w-[45%] lg:w-1/2 flex-shrink-0 overflow-hidden relative"
          style={{
            transform: imgReady ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <img
            src="/contact_hero.png"
            alt="Corporate Engineering Desk"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(8,13,46,0.3) 0%, rgba(0,0,0,0.4) 100%)' }}
          />
          <div className="absolute bottom-8 left-8">
            <p className="font-dmsans font-bold uppercase text-white/50 text-[0.62rem] tracking-[0.22em]">
              SS India Corporation · Hubli, Karnataka
            </p>
          </div>
        </div>

        {/* Right - fades in after image, fills remaining height */}
        <div
          className="flex-1 flex flex-col justify-center md:overflow-y-auto px-6 py-8 pb-16 md:px-14 lg:px-20 md:py-0"
          style={{
            opacity: contentReady ? 1 : 0,
            transform: contentReady ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.55s ease, transform 0.55s ease',
          }}
        >
          <div className="w-full max-w-lg md:max-w-none mx-auto md:pt-[68px]">
            <RevealText delay={0}>
              <h1
                className="font-display font-bold text-white leading-[1.0] mb-2"
                style={{ fontSize: 'clamp(2.8rem, 3.5vw, 4rem)' }}
              >
                Get in touch.
              </h1>
            </RevealText>
            
            <RevealText delay={0.1}>
              <p className="font-dmsans font-medium text-white/60 text-[0.95rem] mb-8">
                Same business day response - +91 80438 53656
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <ContactForm dark />
              </div>
            </RevealText>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="px-5 md:px-14 py-20 md:py-32" style={{ background: '#080D2E' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <RevealText delay={0}>
              <div>
                <p className="font-dmsans font-bold text-[0.65rem] tracking-[0.25em] uppercase text-[#00BCD4] mb-4">
                  Frequently Asked Questions
                </p>
                <h2
                  className="font-display font-bold text-white leading-[1.05]"
                  style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', letterSpacing: '-0.02em' }}
                >
                  Questions About<br /><em>Buying From Hubli</em>
                </h2>
              </div>
            </RevealText>
            
            <RevealText delay={0.1}>
              <p className="font-dmsans font-light text-white/50 text-[1rem] max-w-[300px] leading-relaxed mb-2">
                Karnataka B2B buyers - answers to the most common INDARC sourcing questions.
              </p>
            </RevealText>
          </div>

          <div className="grid gap-2">
            {faqs.map((faq, i) => (
              <RevealText key={i} delay={0.2 + i * 0.05}>
                <FaqItem
                  q={faq.q}
                  a={faq.a}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
