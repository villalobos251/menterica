/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Identification } from './components/Identification';
import { Authority } from './components/Authority';
import { Solution } from './components/Solution';
import { Testimonials } from './components/Testimonials';
import { Bonus } from './components/Bonus';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Countdown } from './components/Countdown';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-gold selection:text-slate-900 font-sans flex flex-col">
      <Countdown isBanner={true} className="sticky top-0 shadow-lg" />
      <div className="flex-1">
        <Hero />
        <Identification />
        <Authority />
        <Solution />
        <Testimonials />
        <Bonus />
        <Offer />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
