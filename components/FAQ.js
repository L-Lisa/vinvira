import { useState } from "react";

export default function FAQ({ items = [] }) {
  return (
    <div className="space-y-4">
      {items.map((q, idx) => (
        <Accordion key={idx} q={q.q} a={q.a} />
      ))}
    </div>
  );
}

function Accordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-vin-primary/30 transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 font-medium hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-vin-primary/20 rounded-2xl"
        aria-expanded={open}
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-800">{q}</span>
          <span className={`text-vin-primary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
          {a}
        </div>
      )}
    </div>
  );
}
