import { useEffect, useState } from "react";
import {
  MOMENTS_FALLBACK,
  MOMENTS_FIELD_KEY,
  fetchSlotifyWebsiteFields,
  normalizeImageUrls,
  urlsToMomentImages,
} from "../lib/slotifyWebsite";

/**
 * Loads Moments gallery images from Slotify public website CMS (Images field).
 */
export function useMomentsImages() {
  const [images, setImages] = useState(MOMENTS_FALLBACK);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const fields = await fetchSlotifyWebsiteFields();
        const urls = normalizeImageUrls(fields?.[MOMENTS_FIELD_KEY]);
        if (!cancelled && urls.length > 0) {
          setImages(urlsToMomentImages(urls));
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { images, loading, error };
}
