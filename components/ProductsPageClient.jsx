'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 'size-3',
    size: '3.5',
    img: '/3mm.png',
    name: 'General Purpose Welding Rod',
    app: 'Sheet metal & light frames',
    buyer: 'Workshops, small contractors',
    pen: 'Medium Penetration',
    pos: 'All Positions',
    desc: 'The industry standard for general mild steel applications. Delivers a stable arc with extremely easy slag removal. Perfect for everyday fabrication.',
  },
  {
    id: 'size-4',
    size: '4.0',
    img: '/4mm.png',
    name: 'Medium Structural Welding Rod',
    app: 'Construction & infrastructure',
    buyer: 'Contractors, EPC firms',
    pen: 'Medium-High Penetration',
    pos: 'All Positions',
    desc: 'Engineered for structural steel where higher deposition rates are required. Ensures high-integrity joints for beams, channels, and pipes.',
  },
  {
    id: 'size-45',
    size: '4.5',
    img: '/4-5mm.png',
    name: 'Heavy Industrial Welding Rod',
    app: 'Heavy fabrication & machinery',
    buyer: 'Industrial plants, heavy fab',
    pen: 'Deep Penetration',
    pos: 'Flat & Horizontal',
    desc: 'Built for thick plate and heavy structural joints. Provides excellent mechanical strength and deep penetration for critical industrial machinery.',
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

export default function ProductsPageClient() {
  const [activeProduct, setActiveProduct] = useState('size-3');

  return (
    <div className="bg-[#040714] text-white selection:bg-[#00BCD4] selection:text-white">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col justify-end pt-[100px] pb-16 md:pb-24 px-6 md:px-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bulk_inventory.png"
            alt="Industrial bulk inventory"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-[#040714]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040714] to-transparent opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-5xl">
          <RevealText delay={0}>
            <p className="font-dmsans font-semibold text-[0.68rem] tracking-[0.25em] uppercase text-[#00BCD4] mb-4 md:mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 opacity-40">/</span>Products
            </p>
          </RevealText>
          <RevealText delay={0.1}>
            <h1
              className="font-display font-bold text-white leading-[1.0] mb-6 md:mb-8"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}
            >
              Built for Scale.<br />
              <em className="text-white/70">Ready to Dispatch.</em>
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-dmsans font-light text-white/70 text-[1rem] md:text-[1.15rem] leading-relaxed max-w-lg">
              Genuine INDARC E6013 welding rods in three precise diameters. Stocked at our Hubli warehouse for immediate B2B fulfillment.
            </p>
          </RevealText>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE (Interactive Switcher) ── */}
      <section className="relative z-20 bg-[#040714] border-t border-white/5 py-12 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
          
          {/* LEFT: Product Image Display */}
          <div className="flex flex-col justify-center items-center px-6 lg:p-14 lg:border-r border-white/5">
            <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-[600px] rounded-3xl overflow-hidden bg-[#040714] lg:bg-white/5 lg:backdrop-blur-3xl border border-white/10 shadow-2xl lg:shadow-[0_0_100px_rgba(0,188,212,0.05)]">
              {products.map((p) => (
                <div
                  key={`img-${p.id}`}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeProduct === p.id ? 1 : 0,
                    pointerEvents: activeProduct === p.id ? 'auto' : 'none',
                    transform: activeProduct === p.id ? 'scale(1)' : 'scale(1.05)',
                  }}
                >
                  <Image
                    src={p.img}
                    alt={`${p.size}mm INDARC rod`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-[#040714]/20 to-transparent opacity-90" />
                </div>
              ))}
              
              {/* Product Size Label overlay */}
              <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 flex items-baseline gap-2 z-10">
                <span className="font-display font-bold text-white text-6xl lg:text-[5rem] leading-none lg:leading-[0.8]">
                  {products.find(p => p.id === activeProduct)?.size}
                </span>
                <span className="font-dmsans font-medium text-white/40 text-sm lg:text-xl tracking-widest uppercase">
                  mm
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Details & Switcher */}
          <div className="w-full px-6 md:px-16 lg:px-20 flex flex-col justify-center">
            
            {/* Tabs / Switcher */}
            <RevealText delay={0}>
              <div className="flex gap-4 mb-10 overflow-x-auto hide-scrollbar pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {products.map(p => (
                  <button
                    key={`tab-${p.id}`}
                    onClick={() => setActiveProduct(p.id)}
                    className={`px-6 py-3 rounded-full font-dmsans font-bold text-[0.8rem] tracking-widest uppercase transition-all duration-300 shrink-0 ${
                      activeProduct === p.id 
                        ? 'bg-[#00BCD4] text-[#040714] shadow-[0_10px_20px_rgba(0,188,212,0.3)]' 
                        : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {p.size} MM
                  </button>
                ))}
              </div>
            </RevealText>

            {/* Content Container (relative for absolute fading layers) */}
            <div className="relative min-h-[480px]">
              {products.map((p) => (
                <div
                  key={`content-${p.id}`}
                  className="absolute inset-0 transition-all duration-500 ease-in-out"
                  style={{ 
                    opacity: activeProduct === p.id ? 1 : 0,
                    pointerEvents: activeProduct === p.id ? 'auto' : 'none',
                    transform: activeProduct === p.id ? 'translateY(0)' : 'translateY(10px)',
                  }}
                >
                  <RevealText delay={0.1}>
                    <div className="inline-block mb-4">
                      <span className="font-dmsans font-bold text-[0.65rem] tracking-[0.25em] uppercase text-[#00BCD4] px-4 py-1.5 rounded-full border border-[#00BCD4]/30 bg-[#00BCD4]/10">
                        INDARC E6013
                      </span>
                    </div>
                  </RevealText>
                  
                  <RevealText delay={0.2}>
                    <h2 className="font-display font-bold text-white text-[1.8rem] md:text-5xl lg:text-5xl leading-[1.15] lg:leading-[1.1] mb-4">
                      {p.name}
                    </h2>
                  </RevealText>
                  
                  <RevealText delay={0.3}>
                    <p className="font-dmsans font-light text-white/70 text-[0.95rem] lg:text-[1.1rem] leading-relaxed mb-8 max-w-lg">
                      {p.desc}
                    </p>
                  </RevealText>

                  <RevealText delay={0.4}>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-10">
                      <div>
                        <p className="font-dmsans font-semibold text-[0.55rem] lg:text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-1">Ideal For</p>
                        <p className="font-dmsans text-white/90 font-medium text-[0.85rem] lg:text-[0.95rem]">{p.app}</p>
                      </div>
                      <div>
                        <p className="font-dmsans font-semibold text-[0.55rem] lg:text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-1">Perfect For</p>
                        <p className="font-dmsans text-white/90 font-medium text-[0.85rem] lg:text-[0.95rem]">{p.buyer}</p>
                      </div>
                      <div>
                        <p className="font-dmsans font-semibold text-[0.55rem] lg:text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-1">Penetration</p>
                        <p className="font-dmsans text-white/90 font-medium text-[0.85rem] lg:text-[0.95rem]">{p.pen}</p>
                      </div>
                      <div>
                        <p className="font-dmsans font-semibold text-[0.55rem] lg:text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-1">Position</p>
                        <p className="font-dmsans text-white/90 font-medium text-[0.85rem] lg:text-[0.95rem]">{p.pos}</p>
                      </div>
                    </div>
                  </RevealText>

                  <RevealText delay={0.5}>
                    <Link
                      href={`/contact?product=${p.size}mm`}
                      className="inline-flex items-center justify-center font-dmsans font-bold text-[0.75rem] lg:text-[0.8rem] tracking-[0.15em] uppercase text-white px-8 py-4 rounded-full transition-all duration-300 bg-[#00838F] hover:bg-[#00BCD4] hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] w-max"
                    >
                      Enquire for Bulk Price →
                    </Link>
                  </RevealText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
