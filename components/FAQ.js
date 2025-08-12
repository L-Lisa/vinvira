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
    <div className="border rounded-2xl">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 font-medium"
        aria-expanded={open}
      >
        {q}
      </button>
      {open && <div className="px-4 pb-4 text-gray-600">{a}</div>}
    </div>
  );
}
