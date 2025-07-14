import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white px-6 py-8">
      <h2 className="text-xl font-bold mb-4">UniPlay: Website top-up game paling terpercaya di Indonesia</h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
        <li>✅ Jujur & Terpercaya</li>
        <li>✅ Pengiriman Instan</li>
        <li>✅ Promosi-promosi Menarik</li>
        <li>✅ Metode Pembayaran Lengkap</li>
        <li>✅ Pasti Lebih Murah</li>
        <li>✅ Layanan Pelanggan via WhatsApp</li>
      </ul>
      <div className="mt-6 text-sm">
        <p>Metode Pembayaran: BCA, Mandiri, Gopay, OVO, ShopeePay</p>
        <p className="mt-2">&copy; 2025 UniPlay Indonesia</p>
      </div>
    </footer>
  );
}