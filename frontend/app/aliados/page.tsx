export default function Aliados() {
  const sponsors = ["Banco Pichincha","Claro","Pepsi","Mall del Sol","Corona"];
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-16 font-poppins">
      <p className="text-xs tracking-widest font-bold text-starBlue">ALIADOS</p>
      <h1 className="text-4xl font-extrabold mt-2">Órbita de marcas <span className="font-serif italic font-normal text-starBlue">que encienden cada show</span></h1>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        {sponsors.map(s=>(
          <div key={s} className="bg-white border rounded-2xl p-6 grid place-items-center h-24 text-xs font-bold tracking-widest text-black/40">{s}</div>
        ))}
      </div>
      <p className="text-sm text-black/50 mt-6">¿Tu marca quiere auspiciar? <a href="/#cartelera" className="text-starBlue font-bold underline">Auspicie un show →</a></p>
    </main>
  );
}
