import "./globals.css";

export const metadata = {
  title: "Starshows — Productora de Conciertos y Grandes Eventos",
  description: "Starshows produce experiencias en vivo memorables. Próximos estelares en órbita.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-ink font-poppins antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
