# Support Xalixia (QRIS)

Halaman dukungan lewat QRIS. TanStack Start + Cloudflare Workers.

## Sebelum jalan
Taruh gambar QRIS di `public/qris.png`.

## Dev
```bash
bun install
bun run dev
```

## Deploy ke Cloudflare Workers
```bash
bun install
wrangler login      # sekali aja
bun run deploy      # = vite build && wrangler deploy
```

URL bakal keluar kayak `https://qris-xalixia.<subdomain>.workers.dev`.
Custom domain: Cloudflare Dashboard → Workers & Pages → qris-xalixia → Settings → Domains & Routes.

Auto-deploy dari GitHub: connect repo di Cloudflare dashboard, build command `bun run build`.
