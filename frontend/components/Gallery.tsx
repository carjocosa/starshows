export default function Gallery({ images }: { images: string[] }) {
  if (!images?.length) return null;
  return <div className="grid grid-cols-3 gap-2">{images.map((src,i)=><img key={i} src={src} className="h-24 w-full object-cover rounded-xl" />)}</div>;
}
