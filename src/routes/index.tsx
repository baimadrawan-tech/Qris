import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CONTACT, QRIS_HEIGHT, QRIS_IMAGE_URL, QRIS_WIDTH, SITE } from "@/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function QrisImg({ className }: { className?: string }) {
  const [err, setErr] = useState(false);
  if (err)
    return (
      <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm font-bold">
        Gambar QRIS belum tersedia.
      </div>
    );
  return (
    <img
      src={QRIS_IMAGE_URL}
      width={QRIS_WIDTH}
      height={QRIS_HEIGHT}
      loading="eager"
      decoding="async"
      alt={`Kode QRIS untuk mendukung ${SITE.ownerName}. Scan dengan aplikasi bank atau e-wallet.`}
      onError={() => setErr(true)}
      className={className}
    />
  );
}

function Index() {
  return (
    <main className="mx-auto flex h-dvh max-w-5xl flex-col gap-4 overflow-hidden px-5 py-5">
      <header className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="brut -rotate-2 bg-pink px-3 py-1 text-xs font-bold sm:text-sm">Support Owner</span>
        <h1 className="font-display text-xl leading-tight sm:text-3xl">{SITE.heroTitle}</h1>
      </header>

      <div className="flex min-h-0 flex-1 flex-col gap-4 md:grid md:grid-cols-[1fr_minmax(300px,440px)] md:gap-8">
        {/* QRIS — mengisi sisa layar */}
        <div className="brut-lg order-1 min-h-0 flex-1 bg-paper p-3 md:order-2 md:p-4">
          <QrisImg className="h-full w-full object-contain" />
        </div>

        {/* Info & aksi */}
        <div className="order-2 flex flex-col justify-center gap-4 md:order-1 md:gap-6">
          <p className="text-sm font-medium sm:text-lg">{SITE.heroSubtitle}</p>
          <div className="grid grid-cols-2 gap-3 sm:max-w-md">
            <a href={QRIS_IMAGE_URL} download="qris-xalixia.png" className="btn bg-primary text-sm text-primary-foreground sm:text-base">
              Unduh QRIS
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-pink text-sm sm:text-base"
            >
              Kirim bukti ❤
            </a>
          </div>
          <p className="text-xs font-medium sm:text-sm">{SITE.note}</p>
        </div>
      </div>
    </main>
  );
}
