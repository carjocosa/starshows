export default async function sitemap() {
  const base = 'https://starshows.ec';
  const events = [{ slug: 'feid-ferxxocalipsis-guayaquil', date: '2026-01-22' }, { slug: 'mora-quito', date: '2026-02-08' }];
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/terminos`, lastModified: new Date() },
    ...events.map(e => ({ url: `${base}/evento/${e.slug}`, lastModified: new Date(e.date) })),
  ];
}
