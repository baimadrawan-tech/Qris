import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  resolve: {
    alias: { "@": "/src" },
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    // Redirect entry ke src/server.ts (wrapper error SSR)
    tanstackStart({ server: { entry: "server" } }),
    nitro({ preset: "cloudflare-module", compatibilityDate: "2025-05-01" }),
    viteReact(),
  ],
});
