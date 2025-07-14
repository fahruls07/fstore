import React from 'react';

export default function SectionGame({ title }) {
  const placeholders = new Array(6).fill(0);

  return (
    <section className="px-6 py-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {placeholders.map((_, idx) => (
          <div key={idx} className="bg-white rounded shadow p-2 animate-pulse">
            <div className="bg-gray-300 h-24 w-full rounded"></div>
            <div className="h-4 bg-gray-300 mt-2 w-3/4 mx-auto rounded"></div>
          </div>
        ))}
      </div>
    </section>
  );
}