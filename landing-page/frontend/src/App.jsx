import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import SectionGame from './components/SectionGame';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroBanner />
      <SectionGame title="Game Populer" />
      <SectionGame title="Top Up Game Langsung" />
      <SectionGame title="Beli Kode Voucher" />
      <Footer />
    </div>
  );
}