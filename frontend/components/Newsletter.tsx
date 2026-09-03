"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribe`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    if (r.ok) setOk(true);
  }
  if (ok) return <p className="text-sm text-emerald-600 font-bold">¡Listo! Revisa tu correo para confirmar — preventa en tu bandeja.</p>;
  return (
    <form onSubmit={submit} className="flex gap-2">
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Tu email para preventa" type="email" required className="flex-1 border rounded-full px-4 py-2 text-sm" />
      <button className="bg-starBlue text-white px-5 py-2 rounded-full text-xs font-bold">UNIRME</button>
    </form>
  );
}
