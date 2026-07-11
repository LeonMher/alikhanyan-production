import { useEffect, useState } from "react";
import {
  ABOUT_US_FALLBACK,
  ABOUT_US_FIELD_KEY,
  fetchSlotifyWebsiteFields,
} from "../lib/slotifyWebsite";

/**
 * Loads Alikhanyan's Project About us text from Slotify public website CMS.
 */
export function useAboutUsContent() {
  const [text, setText] = useState(ABOUT_US_FALLBACK);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const fields = await fetchSlotifyWebsiteFields();
        const value = fields?.[ABOUT_US_FIELD_KEY];
        if (!cancelled && typeof value === "string" && value.trim()) {
          setText(value.trim());
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

  return { text, loading, error };
}
