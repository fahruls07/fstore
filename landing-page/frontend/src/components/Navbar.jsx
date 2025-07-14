import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-orange-500">FStore</div>
      <div className="space-x-4">
        <button className="text-gray-700">Masuk</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Daftar Reseller</button>
      </div>
    </nav>
  );
}