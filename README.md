# Infografía — Sistema de Venta de Lotes

App Next.js (App Router) que renderiza la infografía del sistema con:
- Embed en vivo del plano 3D de Parques de Paracas (`https://proyectosmunoz.com/paracas/plano3d`) con difuminado tipo vignette.
- 10 tarjetas numeradas con iconos a color tipo infografía.
- Bloque CTA dorado.

## Correr en local

Necesitas Node.js 18.18+ (Vercel y Next 14 lo requieren).

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build de producción (opcional, para verificar)

```bash
npm run build
npm run start
```

## Publicar en Vercel

### Opción A — Desde la web (más simple)

1. Sube esta carpeta a un repo nuevo en GitHub:
   ```bash
   git init
   git add .
   git commit -m "Infografía inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/infografia-lotes.git
   git push -u origin main
   ```
2. Entra a https://vercel.com → **Add New Project** → conecta tu cuenta de GitHub → elige el repo `infografia-lotes`.
3. Vercel detecta Next.js automáticamente. **Deploy**.
4. En ~30 segundos te entrega una URL `https://infografia-lotes-xxx.vercel.app`.

### Opción B — Desde la CLI

```bash
npm install -g vercel
vercel
```

Te pide login la primera vez (abre el navegador). Después, cada `vercel` redeploya.

Para producción directa: `vercel --prod`.

## Estructura

```
infografia-lotes/
├── app/
│   ├── layout.jsx      # Layout raíz con metadata
│   ├── page.jsx        # Página única con toda la infografía
│   └── globals.css     # Estilos completos (colores, layout, cards, embed)
├── next.config.js
├── package.json
├── .gitignore
└── README.md
```

## Personalizar

- **Cambiar la URL del plano**: edita el `src` del `<iframe>` en `app/page.jsx`.
- **Cambiar colores de las tarjetas**: cada `<div className="card" style={{ '--accent': '#XXX' }}>` controla su color.
- **Cambiar la leyenda de estados**: bloque `.legend` dentro del hero.
- **Cambiar paleta global**: variables `--navy`, `--gold`, etc. en `app/globals.css` arriba.

## Notas técnicas

- El iframe carga `proyectosmunoz.com` que ya tiene CORS/X-Frame abierto al público para `/paracas/plano3d`.
- El difuminado del iframe usa `::before` y `::after` con `pointer-events: none`, así que el plano sigue siendo interactivo (zoom/pan/rotar).
- Server Component puro — no necesita `'use client'`.
