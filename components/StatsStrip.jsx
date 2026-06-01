'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { number: 10, suffix: '+', label: 'Years Experience' },
  { number: 500, suffix: '+', label: 'B2B Clients Served' },
  { number: 3, suffix: '', label: 'Rod Sizes In Stock' },
  { number: 24, suffix: 'hr', label: 'Dispatch Available' },
  { number: 100, suffix: '%', label: 'Authentic INDARC' },
];

function useCountUp(target, duration = 1500, triggered) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered, target, duration]);

  return value;
}

function StatItem({ number, suffix, label, triggered, isLast }) {
  const count = useCountUp(number, 1500, triggered);

  return (
    <div
      className={`flex flex-col items-center justify-center py-8 px-6 flex-1 ${!isLast ? 'border-r border-white/10' : ''}`}
    >
      <span className="font-display font-extrabold text-[#00BCD4] text-[2rem] leading-none">
        {count}
        {suffix}
      </span>
      <span className="font-dmsans font-medium uppercase text-[#78909C] text-[0.7rem] tracking-[0.1em] mt-2 text-center">
        {label}
      </span>
    </div>
  );
}

export default function StatsStrip() {
  const [triggered, setTriggered] = useState(false);
  const stripRef = useRef(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={stripRef}
      className="w-full bg-[#0D1557] border-t-2 border-[#00838F]"
    >
      {/* Desktop: flex row */}
      <div className="hidden sm:flex justify-around">
        {STATS.map((stat, i) => (
          <StatItem
            key={stat.label}
            {...stat}
            triggered={triggered}
            isLast={i === STATS.length - 1}
          />
        ))}
      </div>

      {/* Mobile: 2-col grid */}
      <div className="sm:hidden grid grid-cols-2">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center py-6 px-4 ${
              i % 2 === 0 ? 'border-r border-white/10' : ''
            } ${i < STATS.length - 2 ? 'border-b border-white/10' : ''} ${
              STATS.length % 2 !== 0 && i === STATS.length - 1
                ? 'col-span-2'
                : ''
            }`}
          >
            <span className="font-display font-extrabold text-[#00BCD4] text-[1.75rem] leading-none">
              <StatCount
                number={stat.number}
                suffix={stat.suffix}
                triggered={triggered}
              />
            </span>
            <span className="font-dmsans font-medium uppercase text-[#78909C] text-[0.68rem] tracking-[0.1em] mt-1.5 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCount({ number, suffix, triggered }) {
  const count = useCountUp(number, 1500, triggered);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}
