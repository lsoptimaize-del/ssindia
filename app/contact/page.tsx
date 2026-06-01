import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact SS India Corporation | Get a Bulk Quote',
  description: 'Send your welding rod requirement to Santosh & Sandeep. Same-day quote. +91 80438 53656. Hubli, Karnataka.',
};

const steps = [
  { n: '1', title: 'You Send Your Requirement', desc: 'Product, quantity, delivery location.' },
  { n: '2', title: 'Santosh or Sandeep Call You', desc: 'Same business day, guaranteed.' },
  { n: '3', title: 'Quote Confirmed', desc: 'We agree price & delivery schedule.' },
  { n: '4', title: 'Order Dispatched', desc: 'Within 24hrs of confirmation.' },
  { n: '5', title: 'You Receive Your Stock', desc: 'On time, as ordered, 100% authentic.' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar solid />

      {/* ── HERO — split: dark left text, image right ── */}
      <section className="relative pt-[68px]" style={{ minHeight: '60vh', background: '#0D1557' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 pointer-events-none hidden md:block"
          style={{ zIndex: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
            alt="Business discussion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0D1557 0%, transparent 40%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-14 py-14 md:py-20 flex items-center" style={{ minHeight: '60vh' }}>
          <div className="max-w-xl">
            <p className="font-dmsans font-medium text-[0.68rem] tracking-[0.25em] uppercase text-[#00BCD4] mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 opacity-40">/</span>Contact
            </p>
            <h1
              className="font-display font-bold text-white leading-[1.0] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
            >
              Let&apos;s Talk<br /><em>Business.</em>
            </h1>
            <p className="font-dmsans font-light text-[#00BCD4] text-[1rem] leading-relaxed">
              Send Santosh or Sandeep your requirement — product size, quantity, delivery location — and you&apos;ll have a quote the same day.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT SPLIT — dark left panel, light form right ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — contact details on dark bg */}
        <div className="py-14 md:py-20 px-5 md:px-14" style={{ background: '#0D1557' }}>
          <h2
            className="font-display font-bold text-white leading-tight mb-1"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            Santosh &amp; Sandeep
          </h2>
          <p className="font-dmsans font-medium text-[#00BCD4] text-[0.78rem] tracking-[0.18em] uppercase mb-10">
            Co-Founders &amp; Owners
          </p>

          <div className="space-y-5 md:space-y-7 mb-10">
            {[
              {
                label: 'Phone',
                value: '+91 80438 53656',
                href: 'tel:+918043853656',
                icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.69a16 16 0 006.29 6.29l1.21-1.21a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
              },
              {
                label: 'WhatsApp',
                value: '+91 80438 53656',
                href: 'https://wa.me/918043853656',
                icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
              },
              {
                label: 'Address',
                value: 'Hubli, Dharwad, Karnataka, India',
                href: null,
                icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
              },
              {
                label: 'Hours',
                value: 'Monday–Saturday, 9am–7pm IST',
                href: null,
                icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,131,143,0.2)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="font-dmsans font-semibold text-[0.62rem] tracking-widest uppercase text-white/35 mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-dmsans font-medium text-white/80 hover:text-[#00BCD4] transition-colors text-[0.92rem]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-dmsans font-medium text-white/80 text-[0.92rem]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-white/10 mb-8" />
          <p className="font-dmsans font-light italic text-white/40 text-[0.85rem] leading-relaxed mb-6">
            Santosh and Sandeep personally respond to all B2B enquiries within the same business day. For urgent requirements, WhatsApp is fastest.
          </p>
          <a
            href="https://www.indiamart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dmsans font-medium text-[#00BCD4] text-[0.85rem] underline underline-offset-4 hover:text-white transition-colors"
          >
            Also on IndiaMART — Verified Supplier →
          </a>
        </div>

        {/* Right — form on off-white */}
        <div className="py-14 md:py-20 px-5 md:px-14" style={{ background: '#F5F7FF' }}>
          <h3 className="font-dmsans font-semibold text-[#0D1557] text-[1.05rem] mb-2">Send Your Bulk Requirement</h3>
          <p className="font-dmsans font-light text-[#78909C] text-[0.85rem] mb-8">We&apos;ll get back to you the same business day.</p>
          <ContactForm />
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT — vertical timeline, editorial ── */}
      <section className="py-14 md:py-24 px-5 md:px-14 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          <div className="lg:col-span-4">
            <p className="font-dmsans font-semibold text-[0.68rem] tracking-[0.22em] uppercase text-[#00838F] mb-4">
              What Happens Next
            </p>
            <h2
              className="font-display font-bold text-[#0D1557] leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
            >
              From Enquiry<br />to Delivery
            </h2>
            <p className="font-dmsans font-light text-[#78909C] text-[0.9rem] leading-relaxed mt-6">
              Five steps. Typically resolved within 48 hours of your first message.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-5 bottom-5 w-px bg-[#E8EAF6] hidden sm:block" />
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div key={step.n} className="flex gap-8 items-start py-6" style={{ borderBottom: i < steps.length - 1 ? '1px solid #F5F7FF' : 'none' }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                      style={{ background: '#00838F' }}
                    >
                      <span className="font-display font-bold text-white text-[1rem]">{step.n}</span>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-dmsans font-semibold text-[#0D1557] text-[0.92rem] mb-1">{step.title}</h3>
                      <p className="font-dmsans font-light text-[#78909C] text-[0.82rem]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSE PROMISE ── */}
      <div className="w-full py-7 px-6 text-center" style={{ background: '#00838F' }}>
        <p className="font-dmsans font-bold text-white text-[0.92rem] tracking-[0.08em]">
          We respond to all B2B enquiries within the same business day — Santosh &amp; Sandeep
        </p>
      </div>

      {/* ── OWNER PROMISE — replaces generic trust bar, personal and unique ── */}
      <section className="relative py-16 md:py-24 px-5 md:px-14 overflow-hidden" style={{ background: '#0D1557' }}>
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none hidden lg:block"
          style={{ zIndex: 0 }}
        >
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80"
            alt="Industrial supply"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="w-12 h-px bg-[#00838F] mb-8" />
          <blockquote
            className="font-display italic font-bold text-white leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(1.3rem, 3.5vw, 3rem)' }}
          >
            "Every enquiry that comes to SS India Corporation is answered by one of us personally — same day, every day. That is our commitment to every B2B buyer we serve."
          </blockquote>
          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#1A237E' }}>
                <span className="font-display font-bold text-white">S</span>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#00838F' }}>
                <span className="font-display font-bold text-white">S</span>
              </div>
            </div>
            <div>
              <p className="font-dmsans font-semibold text-white text-[0.88rem]">Santosh &amp; Sandeep</p>
              <p className="font-dmsans font-light text-white/45 text-[0.75rem] tracking-wide">Co-Founders, SS India Corporation · Hubli, Karnataka</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
