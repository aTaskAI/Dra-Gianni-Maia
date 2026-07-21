/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Methodology } from './components/Methodology';
import CommonDoubts from './components/CommonDoubts';
import { Testimonials } from './components/Testimonials';
import NationalCoverage from './components/NationalCoverage';
import { FAQ } from './components/FAQ';
import CallToAction from './components/CallToAction';
import { SocialMedia } from './components/SocialMedia';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1128] font-sans text-white selection:bg-gold-500/30 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Methodology />
        <CommonDoubts />
        <Testimonials />
        <NationalCoverage />
        <FAQ />
        <CallToAction />
        <SocialMedia />
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
