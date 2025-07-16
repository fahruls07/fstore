import React from 'react';
import {
  ShieldCheck, Clock, Gift, Wallet, ThumbsUp, MessageCircle
} from 'lucide-react';

export default function Footer() {
  const features = [
    { icon: <ShieldCheck className="w-6 h-6 text-white" />, title: 'Jujur & Terpercaya', desc: 'Setiap hari ada ribuan transaksi top-up game atau pembelian voucher yang dilakukan oleh pelanggan kami.' },
    { icon: <Wallet className="w-6 h-6 text-white" />, title: 'Metode Pembayaran Lengkap', desc: 'Kami menawarkan begitu banyak pilihan channel pembayaran, mulai dari bank transfer, gopay, ovo, shopee pay, dan lainnya.' },
    { icon: <Clock className="w-6 h-6 text-white" />, title: 'Pengiriman Instan', desc: 'Hanya butuh beberapa detik saja untuk menyelesaikan transaksi anda. Semua proses kami berjalan secara otomatis.' },
    { icon: <ThumbsUp className="w-6 h-6 text-white" />, title: 'Pasti Lebih Murah', desc: 'Top-up game favoritmu dengan harga yang pastinya lebih murah dibandingkan website top-up lainnya.' },
    { icon: <Gift className="w-6 h-6 text-white" />, title: 'Promosi-promosi Menarik', desc: 'Dapatkan promo harga terbaik yang bisa anda dapatkan setiap minggunya, ikuti terus kami di sosial media.' },
    { icon: <MessageCircle className="w-6 h-6 text-white" />, title: 'Layanan Pelanggan via WhatsApp', desc: 'Customer Support kami siap membantu anda setiap hari, 7 hari dalam seminggu dan 30 hari dalam sebulan.' },
  ];

  return (
    <footer className="bg-orange-600 text-white">
      {/* Bagian Oranye */}
      <div className="px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">
          FStore: Website top-up game paling terpercaya di Indonesia
        </h2>
        <p className="mb-6">
          Setiap harinya, ribuan gamers di Indonesia menggunakan FStore untuk melakukan top up game
          dengan lancar, tanpa perlu daftar atau login.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div>{item.icon}</div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-white/90">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian Putih */}
      <div className="bg-white text-gray-800 px-4 py-6 text-sm">
        <div className="max-w-screen-xl mx-auto">
          <p className="font-semibold mb-2">Metode Pembayaran</p>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <img src="/bca.png" alt="BCA" className="h-6" />
            <img src="/mandiri.png" alt="Mandiri" className="h-6" />
            <img src="/gopay.png" alt="Gopay" className="h-6" />
            <img src="/ovo.png" alt="OVO" className="h-6" />
            <img src="/shopeepay.png" alt="ShopeePay" className="h-6" />
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="font-bold">&copy; 2025 FStore Indonesia</span>
            <a href="#" className="hover:underline">Channel Pembayaran</a>
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
            <a href="#" className="hover:underline">Menjadi Reseller</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
