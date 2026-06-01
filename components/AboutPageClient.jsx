'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

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

export default function AboutPageClient() {
  const [scrollY, setScrollY] = useState(0);
  const horizontalScrollRef = useRef(null);
  const [horizontalProgress, setHorizontalProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (horizontalScrollRef.current) {
        const rect = horizontalScrollRef.current.getBoundingClientRect();
        const totalScroll = rect.height - window.innerHeight;
        const currentScroll = -rect.top;
        if (currentScroll < 0) {
           setHorizontalProgress(0);
        } else if (currentScroll > totalScroll) {
           setHorizontalProgress(1);
        } else {
           setHorizontalProgress(currentScroll / totalScroll);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section 3 logic: Active owner portrait
  const santoshRef = useRef(null);
  const sandeepRef = useRef(null);
  const [activeOwner, setActiveOwner] = useState('santosh');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveOwner(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    if (santoshRef.current) observer.observe(santoshRef.current);
    if (sandeepRef.current) observer.observe(sandeepRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#040714] text-white">
      {/* ── SECTION 1: HERO PARALLAX ── */}
      {/* We make a 150vh container on desktop for parallax, 125vh on mobile so Section 2 can overlap */}
      <div className="h-[125vh] md:h-[150vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-end pb-32 md:pb-32 px-6 md:px-14 z-10">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/about_hero.png)',
                opacity: Math.max(0.3, 1 - scrollY / (typeof window !== 'undefined' ? window.innerHeight : 1000)),
                transform: `scale(${1 + scrollY * 0.0002})`,
                transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
              }}
            />
            {/* Base dark layer underneath */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-[#040714]/60 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-5xl">
            <RevealText delay={0}>
              <p className="font-dmsans font-medium text-[0.68rem] tracking-[0.25em] uppercase text-[#00BCD4] mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2 opacity-40">/</span>About Us
              </p>
            </RevealText>
            <RevealText delay={0.1}>
              <h1
                className="font-display font-bold text-white leading-[1.05] md:leading-[0.9] mb-6 md:mb-8 drop-shadow-xl"
                style={{ fontSize: 'clamp(2.5rem, 9vw, 8rem)', letterSpacing: '-0.02em' }}
              >
                A Supplier You Can<br />
                <em className="text-white/80">Build a Relationship With</em>
              </h1>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-dmsans font-light text-white/80 text-[0.95rem] md:text-[1.1rem] leading-relaxed max-w-sm md:max-w-lg">
                Owner-managed by Santosh & Sandeep. Verified. Hubli-based.
                Karnataka's fastest growing INDARC distributor since 2015.
              </p>
            </RevealText>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: LEGACY & STATS STACKING ── */}
      {/* Slides over the Hero because of mt-[-25vh] on mobile and mt-[-50vh] on desktop */}
      <div className="relative z-20 px-6 md:px-14 py-16 md:py-20 bg-[#080D2E] mt-[-25vh] md:mt-[-50vh] rounded-t-[2.5rem] md:rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 pt-10">
          {/* Left: Sticky Story */}
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-160px)] flex flex-col">
            <RevealText delay={0}>
              <p className="font-dmsans font-bold text-[0.6rem] tracking-[0.28em] uppercase text-[#00838F] mb-6">
                Our Legacy
              </p>
            </RevealText>
            <RevealText delay={0.1}>
              <blockquote
                className="font-display italic font-bold text-white leading-[1.1] mb-10 md:mb-12"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                "Supply authentic INDARC rods direct to B2B buyers - no markup, no delays."
              </blockquote>
            </RevealText>
            <div className="space-y-8 max-w-md">
              <RevealText delay={0.2}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#00838F]/10 border border-[#00BCD4]/20 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <p className="font-dmsans font-bold text-white text-[1.1rem] mb-2">Zero Middlemen</p>
                    <p className="font-dmsans text-white/60 text-[0.95rem] leading-[1.7]">We bypassed the multi-tier distribution network to bring you authentic INDARC rods directly.</p>
                  </div>
                </div>
              </RevealText>
              <RevealText delay={0.3}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#00838F]/10 border border-[#00BCD4]/20 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                  </div>
                  <div>
                    <p className="font-dmsans font-bold text-white text-[1.1rem] mb-2">Owner-Direct</p>
                    <p className="font-dmsans text-white/60 text-[0.95rem] leading-[1.7]">No sales agents. No delays. You deal directly with the owners for honest pricing and instant decisions.</p>
                  </div>
                </div>
              </RevealText>
              <RevealText delay={0.4}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#00838F]/10 border border-[#00BCD4]/20 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                  </div>
                  <div>
                    <p className="font-dmsans font-bold text-white text-[1.1rem] mb-2">Hubli Based</p>
                    <p className="font-dmsans text-white/60 text-[0.95rem] leading-[1.7]">Strategically located to supply 500+ clients across Karnataka with unprecedented speed.</p>
                  </div>
                </div>
              </RevealText>
            </div>
          </div>

          {/* Right: Stacking Stat Cards */}
          <div className="relative space-y-10 pb-[10vh] lg:pb-[20vh]">
            {[
              { num: '10+', label: 'Years Active', desc: 'A decade of uninterrupted supply to Karnataka.' },
              { num: '500+', label: 'Clients Served', desc: 'Fabricators, EPCs, and contractors trust us.' },
              { num: '3', label: 'SKUs In Stock', desc: '3.5mm, 4mm, 4.5mm E6013 always available.' },
              { num: '24hr', label: 'Dispatch', desc: 'Order today, dispatched by tomorrow.' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="sticky rounded-3xl p-10 md:p-14 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-500"
                style={{ 
                  top: `${100 + i * 20}px`
                }}
              >
                <div className="flex flex-col gap-4">
                  <span
                    className="font-display font-bold text-[#00838F] leading-none"
                    style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', letterSpacing: '-0.04em' }}
                  >
                    {stat.num}
                  </span>
                  <div>
                    <h3 className="font-dmsans font-bold uppercase text-white text-[1rem] tracking-widest mb-3">
                      {stat.label}
                    </h3>
                    <p className="font-dmsans font-medium text-white/60 text-[1rem] leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 3: OWNERS PORTRAIT PROGRESSION ── */}
      <div className="relative z-20 bg-[#080D2E] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Sticky Portrait Container */}
          <div className="hidden lg:block sticky top-0 h-screen">
            <div className="absolute inset-0 p-14">
              <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                {/* Santosh Image */}
                <img
                  src="/owner_santosh.png"
                  alt="Santosh - Co-Founder"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: activeOwner === 'santosh' ? 1 : 0 }}
                />
                {/* Sandeep Image */}
                <img
                  src="/owner_sandeep.png"
                  alt="Sandeep - Co-Founder"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: activeOwner === 'sandeep' ? 1 : 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D2E] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-10 left-10">
                  <p className="font-display font-bold text-white text-4xl mb-2">
                    {activeOwner === 'santosh' ? 'Santosh' : 'Sandeep'}
                  </p>
                  <p className="font-dmsans font-medium text-[#00BCD4] text-[0.75rem] tracking-[0.2em] uppercase">
                    Co-Founder & Owner
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Bios / Mobile Carousel */}
          <div className="lg:py-[30vh] lg:px-14">
            
            {/* MOBILE LAYOUT (Horizontal Scroll-jacking) */}
            <div className="lg:hidden relative h-[200vh] bg-[#080D2E]" ref={horizontalScrollRef}>
              <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden">
                <div 
                  className="flex gap-6 px-6 w-max transition-transform duration-75 ease-linear"
                  style={{ transform: `translateX(calc(-${horizontalProgress} * (100vw - 1.5rem)))` }}
                >
                  {/* Santosh Card */}
                  <div className="w-[calc(100vw-3rem)] shrink-0 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-5 shadow-2xl flex flex-col gap-6">
                    <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-inner">
                      <img src="/owner_santosh.png" alt="Santosh" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080D2E] via-[#080D2E]/20 to-transparent opacity-90" />
                      <div className="absolute bottom-5 left-5">
                        <p className="font-display font-bold text-white text-3xl mb-1">Santosh</p>
                        <p className="font-dmsans font-bold text-[#00BCD4] text-[0.6rem] tracking-[0.2em] uppercase">Co-Founder & Owner</p>
                      </div>
                    </div>
                    <div className="px-2 pb-2">
                      <RevealText delay={0}>
                        <p className="font-dmsans font-bold text-[0.6rem] tracking-[0.28em] uppercase text-[#00838F] mb-3">The Logistics</p>
                      </RevealText>
                      <RevealText delay={0.1}>
                        <h2 className="font-display font-bold text-white text-[1.5rem] leading-[1.2] mb-3">
                          Santosh ensures your consignment leaves Hubli on time.
                        </h2>
                      </RevealText>
                      <RevealText delay={0.2}>
                        <p className="font-dmsans font-medium text-white/70 text-[0.9rem] leading-[1.6]">
                          With over a decade in the welding consumables industry, Santosh manages client relationships and bulk order logistics. When you call to check on a delivery, he is the one coordinating directly with the transport hubs.
                        </p>
                      </RevealText>
                    </div>
                  </div>

                  {/* Sandeep Card */}
                  <div className="w-[calc(100vw-3rem)] shrink-0 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-5 shadow-2xl flex flex-col gap-6">
                    <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-inner">
                      <img src="/owner_sandeep.png" alt="Sandeep" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080D2E] via-[#080D2E]/20 to-transparent opacity-90" />
                      <div className="absolute bottom-5 left-5">
                        <p className="font-display font-bold text-white text-3xl mb-1">Sandeep</p>
                        <p className="font-dmsans font-bold text-[#00BCD4] text-[0.6rem] tracking-[0.2em] uppercase">Co-Founder & Owner</p>
                      </div>
                    </div>
                    <div className="px-2 pb-2">
                      <RevealText delay={0}>
                        <p className="font-dmsans font-bold text-[0.6rem] tracking-[0.28em] uppercase text-[#00838F] mb-3">The Product</p>
                      </RevealText>
                      <RevealText delay={0.1}>
                        <h2 className="font-display font-bold text-white text-[1.5rem] leading-[1.2] mb-3">
                          Sandeep guarantees every rod is 100% authentic INDARC.
                        </h2>
                      </RevealText>
                      <RevealText delay={0.2}>
                        <p className="font-dmsans font-medium text-white/70 text-[0.9rem] leading-[1.6]">
                          As the product and procurement specialist, Sandeep manages stock integrity and supplier relationships. He is the reason we can confidently claim zero grey market stock.
                        </p>
                      </RevealText>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP LAYOUT (Vertical Scrolling Bios) */}
            <div className="hidden lg:flex flex-col gap-[50vh]">
              <div id="santosh" ref={santoshRef} className="max-w-xl transition-all duration-700" style={{ opacity: activeOwner === 'santosh' ? 1 : 0.3 }}>
                <RevealText delay={0}>
                  <p className="font-dmsans font-bold text-[0.6rem] tracking-[0.28em] uppercase text-[#00838F] mb-6">
                    The Logistics
                  </p>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="font-display font-bold text-white text-6xl leading-[1.1] mb-8">
                    Santosh ensures your consignment leaves Hubli on time.
                  </h2>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="font-dmsans font-medium text-white/70 text-[1.1rem] leading-relaxed mb-6">
                    With over a decade in the welding consumables industry, Santosh manages client relationships and bulk order logistics. When you call to check on a delivery, he is the one coordinating directly with the transport hubs.
                  </p>
                </RevealText>
              </div>

              <div id="sandeep" ref={sandeepRef} className="max-w-xl pb-[20vh] transition-all duration-700" style={{ opacity: activeOwner === 'sandeep' ? 1 : 0.3 }}>
                <RevealText delay={0}>
                  <p className="font-dmsans font-bold text-[0.6rem] tracking-[0.28em] uppercase text-[#00838F] mb-6">
                    The Product
                  </p>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="font-display font-bold text-white text-6xl leading-[1.1] mb-8">
                    Sandeep guarantees every rod is 100% authentic INDARC.
                  </h2>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="font-dmsans font-medium text-white/70 text-[1.1rem] leading-relaxed mb-6">
                    As the product and procurement specialist, Sandeep manages stock integrity and supplier relationships. He is the reason we can confidently claim zero grey market stock.
                  </p>
                </RevealText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
