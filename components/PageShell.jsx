'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

export default function PageShell() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <Navbar quoteOpen={quoteOpen} />
      <Hero quoteOpen={quoteOpen} onQuoteChange={setQuoteOpen} />
    </>
  );
}
