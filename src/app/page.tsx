import { ARTICLE_HTML } from "./article-html";
import { ShareScript } from "./share-script";

// Base path for asset URLs.
// - Dev / Z.ai preview: unset → "" (served from "/", preview works).
// - GitHub Pages: set NEXT_PUBLIC_BASE_PATH=/abcnews at build time so all
//   ABC CSS / font / favicon <link> URLs are prefixed with /abcnews.
//   The .github/workflows/deploy.yml workflow does this automatically.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// The real ABC News CSS files (in order, as referenced in the original HTML)
const CSS_FILES = [
  "css/d30d615cec4406ad.css",
  "css/74454af36462ac92.css",
  "css/e75f4a2abd2b1fa3.css",
  "css/b94ebc5678711924.css",
  "css/f986cc49d6b3206c.css",
  "css/472d567bcd0e6b90.css",
  "css/176fad5358648ce9.css",
  "css/232bfe0ce5c06b59.css",
  "css/a189673241f3a2db.css",
  "css/6570b7c64b316445.css",
].map((f) => `${BASE}/abc-site/${f}`);

export const metadata = {
  title:
    "When the Land Stops Speaking: Australia's First Languages and the Architecture of Survival - ABC News",
  description:
    "From a boy labelled 'failing' to an Elder who rebuilt a language from word lists, the story of Australia's First Languages is one of deliberate severance and stubborn survival.",
  icons: {
    icon: `${BASE}/abc-site/images/favicon.svg`,
  },
};

