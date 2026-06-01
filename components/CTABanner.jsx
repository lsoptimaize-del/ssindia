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

export default function CTABanner({ headline, subtext = '', buttonText, buttonHref, theme = 'dark' }) {
  const isCream = theme === 'cream';
  
  const bg = isCream ? '#EAE5D9' : '#080D2E';
  const textPrimary = isCream ? '#080D2E' : '#ffffff';
  const textSecondary = isCream ? 'rgba(8,13,46,0.65)' : 'rgba(255,255,255,0.65)';
  const border = isCream ? '1px solid rgba(8,13,46,0.1)' : '2px solid rgba(255,255,255,0.05)';
  const btnBg = isCream ? '#080D2E' : '#ffffff';
  const btnHover = isCream ? '#00BCD4' : '#e0e0e0';
  const btnText = isCream ? '#ffffff' : '#080D2E';
  
  return (
    <section
      className="w-full py-20 md:py-28 px-6 text-center transition-colors duration-500 overflow-hidden"
      style={{ background: bg, borderTop: border }}
    >
      <div className="max-w-3xl mx-auto">
        <RevealText delay={0}>
          <h2
            className="font-display font-bold leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: textPrimary, letterSpacing: '-0.02em' }}
          >
            {headline}
          </h2>
        </RevealText>
        {subtext && (
          <RevealText delay={0.1}>
            <p className="font-dmsans font-medium text-[1.1rem] leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: textSecondary }}>
              {subtext}
            </p>
          </RevealText>
        )}
        <RevealText delay={0.2}>
          <Link
            href={buttonHref || '/contact'}
            className="inline-flex items-center font-dmsans font-bold text-[0.85rem] tracking-[0.15em] uppercase px-12 py-5 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1 mb-8"
            style={{ background: btnBg, color: btnText }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = btnHover;
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = btnBg;
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }}
          >
            {buttonText}
          </Link>
        </RevealText>
        <RevealText delay={0.3}>
          <p className="font-dmsans font-medium text-[0.7rem] tracking-widest uppercase" style={{ color: isCream ? 'rgba(13,21,87,0.4)' : 'rgba(255,255,255,0.3)' }}>
            +91 80438 53656 &nbsp;·&nbsp; WhatsApp Available &nbsp;·&nbsp; Same-Day Response
          </p>
        </RevealText>
      </div>
    </section>
  );
}
