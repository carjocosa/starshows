export default function Nosotros() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-16 font-poppins">
      <p className="text-xs tracking-widest font-bold text-starBlue">NOSOTROS — DESDE 2012</p>
      <h1 className="text-4xl font-extrabold mt-2">Somos Starshows. <span className="font-serif italic font-normal text-starBlue">Producimos lo que recuerdas.</span></h1>
      <p className="text-sm text-black/60 mt-4 max-w-2xl">Productora integral: booking, técnica, logística y auspicio. 180 estelares, 420k asistentes. Lo que ves en EN ÓRBITA es producción propia.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="bg-[#F4F6FB] rounded-2xl p-6 border"><p className="font-bold">180+</p><p className="text-xs text-black/50">shows producidos</p></div>
        <div className="bg-[#F4F6FB] rounded-2xl p-6 border"><p className="font-bold">12 años</p><p className="text-xs text-black/50">en vivo</p></div>
        <div className="bg-starBlue text-white rounded-2xl p-6"><p className="font-bold">4.9★</p><p className="text-xs text-white/60">rating</p></div>
      </div>
    </main>
  );
}
