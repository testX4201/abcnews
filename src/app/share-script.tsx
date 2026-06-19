"use client";

import { useEffect } from "react";

/**
 * Client-side share-button wiring for the ABC News article replica.
 *
 * The article HTML is injected server-side via dangerouslySetInnerHTML, so the
 * share buttons live inside that blob. This component attaches delegated event
 * listeners on the client to make Copy / Facebook / X share work, and shows a
 * small toast on copy.
 *
 * Kept as a Client Component (rather than a raw <script> tag) to avoid
 * hydration mismatches between the server-rendered HTML and the client.
 */
export function ShareScript() {
  useEffect(() => {
    function showToast(msg: string) {
      const existing = document.getElementById("abc-share-toast");
      if (existing) existing.remove();
      const toast = document.createElement("div");
      toast.id = "abc-share-toast";
      toast.style.cssText =
        "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1a1a1a;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:0.85rem;font-weight:500;padding:0.7rem 1.1rem;border-radius:9999px;box-shadow:0 8px 24px rgba(0,0,0,0.25);z-index:9999;animation:abc-toast-in 0.3s ease;";
      toast.textContent = msg;
      document.body.appendChild(toast);
      window.setTimeout(() => toast.remove(), 2500);
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const el = target?.closest("[data-share]") as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      const url = el.getAttribute("data-url") || window.location.href;
      const type = el.getAttribute("data-share");

      if (type === "copy") {
        const writePromise =
          navigator.clipboard?.writeText(url) ??
          Promise.reject(new Error("no clipboard"));
        writePromise
          .then(() => showToast("Link copied"))
          .catch(() => {
            const ta = document.createElement("textarea");
            ta.value = url;
            document.body.appendChild(ta);
            ta.select();
            try {
              document.execCommand("copy");
            } catch {
              /* ignore */
            }
            document.body.removeChild(ta);
            showToast("Link copied");
          });
      } else if (type === "facebook") {
        window.open(
          "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(url),
          "_blank",
          "noopener,noreferrer",
        );
      } else if (type === "twitter") {
        window.open(
          "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url),
          "_blank",
          "noopener,noreferrer",
        );
      }
    }

    function wireShareButtons() {
      const shareBtns = document.querySelectorAll<HTMLElement>(
        ".ShareBanner_shareButton__Ngjqb, .ShareButton_shareButton__r_dH1",
      );
      shareBtns.forEach((btn) => {
        if (!btn.getAttribute("data-share")) {
          btn.setAttribute("data-share", "copy");
          btn.setAttribute("data-url", window.location.href);
        }
      });

      const addrBar = document.querySelector<HTMLElement>(
        ".AddressShareBar_address__D3ZaM",
      );
      if (addrBar) {
        addrBar.style.cursor = "pointer";
        addrBar.addEventListener("click", () => {
          const url = window.location.href;
          navigator.clipboard
            ?.writeText(url)
            .then(() => showToast("Link copied"))
            .catch(() => showToast("Link copied"));
        });
      }
    }

    document.addEventListener("click", onClick);
    wireShareButtons();

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
