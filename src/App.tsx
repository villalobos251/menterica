/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { Hero } from './components/Hero';
import { Identification } from './components/Identification';
import { Countdown } from './components/Countdown';

const Authority = lazy(() => import('./components/Authority').then(m => ({ default: m.Authority })));
const Solution = lazy(() => import('./components/Solution').then(m => ({ default: m.Solution })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Bonus = lazy(() => import('./components/Bonus').then(m => ({ default: m.Bonus })));
const Offer = lazy(() => import('./components/Offer').then(m => ({ default: m.Offer })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-gold selection:text-slate-900 font-sans flex flex-col">
      <Countdown isBanner={true} className="sticky top-0 shadow-lg" />
      <div className="flex-1">
        <Hero />
        <Identification />
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-brand-gold animate-pulse">Carregando...</div>}>
          <Authority />
          <Solution />
          <Testimonials />
          <Bonus />
          <Offer />
          <FAQ />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
