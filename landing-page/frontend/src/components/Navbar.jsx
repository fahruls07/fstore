import React, { useState } from 'react';
import { Menu, X, Globe, ShieldCheck, Lock, CreditCard, User } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-20">
        {/* Kiri: Logo + Search */}
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
          <input
            type="text"
            placeholder="Pencarian..."
            className="bg-gray-100 rounded-full px-4 py-2 text-sm w-64"
          />
        </div>

        {/* Kanan: Tombol dan Menu */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700">Masuk</button>
          <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded hover:bg-orange-100 text-sm">
            Daftar Reseller
          </button>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 border border-orange-500 rounded text-orange-500"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-56 z-50">
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"><User size={16} /> Masuk Reseller</a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"><Globe size={16} /> Blog</a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"><CreditCard size={16} /> Channel Pembayaran</a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"><Lock size={16} /> Kebijakan Privasi</a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"><ShieldCheck size={16} /> Syarat & Ketentuan</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
