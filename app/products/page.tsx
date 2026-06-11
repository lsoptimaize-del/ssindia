import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import ProductsPageClient from '@/components/ProductsPageClient';
export const metadata: Metadata = {
  title: 'INDARC Welding Rods | Products | SS India Corporation',
  description: 'INDARC E6013 welding rods in 3.5mm, 4mm and 4.5mm. Ready stock, bulk pricing, same-day dispatch from Hubli Karnataka.',
};


export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <ProductsPageClient />
      <CTABanner
        headline="Need a Custom Quantity or Long-Term Supply?"
        subtext="Talk directly to Santosh - no sales agents, no delays."
        buttonText="REQUEST A BULK QUOTE →"
        buttonHref="/contact"
      />
      <Footer />
    </>
  );
}
