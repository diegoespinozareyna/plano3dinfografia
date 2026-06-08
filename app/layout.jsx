import './globals.css';

export const metadata = {
  title: 'Sistema Web de Venta de Lotes de Terreno',
  description: 'Plataforma integral para inmobiliarias y desarrolladoras — Reservas, pagos, cobranzas y reportes en tiempo real.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
