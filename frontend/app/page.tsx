export default function Page(){
  return (
    <div className="min-h-screen bg-white font-poppins">
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[min(860px,calc(100%-20px))] bg-white rounded-full border shadow px-2 py-2 flex items-center justify-between">
        <span className="font-bold text-sm text-[#0A2A6B]">★ STARSHOWS</span>
        <a href="#cartelera" className="bg-[#0A2A6B] text-white rounded-full px-5 py-2 text-xs font-bold">VER CARTELERA</a>
      </nav>
      <section className="max-w-[1280px] mx-auto px-6 pt-28 pb-10">
        <h1 className="text-5xl font-extrabold leading-none">Producimos <span className="font-serif italic text-[#0A2A6B]">experiencias</span> que se quedan <span className="border-2 border-[#E30613] text-[#E30613] rounded-full px-2 py-1 text-xs">EN VIVO</span></h1>
        <p className="mt-4 text-sm text-black/60 max-w-xl">Starshows — Productora de conciertos. 180 estelares en 12 años. Próximos shows con fecha y ciudad, precios en USD.</p>
        <div className="mt-6 flex gap-2"><span className="bg-[#0A2A6B] text-white rounded-full px-4 py-2 text-xs">180+ shows</span><span className="bg-white border rounded-full px-4 py-2 text-xs">Ecuador</span></div>
      </section>
      <section id="cartelera" className="bg-[#F4F6FB] border-y py-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-extrabold">EN ÓRBITA — Próximos estelares</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-2xl border p-4"><p className="text-xs font-bold">22 ENE · GUAYAQUIL</p><p className="font-bold">FEID — FERXXOCALIPSIS</p><p className="text-xs">Desde $35.00 USD</p></div>
            <div className="bg-white rounded-2xl border p-4"><p className="text-xs font-bold">08 FEB · QUITO</p><p className="font-bold">MORAT</p><p className="text-xs">Desde $30.00 USD</p></div>
            <div className="bg-[#0A2A6B] text-white rounded-2xl p-4"><p className="text-xs">14 MAR · CUENCA — PREVENTA</p><p className="font-bold">RAUW ALEJANDRO</p><p className="text-xs">Desde $40.00 USD</p></div>
          </div>
        </div>
      </section>
      <footer className="bg-[#0A2A6B] text-white py-6 text-center text-xs">© 2026 STARSHOWS — <a href="https://carjocosa.space" className="underline">Created with ❤️ by @carjocosa</a></footer>
    </div>
  );
}
