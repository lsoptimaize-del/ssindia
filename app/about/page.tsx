import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About SS India Corporation | INDARC Welding Rods Hubli',
  description: "Owner-managed by Santosh & Sandeep. Karnataka's fastest growing INDARC welding rod distributor.",
};

const industries = [
  { name: 'Construction Companies', desc: 'Structural welding for buildings, bridges, and civil infrastructure across Karnataka.' },
  { name: 'Fabrication Workshops', desc: 'Sheet metal, general fabrication, light to heavy structural work at volume pricing.' },
  { name: 'Engineering & Maintenance', desc: 'Plant maintenance, equipment repair, and on-site industrial engineering teams.' },
  { name: 'Wholesale Distributors', desc: 'Bulk resale partners and regional distributors across Karnataka and Dharwad.' },
  { name: 'Procurement Departments', desc: 'EPC firms and corporate procurement teams sourcing verified, documented supply.' },
  { name: 'Auto & Heavy Equipment', desc: 'Vehicle body shops, earthmover repair, and heavy machinery fabrication units.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar solid />

      {/* ── HERO — full-bleed image, left-anchored editorial ── */}
      <section className="relative flex items-end pt-[68px]" style={{ minHeight: '70vh' }}>
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80"
          alt="Industrial welding facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(13,21,87,0.88) 0%, rgba(13,21,87,0.55) 55%, rgba(0,0,0,0.2) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-14 pb-10 md:pb-16 w-full">
          <p className="font-dmsans font-medium text-[0.68rem] tracking-[0.25em] uppercase text-[#00BCD4] mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 opacity-40">/</span>About Us
          </p>
          <h1
            className="font-display font-bold text-white leading-[1.0] mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
          >
            A Supplier You Can Build a<br />
            <em>Long-Term Relationship With</em>
          </h1>
          <p className="font-dmsans font-light text-white/65 text-[1rem] leading-relaxed max-w-[520px]">
            Owner-managed by Santosh &amp; Sandeep. Verified. Hubli-based.<br />
            Karnataka's fastest growing INDARC distributor since 2015.
          </p>
        </div>
      </section>

      {/* ── CLAIMS TICKER — horizontal scrolling strip ── */}
      <div className="w-full py-3.5 overflow-hidden" style={{ background: '#00838F' }}>
        <div className="flex items-center gap-10 whitespace-nowrap animate-[marquee_30s_linear_infinite]"
          style={{ width: 'max-content' }}>
          {Array(3).fill([
            "Karnataka's Fastest Growing Supplier",
            '10+ Years Industry Experience',
            '500+ B2B Clients Served',
            '24hr Order Turnaround',
            'INDARC Authorised Distributor',
            'IndiaMART Verified',
          ]).flat().map((claim, i) => (
            <span key={i} className="flex items-center gap-10 font-dmsans font-bold uppercase text-white text-[0.68rem] tracking-[0.18em]">
              {claim}
              <span className="w-1 h-1 rounded-full bg-white/40 inline-block flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── OUR STORY — asymmetric editorial layout ── */}
      <section className="py-16 md:py-28 px-5 md:px-14" style={{ background: '#F5F7FF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 mb-20">
            {/* Large pull-quote left */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="w-px bg-[#00838F] h-16 mb-8" />
              <blockquote
                className="font-display italic font-bold text-[#0D1557] leading-[1.1]"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)' }}
              >
                "Supply authentic INDARC rods direct to B2B buyers — no markup, no delays."
              </blockquote>
              <p className="font-dmsans text-[0.75rem] tracking-[0.18em] uppercase text-[#78909C] mt-6">
                — Santosh &amp; Sandeep, Founders
              </p>
            </div>
            {/* Story paras right */}
            <div className="lg:col-span-7 space-y-7">
              <p className="font-dmsans text-[#37474F] leading-[1.8] text-[0.97rem]" style={{ fontWeight: 300 }}>
                Founded in Hubli, Dharwad — SS India Corporation was built with one mission: get authentic
                INDARC welding rods to B2B buyers with no middlemen and none of the delays of multi-tier
                distribution. Today we are one of Karnataka's fastest growing welding consumables
                distributors, serving 500+ business clients.
              </p>
              <p className="font-dmsans text-[#37474F] leading-[1.8] text-[0.97rem]" style={{ fontWeight: 300 }}>
                With 10+ years of combined experience, we have built lasting relationships with fabrication
                workshops, construction contractors, engineering firms, and procurement managers across
                Karnataka. They return because SS India delivers — on time, every time.
              </p>
              <p className="font-dmsans text-[#37474F] leading-[1.8] text-[0.97rem]" style={{ fontWeight: 300 }}>
                Every order is handled owner-direct by Santosh or Sandeep. No sales agents, no layers —
                just honest pricing, faster decisions, and real accountability. Our phones are always on.
              </p>
            </div>
          </div>

          {/* Stats row — large typographic numbers */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-[#E8EAF6]"
          >
            {[
              { num: '10+', label: 'Years Active' },
              { num: '500+', label: 'Clients Served' },
              { num: '3', label: 'SKUs In Stock' },
              { num: '24hr', label: 'Dispatch' },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center py-8 md:py-10 px-4 text-center"
                style={{ background: i % 2 === 0 ? '#ffffff' : '#F5F7FF' }}
              >
                <span
                  className="font-display font-bold text-[#00838F] leading-none mb-2"
                  style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
                >
                  {s.num}
                </span>
                <span className="font-dmsans font-semibold uppercase text-[#78909C] text-[0.65rem] tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE OWNERS — open, minimal, personal ── */}
      <section className="py-16 md:py-28 px-5 md:px-14 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="font-dmsans font-semibold text-[0.68rem] tracking-[0.22em] uppercase text-[#00838F] mb-3">
                Meet the Owners
              </p>
              <h2
                className="font-display font-bold text-[#0D1557] leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
              >
                The People Behind<br /><em>Every Order</em>
              </h2>
            </div>
            <p className="font-dmsans font-light text-[#78909C] text-[0.88rem] max-w-xs leading-relaxed">
              When you call SS India Corporation, you speak to one of these two men directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                initial: 'S', name: 'Santosh', role: 'Co-Founder & Owner',
                bio: 'Over a decade in the welding consumables industry. Santosh manages client relationships, bulk order logistics, and ensures every consignment leaves Hubli on time and to spec.',
                accent: '#0D1557',
              },
              {
                initial: 'S', name: 'Sandeep', role: 'Co-Founder & Owner',
                bio: 'The product and procurement specialist. Sandeep manages stock integrity, supplier relationships, and ensures every rod is 100% authentic INDARC — no exceptions.',
                accent: '#1A237E',
              },
            ].map((owner) => (
              <div key={owner.name} className="flex gap-7 items-start p-8 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ background: '#F5F7FF', borderTop: '3px solid #00838F' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: owner.accent }}>
                  <span className="font-display font-bold text-white text-2xl">{owner.initial}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0D1557] text-[1.5rem] mb-0.5">{owner.name}</h3>
                  <p className="font-dmsans font-medium text-[#00838F] text-[0.72rem] tracking-[0.14em] uppercase mb-4">{owner.role}</p>
                  <p className="font-dmsans font-light text-[#37474F] leading-relaxed text-[0.9rem]">{owner.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION — full-bleed dark, enormous type ── */}
      <section
        className="relative py-16 md:py-28 px-5 md:px-14 overflow-hidden"
        style={{ background: '#0D1557' }}
      >
        {/* Teal glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(0,131,143,0.18) 0%, transparent 60%)' }} />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="font-dmsans font-semibold text-[0.68rem] tracking-[0.25em] uppercase text-[#00BCD4] mb-10">
            Our Mission
          </p>
          <div className="w-16 h-px bg-[#00838F] mx-auto mb-10" />
          <blockquote
            className="font-display italic font-bold text-white leading-[1.1] mx-auto"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 3.5rem)' }}
          >
            "To be Karnataka's most dependable B2B distributor of INDARC welding consumables — combining genuine product quality with owner-level service, and reliable regional supply at competitive volume pricing."
          </blockquote>
          <div className="w-16 h-px bg-[#00838F] mx-auto mt-10" />
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE — editorial grid, no repeated trust content ── */}
      <section className="py-16 md:py-28 px-5 md:px-14" style={{ background: '#F5F7FF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start mb-10 md:mb-16">
            <div className="lg:col-span-4">
              <p className="font-dmsans font-semibold text-[0.68rem] tracking-[0.22em] uppercase text-[#00838F] mb-4">
                Built for Business Buyers
              </p>
              <h2
                className="font-display font-bold text-[#0D1557] leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
              >
                Industries<br />We Serve
              </h2>
              <p className="font-dmsans font-light text-[#78909C] text-[0.9rem] leading-relaxed mt-6">
                From small fabrication workshops to large EPC procurement teams — SS India supplies bulk INDARC rods to the businesses that build Karnataka.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {industries.map((ind, i) => (
                <div
                  key={ind.name}
                  className="group p-6 rounded-xl bg-white border border-[#E8EAF6] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#00838F]"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-display font-bold text-[#00838F]/25 text-[2rem] leading-none flex-shrink-0 transition-colors duration-300 group-hover:text-[#00838F]/60"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-dmsans font-semibold text-[#0D1557] text-[0.9rem] mb-2 leading-snug">{ind.name}</h3>
                      <p className="font-dmsans font-light text-[#78909C] text-[0.8rem] leading-relaxed">{ind.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        headline="Ready to talk supply?"
        subtext="Call Santosh or Sandeep directly — and get a quote the same day."
        buttonText="START A BULK ENQUIRY →"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}
