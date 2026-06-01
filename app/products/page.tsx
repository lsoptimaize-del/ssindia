import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import ProductCards from '@/components/ProductCards';

export const metadata: Metadata = {
  title: 'INDARC Welding Rods | Products | SS India Corporation',
  description: 'INDARC E6013 welding rods in 3.5mm, 4mm and 4.5mm. Ready stock, bulk pricing, same-day dispatch from Hubli Karnataka.',
};

const tableRows = [
  { size: '3.5mm', app: 'Sheet metal, light fabrication', pen: 'Medium', pos: 'All positions', buyer: 'Workshops, small contractors' },
  { size: '4mm', app: 'Structural steel, construction', pen: 'Medium-High', pos: 'All positions', buyer: 'Contractors, EPC firms' },
  { size: '4.5mm', app: 'Heavy industrial, thick joints', pen: 'Deep', pos: 'Flat / Horizontal', buyer: 'Industrial plants, heavy fab' },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar solid />

      {/* ── HERO — welding sparks background, bold left-aligned ── */}
      <section className="relative flex items-end pt-[68px]" style={{ minHeight: '65vh' }}>
        <img
          src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80"
          alt="Industrial manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(13,21,87,0.92) 0%, rgba(13,21,87,0.6) 50%, rgba(0,0,0,0.25) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-14 pb-10 md:pb-16 w-full">
          <p className="font-dmsans font-medium text-[0.68rem] tracking-[0.25em] uppercase text-[#00BCD4] mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 opacity-40">/</span>Products &amp; Services
          </p>
          <h1
            className="font-display font-bold text-white leading-[1.0] mb-5 max-w-3xl"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
          >
            In Stock.<br /><em>Ready to Dispatch.</em>
          </h1>
          <p className="font-dmsans font-light text-white/65 text-[1rem] leading-relaxed max-w-[480px]">
            All three INDARC diameters available. Bulk pricing on request.<br />Same-day dispatch for confirmed orders.
          </p>
        </div>
      </section>

      {/* ── AUTHENTICITY STRIP — scrolling marquee ── */}
      <div className="w-full py-3.5 overflow-hidden" style={{ background: '#00838F' }}>
        <div
          className="flex items-center gap-10 whitespace-nowrap"
          style={{ width: 'max-content', animation: 'marquee 25s linear infinite' }}
        >
          {Array(4).fill([
            '100% AUTHENTIC INDARC BRAND',
            'NO SUBSTITUTES',
            'NO GREY MARKET STOCK',
            'SANTOSH & SANDEEP GUARANTEE EVERY ORDER',
            'READY STOCK — HUBLI WAREHOUSE',
          ]).flat().map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-dmsans font-bold text-white text-[0.68rem] tracking-[0.2em]">
              {t}
              <span className="w-1 h-1 rounded-full bg-white/40 inline-block flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── PRODUCT CARDS ── */}
      <section className="py-14 md:py-24 px-5 md:px-14" style={{ background: '#0D1557' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-14 gap-6">
            <div>
              <p className="font-dmsans font-semibold text-[0.68rem] tracking-[0.22em] uppercase text-[#00BCD4] mb-3">
                Full Product Range
              </p>
              <h2
                className="font-display font-bold text-white leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
              >
                Three Sizes.<br />One Verified Source.
              </h2>
            </div>
            <p className="font-dmsans font-light text-white/45 text-[0.88rem] max-w-xs leading-relaxed">
              Genuine INDARC brand. Ready stock at our Hubli warehouse. Bulk pricing — call for your rate.
            </p>
          </div>
          <ProductCards />
        </div>
      </section>

      {/* ── COMPARISON — premium redesign, no boring table ── */}
      <section className="py-14 md:py-24 px-5 md:px-14 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-start">
            <div className="lg:col-span-4">
              <p className="font-dmsans font-semibold text-[0.68rem] tracking-[0.22em] uppercase text-[#00838F] mb-4">
                Product Comparison
              </p>
              <h2
                className="font-display font-bold text-[#0D1557] leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
              >
                Quick Reference for Procurement Managers
              </h2>
              <p className="font-dmsans font-light text-[#78909C] text-[0.88rem] leading-relaxed">
                Choose the right diameter for your application. All three are held in ready stock — no lead time on selection.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {tableRows.map((row, i) => (
                  <div
                    key={row.size}
                    className="rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center gap-6 transition-all duration-300 hover:shadow-md"
                    style={{ background: i % 2 === 0 ? '#F5F7FF' : '#ffffff', border: '1px solid #E8EAF6', borderLeft: '4px solid #00838F' }}
                  >
                    <div className="flex-shrink-0">
                      <span
                        className="font-display font-bold text-[#00838F] leading-none"
                        style={{ fontSize: '2.8rem' }}
                      >
                        {row.size}
                      </span>
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="font-dmsans font-semibold text-[0.62rem] tracking-widest uppercase text-[#78909C] mb-0.5">Best Application</p>
                        <p className="font-dmsans text-[#37474F] text-[0.88rem]">{row.app}</p>
                      </div>
                      <div>
                        <p className="font-dmsans font-semibold text-[0.62rem] tracking-widest uppercase text-[#78909C] mb-0.5">Ideal Buyer</p>
                        <p className="font-dmsans text-[#37474F] text-[0.88rem]">{row.buyer}</p>
                      </div>
                      <div>
                        <p className="font-dmsans font-semibold text-[0.62rem] tracking-widest uppercase text-[#78909C] mb-0.5">Penetration</p>
                        <p className="font-dmsans text-[#37474F] text-[0.88rem]">{row.pen}</p>
                      </div>
                      <div>
                        <p className="font-dmsans font-semibold text-[0.62rem] tracking-widest uppercase text-[#78909C] mb-0.5">Welding Position</p>
                        <p className="font-dmsans text-[#37474F] text-[0.88rem]">{row.pos}</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="flex-shrink-0 font-dmsans font-semibold text-[0.72rem] tracking-[0.12em] uppercase text-white px-5 py-2.5 rounded-full transition-all duration-300 bg-[#00838F] hover:bg-[#00BCD4] whitespace-nowrap"
                    >
                      Enquire →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BULK ORDERING — editorial 2-col, not 3 generic tiles ── */}
      <section className="py-14 md:py-24 px-5 md:px-14" style={{ background: '#0D1557' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <p className="font-dmsans font-semibold text-[0.68rem] tracking-[0.22em] uppercase text-[#00BCD4] mb-4">
              Ordering in Volume
            </p>
            <h2
              className="font-display font-bold text-white leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
            >
              Here&apos;s What to<br /><em>Know.</em>
            </h2>
            <p className="font-dmsans font-light text-white/55 text-[0.92rem] leading-relaxed mb-10">
              No rigid MOQs. No waiting. Call Santosh or Sandeep with your quantity and get a custom rate within the hour.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center font-dmsans font-semibold text-[0.82rem] tracking-[0.12em] uppercase text-white px-8 py-4 rounded-full transition-all duration-300 bg-[#00838F] hover:bg-[#00BCD4]"
            >
              Get Your Custom Rate →
            </Link>
          </div>
          <div className="space-y-0">
            {[
              { label: 'Minimum Order', value: 'Flexible — trial orders and large-volume contracts both welcome. No rigid MOQs.' },
              { label: 'Volume Pricing', value: 'The more you order, the better your per-unit rate. Same-day custom quote on call.' },
              { label: 'Lead Time', value: 'Ready stock means dispatch within 24 hours. No waiting weeks for confirmed orders.' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="py-5 md:py-7 flex gap-6 items-start"
                style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <span
                  className="font-display font-bold text-[#00838F]/40 flex-shrink-0 leading-none"
                  style={{ fontSize: '2.5rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-dmsans font-semibold text-white text-[0.9rem] mb-2">{item.label}</h3>
                  <p className="font-dmsans font-light text-white/55 text-[0.85rem] leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need a Custom Quantity or Long-Term Supply?"
        subtext="Talk directly to Santosh or Sandeep — no sales agents, no delays."
        buttonText="REQUEST A BULK QUOTE →"
        buttonHref="/contact"
      />
      <Footer />
    </>
  );
}
