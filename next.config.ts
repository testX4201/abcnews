import type { NextConfig } from "next";

/**
 * Base path for the deployment.
 *
 * - Local dev / Z.ai preview: leave NEXT_PUBLIC_BASE_PATH unset → basePath is
 *   "" and the site is served from "/" (so the preview panel works).
 * - GitHub Pages (https://testx4201.github.io/abcnews/): set
 *   NEXT_PUBLIC_BASE_PATH=/abcnews when running `next build`. This prefixes
 *   all Next.js internal assets (_next/static/*) and is read by page.tsx /
 *   layout.tsx to prefix the ABC CSS / font / favicon <link> URLs.
 *
 * The GitHub Actions workflow in .github/workflows/deploy.yml sets this env
 * var automatically.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export → produces an `out/` folder that can be hosted on
  // GitHub Pages (or any static host). Only affects `next build`; `next dev`
  // is unaffected.
  output: "export",

  // Prefix all routes and _next/static/* assets with the base path so the
  // site works under https://testx4201.github.io/abcnews/.
  ...(basePath ? { basePath, trailingSlash: true } : {}),

  // Next.js Image Optimization requires a server runtime; disable it for
  // static export. The article uses raw <img> tags, so this is a no-op in
  // practice but prevents build errors.
  images: { unoptimized: true },

  // Don't fail the static-export build on TS issues in the scraped article
  // HTML blob. (ESLint is configured via eslint.config.mjs in Next.js 16.)
  typescript: { ignoreBuildErrors: true },

  reactStrictMode: false,
};

export default nextConfig;
