import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About SS India Corporation | INDARC Welding Rods Hubli',
  description: "Owner-managed by Santosh. Karnataka's fastest growing INDARC welding rod distributor.",
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
      <Navbar />
      <AboutPageClient />
      <CTABanner
        headline="Ready to talk supply?"
        buttonText="START A BULK ENQUIRY →"
        buttonHref="/contact"
      />
      <Footer />
    </>
  );
}
