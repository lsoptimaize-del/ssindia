import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact SS India Corporation | Get a Bulk Quote',
  description: 'Send your welding rod requirement to Santosh & Sandeep. Same-day quote. +91 80438 53656. Hubli, Karnataka.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactPageClient />
    </>
  );
}