export default function Home() {
  return (
    <>
      {/* Link all the real ABC News CSS files */}
      {CSS_FILES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}

      {/* Font preloads for ABC Sans / ABC Serif */}
      <link
        rel="preload"
        href={`${BASE}/abc-site/fonts/abcsansnova-regular.woff2`}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={`${BASE}/abc-site/fonts/abcsansnova-bold.woff2`}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={`${BASE}/abc-site/fonts/abcserif-regular.woff2`}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Inject the real ABC News CSS variable definitions + font-face rules */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* ABC News design system variables (from scraped CSS) */
            :root {
              --nw-spacing-1: 0.25rem;
              --nw-spacing-2: 0.5rem;
              --nw-spacing-3: 0.75rem;
              --nw-spacing-4: 1rem;
              --nw-spacing-5: 1.25rem;
              --nw-spacing-6: 1.5rem;
              --nw-spacing-7: 1.75rem;
              --nw-spacing-8: 2rem;
              --nw-spacing-10: 2.5rem;
              --nw-spacing-12: 3rem;
              --nw-spacing-16: 4rem;
              --nw-spacing-20: 5rem;
              --nw-text-xs: 0.75rem;
              --nw-text-sm: 0.875rem;
              --nw-text-base: 1rem;
              --nw-text-lg: 1.125rem;
              --nw-text-xl: 1.25rem;
              --nw-text-2xl: 1.5rem;
              --nw-text-3xl: 2rem;
              --nw-text-4xl: 3rem;

              --nw-colour-token-white-100: #fff;
              --nw-colour-token-black-100: #000;
              --nw-colour-token-offset-white-100: #ebebeb;
              --nw-colour-token-offset-black-100: #0f0f0f;
              --nw-colour-token-grey-98: #fafafa;
              --nw-colour-token-grey-95: #f1f2f3;
              --nw-colour-token-grey-90: #e4e5e7;
              --nw-colour-token-grey-80: #c9cbcf;
              --nw-colour-token-grey-60: #93979f;
              --nw-colour-token-grey-40: #60646c;
              --nw-colour-token-grey-30: #484b51;
              --nw-colour-token-grey-20: #242424;
              --nw-colour-token-grey-10: #1a1a1a;
              --nw-colour-token-hero-blue-100: #1e5aeb;
              --nw-colour-token-dark-blue-100: #10316a;
              --nw-colour-token-assistant-blue: #0058cc;
              --nw-colour-token-assistant-dark-blue: #8fbfff;
              --nw-colour-token-assistant-sapphireight: #300099;
              --nw-colour-token-assistant-dark-lavendust: #c2b0ec;
              --nw-colour-token-breaking-100: #e00736;
              --nw-colour-token-opacity-black-10: #0000001a;
              --nw-colour-token-opacity-white-40: #ffffff66;

              --nw-colour-background-base-light: var(--nw-colour-token-white-100);
              --nw-colour-background-base-dark: var(--nw-colour-token-offset-black-100);
              --nw-colour-surface-neutral-light: var(--nw-colour-token-white-100);
              --nw-colour-surface-neutral-dark: var(--nw-colour-token-offset-black-100);
              --nw-colour-surface-utility-light: var(--nw-colour-token-grey-95);
              --nw-colour-surface-utility-dark: var(--nw-colour-token-grey-20);
              --nw-colour-surface-tint-light: var(--nw-colour-token-grey-98);
              --nw-colour-surface-tint-dark: var(--nw-colour-token-grey-10);
              --nw-colour-surface-brand: var(--nw-colour-token-hero-blue-100);
              --nw-colour-text-primary-light: var(--nw-colour-token-black-100);
              --nw-colour-text-primary-dark: var(--nw-colour-token-offset-white-100);
              --nw-colour-text-secondary-light: var(--nw-colour-token-grey-40);
              --nw-colour-text-secondary-dark: var(--nw-colour-token-grey-80);
              --nw-colour-text-utility-light: var(--nw-colour-token-grey-30);
              --nw-colour-text-utility-dark: var(--nw-colour-token-grey-80);
              --nw-colour-text-link-light: var(--nw-colour-token-assistant-blue);
              --nw-colour-text-link-dark: var(--nw-colour-token-assistant-dark-blue);
              --nw-colour-text-visited-light: var(--nw-colour-token-assistant-sapphireight);
              --nw-colour-text-visited-dark: var(--nw-colour-token-assistant-dark-lavendust);
              --nw-colour-text-inverse-light: var(--nw-colour-token-white-100);
              --nw-colour-text-inverse-dark: var(--nw-colour-token-black-100);

              --nw-colour-background-base: var(--nw-colour-background-base-light);
              --nw-colour-surface-neutral: var(--nw-colour-surface-neutral-light);
              --nw-colour-surface-utility: var(--nw-colour-surface-utility-light);
              --nw-colour-surface-tint: var(--nw-colour-surface-tint-light);
              --nw-colour-text-primary: var(--nw-colour-text-primary-light);
              --nw-colour-text-secondary: var(--nw-colour-text-secondary-light);
              --nw-colour-text-utility: var(--nw-colour-text-utility-light);
              --nw-colour-text-link: var(--nw-colour-text-link-light);
              --nw-colour-text-visited: var(--nw-colour-text-visited-light);
              --nw-colour-text-inverse: var(--nw-colour-text-inverse-light);

              --colour-primary: var(--nw-colour-surface-tint);
              --colour-accent: var(--nw-colour-token-dark-blue-100);
              --colour-assistant: var(--nw-colour-text-link);
              --text-accent: white;
              --masthead-fill: hsl(180, 3%, 6%);
              --colour-live: hsl(42, 100%, 50%);
              --colour-label: hsl(0, 0%, 0%);
              --bar-background: hsl(0, 0%, 96%);

              --news-brand-primary-colour: hsl(214, 100%, 40%);
              --news-brand-assistant-colour: hsl(214, 100%, 78%);
              --news-brand-bg-colour: hsla(214, 100%, 78%, 0.15);
              --news-brand-bg-hover-colour: hsla(214, 100%, 78%, 0.3);
              --news-brand-bg-dark: hsl(0, 0%, 6%);
              --neutral-bg-light: hsl(0, 0%, 95%);
              --neutral-bg-dark: hsl(205, 12%, 19%);
              --neutral-text-light: hsl(0, 0%, 0%);
              --neutral-text-dark: hsl(0, 0%, 100%);
              --neutral-border-light: hsla(0, 0%, 0%, 0.05);
              --neutral-border-dark: hsla(0, 0%, 100%, 0.1);
              --topbar-bg-colour: var(--neutral-bg-light);

              --colour-aa: hsl(0, 0%, 39%);
              --colour-charcoal: hsl(205, 12%, 19%);
              --grey-border: hsl(0, 0%, 90%);
              --black-10: hsl(0, 0%, 90%);
              --white-20: hsl(0, 0%, 20%);
              --white-70: hsl(0, 0%, 70%);
              --black-60-opacity: rgba(0, 0, 0, 0.6);
              --black-30-opacity: rgba(0, 0, 0, 0.3);
              --black-10-opacity: rgba(0, 0, 0, 0.1);
              --white-20-opacity: hsla(255, 255, 255, 0.2);
              --white-05-opacity: hsla(255, 255, 255, 0.05);

              --dls-font-stack-sans: "abcsans", "fallback sans", sans-serif;
              --dls-font-stack-serif: "abcserif", "fallback serif", serif;
              --dls-font-stack-condensed: "abcsansnova condensed", sans-serif;
              --dls-font-stack-rounded: "abcsansnova rounded", sans-serif;
              --dls-font-stack-monospace: "abcsans tabbed", monospace;
              --heading-font-family: var(--dls-font-stack-sans);
              --heading-font-weight: 700;

              --layout-container-max-width: 96rem;
              --layout-container-padding: 0 1rem;
              --fixed-header-height: 3rem;
              --nw-radius-full: 9999px;
              scroll-padding-top: 3.5em;
            }

            @media (min-width: 34em) {
              :root { --layout-container-padding: 0 1.5rem; }
            }
            @media (min-width: 48em) {
              :root { --layout-container-padding: 0 2rem; scroll-padding-top: 4em; }
            }
            @media (min-width: 62em) {
              :root { --layout-container-padding: 0 2.5rem; }
            }
            @media (min-width: 75em) {
              :root { --layout-container-padding: 0 3rem; }
            }

            @media (min-width: 62em) {
              :root {
                --nw-text-base-lg: var(--nw-text-lg);
                --nw-text-lg-xl: var(--nw-text-xl);
                --nw-text-2xl-3xl: var(--nw-text-3xl);
                --nw-text-3xl-4xl: var(--nw-text-4xl);
              }
            }

            /* Fallback font definitions from ABC */
            @font-face {
              font-family: "fallback sans";
              src: local(arial);
              size-adjust: 107%;
              ascent-override: 90%;
              descent-override: 25%;
            }
            @font-face {
              font-family: "fallback serif";
              src: local(times new roman);
              size-adjust: 113.5%;
              ascent-override: 88%;
              descent-override: 25%;
            }

            /* Reset our own body styles - let ABC CSS take over */
            body {
              margin: 0;
              padding: 0;
              background: var(--nw-colour-surface-neutral);
              color: var(--nw-colour-text-primary);
              font-family: var(--dls-font-stack-sans);
              -webkit-font-smoothing: antialiased;
            }

            /* Hide the cookie banner and other injected elements */
            [data-component="CookieBanner"],
            [data-component="OneTrustNotice"],
            .onetrust-pc-dark-filter,
            #onetrust-consent-sdk {
              display: none !important;
            }

            /* Make sure images don't break */
            img {
              max-width: 100%;
              height: auto;
            }

            /* ===== Multimedia: Data visualisation (bar chart) ===== */
            .abc-data-viz {
              margin: 2rem 0;
              padding: 1.5rem;
              background: var(--nw-colour-surface-tint, #fafafa);
              border-radius: 8px;
              border: 1px solid var(--nw-colour-border-opacity-low, #e6e6e6);
            }
            .abc-dv-title {
              font-family: var(--dls-font-stack-sans);
              font-size: 0.875rem;
              font-weight: 700;
              color: var(--nw-colour-text-primary, #000);
              margin-bottom: 1rem;
              text-transform: uppercase;
              letter-spacing: 0.04em;
            }
            .abc-dv-chart {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            }
            .abc-dv-row {
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }
            .abc-dv-label {
              font-family: var(--dls-font-stack-sans);
              font-size: 0.8rem;
              font-weight: 600;
              color: var(--nw-colour-text-secondary, #60646c);
              min-width: 100px;
              text-align: right;
              flex-shrink: 0;
            }
            .abc-dv-bar {
              height: 2.5rem;
              border-radius: 4px;
              background: var(--nw-colour-text-link, #0058cc);
              display: flex;
              align-items: center;
              padding: 0 0.75rem;
              color: white;
              font-family: var(--dls-font-stack-sans);
              font-size: 0.8rem;
              font-weight: 700;
              min-width: 40px;
              transition: width 0.5s ease;
            }
            .abc-dv-bar-danger {
              background: #e00736;
            }
            .abc-dv-source {
              font-family: var(--dls-font-stack-sans);
              font-size: 0.7rem;
              color: var(--nw-colour-text-utility, #484b51);
              margin-top: 0.75rem;
              font-style: italic;
            }

            /* ===== Multimedia: Timeline ===== */
            .abc-timeline-viz {
              margin: 2rem 0;
              padding: 1.5rem;
              background: var(--nw-colour-surface-tint, #fafafa);
              border-radius: 8px;
              border-left: 4px solid var(--nw-colour-text-link, #0058cc);
            }
            .abc-tl-title {
              font-family: var(--dls-font-stack-sans);
              font-size: 0.875rem;
              font-weight: 700;
              color: var(--nw-colour-text-primary, #000);
              margin-bottom: 1.25rem;
              text-transform: uppercase;
              letter-spacing: 0.04em;
            }
            .abc-tl-item {
              position: relative;
              padding-bottom: 1.25rem;
              padding-left: 1.75rem;
            }
            .abc-tl-item:last-child {
              padding-bottom: 0;
            }
            .abc-tl-item::before {
              content: "";
              position: absolute;
              left: 5px;
              top: 6px;
              bottom: -6px;
              width: 2px;
              background: var(--nw-colour-border-opacity-medium, #d4d4d4);
            }
            .abc-tl-item:last-child::before {
              display: none;
            }
            .abc-tl-dot {
              position: absolute;
              left: 0;
              top: 4px;
              width: 12px;
              height: 12px;
              border-radius: 9999px;
              background: var(--nw-colour-text-link, #0058cc);
              border: 2px solid var(--nw-colour-surface-tint, #fafafa);
              box-shadow: 0 0 0 2px var(--nw-colour-text-link, #0058cc);
              z-index: 1;
            }
            .abc-tl-date {
              font-family: var(--dls-font-stack-sans);
              font-size: 0.75rem;
              font-weight: 700;
              letter-spacing: 0.03em;
              color: var(--nw-colour-text-link, #0058cc);
              margin-bottom: 0.25rem;
            }
            .abc-tl-text {
              font-family: var(--dls-font-stack-sans);
              font-size: 0.9rem;
              line-height: 1.45;
              color: var(--nw-colour-text-primary, #000);
            }

            /* ===== Multimedia: Data table ===== */
            .abc-data-table {
              margin: 2rem 0;
              overflow-x: auto;
            }
            .abc-dt-title {
              font-family: var(--dls-font-stack-sans);
              font-size: 0.875rem;
              font-weight: 700;
              color: var(--nw-colour-text-primary, #000);
              margin-bottom: 0.75rem;
              text-transform: uppercase;
              letter-spacing: 0.04em;
            }
            .abc-data-table table {
              width: 100%;
              border-collapse: collapse;
              font-family: var(--dls-font-stack-sans);
              font-size: 0.85rem;
            }
            .abc-data-table th {
              text-align: left;
              padding: 0.6rem 0.75rem;
              background: var(--nw-colour-surface-tint, #fafafa);
              border-bottom: 2px solid var(--nw-colour-text-link, #0058cc);
              font-weight: 700;
              color: var(--nw-colour-text-primary, #000);
            }
            .abc-data-table td {
              padding: 0.6rem 0.75rem;
              border-bottom: 1px solid var(--nw-colour-border-opacity-low, #e6e6e6);
              color: var(--nw-colour-text-primary, #000);
              vertical-align: top;
            }
            .abc-data-table td:last-child {
              color: var(--nw-colour-text-secondary, #60646c);
              font-style: italic;
              font-size: 0.8rem;
            }
            .abc-data-table tr:hover td {
              background: var(--nw-colour-surface-tint, #fafafa);
            }

            /* ===== Article body blockquote ===== */
            .engagement_target blockquote:not(.abc-pullquote) {
              border-left: 4px solid var(--nw-colour-text-link, #0058cc);
              padding-left: 1.25rem;
              margin: 1.5rem 0;
              font-style: italic;
              color: var(--nw-colour-text-secondary, #60646c);
            }
            .engagement_target blockquote:not(.abc-pullquote) p {
              margin: 0;
            }

            @keyframes abc-toast-in {
              from { opacity: 0; transform: translate(-50%, 12px); }
              to { opacity: 1; transform: translate(-50%, 0); }
            }
          `,
        }}
      />

      {/* The real ABC News article HTML content */}
      <div dangerouslySetInnerHTML={{ __html: ARTICLE_HTML }} />

      {/* Client-side share-button wiring (Client Component to avoid hydration mismatch) */}
      <ShareScript />
    </>
  );
}
