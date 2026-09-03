"use client";
import { useState } from "react";

export default function EventFilters({ onFilter }: { onFilter: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <div className="flex gap-2 items-center">
      <input value={q} onChange={e=>{setQ(e.target.value); onFilter(e.target.value)}} placeholder="Buscar por artista, género o ciudad..." className="border rounded-full px-4 py-2 text-sm w-72" />
      <select onChange={e=>onFilter(e.target.value)} className="border rounded-full px-3 py-2 text-sm">
        <option value="">Todos los géneros</option><option>Reggaeton</option><option>Pop</option><option>Rock</option>
      </select>
    </div>
  );
}
