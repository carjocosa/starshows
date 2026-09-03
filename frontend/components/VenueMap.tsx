export default function VenueMap({ mapUrl, name }: { mapUrl?: string; name: string }) {
  if (!mapUrl) return <div className="h-48 bg-black/5 rounded-2xl grid place-items-center text-xs text-black/40">Mapa: {name}</div>;
  return <iframe src={mapUrl} className="w-full h-48 rounded-2xl border" loading="lazy" />;
}
