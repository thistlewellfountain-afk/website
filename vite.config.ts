// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    // Netlify's own build environment sets NETLIFY=1, which makes Nitro
    // auto-select its "netlify" preset instead of the "cloudflare-module"
    // default this config normally uses (that default only applies inside
    // Lovable's sandbox). The "netlify" preset's public dir template didn't
    // resolve to the "dist/client" path Netlify's Publish directory expects,
    // so pin it explicitly to keep both environments aligned.
    output: { publicDir: "dist/client" },
  },
});
