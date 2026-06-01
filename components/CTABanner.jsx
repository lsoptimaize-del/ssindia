'use client';

import Link from 'next/link';

export default function CTABanner({ headline, subtext, buttonText, buttonHref }) {
  return (
    <section
      className="w-full py-14 md:py-20 px-6 text-center"
      style={{ background: '#0D1557', borderTop: '2px solid #00838F' }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-display font-bold text-white leading-[1.1] mb-5"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
        >
          {headline}
        </h2>
        {subtext && (
          <p className="font-dmsans font-light text-white/65 text-[1rem] leading-relaxed mb-10 max-w-xl mx-auto">
            {subtext}
          </p>
        )}
        <Link
          href={buttonHref || '/contact'}
          className="inline-flex items-center font-dmsans font-semibold text-[0.88rem] tracking-[0.12em] uppercase text-white px-10 py-4 rounded-lg transition-all duration-300 mb-6"
          style={{ background: '#00838F' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#00BCD4')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#00838F')}
        >
          {buttonText}
        </Link>
        <p className="font-dmsans text-[0.75rem] text-white/30 tracking-wide">
          +91 80438 53656 &nbsp;·&nbsp; WhatsApp Available &nbsp;·&nbsp; Same-Day Response
        </p>
      </div>
    </section>
  );
}
