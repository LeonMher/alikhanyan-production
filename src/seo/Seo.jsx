import { useEffect } from "react";
import { useLocation } from "react-router";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  ROUTE_SEO,
  SITE_NAME,
  SITE_URL,
} from "./site";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Updates document title and social/SEO meta tags on every route change.
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const entry = ROUTE_SEO[pathname] ?? {
      title: `${SITE_NAME} | Music in Yerevan`,
      description: DEFAULT_DESCRIPTION,
    };

    const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = entry.title;

    upsertMeta("name", "description", entry.description);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", entry.title);
    upsertMeta("property", "og:description", entry.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:locale:alternate", "hy_AM");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", entry.title);
    upsertMeta("name", "twitter:description", entry.description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
    upsertLink("canonical", canonical);
  }, [pathname]);

  return null;
}
