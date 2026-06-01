'use client';

import Link from 'next/link';

const products = [
  {
    size: '3.5',
    name: 'General Purpose Welding Rod',
    specs: [
      'General purpose welding',
      'Mild steel applications',
      'Stable arc · easy to use',
      'All-position welding',
      '350mm rod length',
      'Sheet metal & light frames',
    ],
  },
  {
    size: '4.0',
    name: 'Medium Structural Welding Rod',
    specs: [
      'Medium structural steel',
      'High deposition rate',
      'Easy slag removal',
      'All-position welding',
      'Construction & infrastructure',
      'Pipes, beams & channels',
    ],
  },
  {
    size: '4.5',
    name: 'Heavy Industrial Welding Rod',
    specs: [
      'Heavy industrial welding',
      'Deep penetration',
      'Excellent mechanical strength',
      'Flat & horizontal positions',
      'Heavy fabrication & machinery',
      'Thick plate & structural joints',
    ],
  },
];

function ProductCard({ p }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(0,188,212,0.2)] flex flex-col"
      style={{ background: '#1A237E', borderTop: '3px solid #00838F' }}
    >
      <div className="p-8 flex flex-col flex-1">
        <span
          className="inline-block font-dmsans font-semibold text-[0.62rem] tracking-[0.2em] uppercase text-[#00BCD4] px-3 py-1 rounded-full mb-6 self-start"
          style={{ background: 'rgba(0,188,212,0.1)', border: '1px solid rgba(0,188,212,0.25)' }}
        >
          INDARC E6013
        </span>
        <div className="mb-2">
          <span
            className="font-display font-bold text-white leading-none"
            style={{ fontSize: 'clamp(3.5rem, 5vw, 4.5rem)' }}
          >
            {p.size}
          </span>
          <span className="font-dmsans font-light text-white/35 text-xl ml-1">mm</span>
        </div>
        <p className="font-dmsans font-medium text-white/55 text-[0.82rem] mb-5">{p.name}</p>
        <div className="w-full h-px bg-white/10 mb-6" />
        <ul className="flex flex-col gap-3 flex-1">
          {p.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#00BCD4]" />
              <span className="font-dmsans font-light text-white/65 text-[0.82rem]">{spec}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/contact?product=${p.size}mm`}
          className="mt-8 block w-full text-center font-dmsans font-semibold text-[0.82rem] tracking-[0.1em] uppercase text-white py-3.5 rounded-lg transition-all duration-300 bg-[#00838F] hover:bg-[#00BCD4]"
        >
          Enquire for Bulk Price →
        </Link>
      </div>
    </div>
  );
}

export default function ProductCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.size} p={p} />
      ))}
    </div>
  );
}
