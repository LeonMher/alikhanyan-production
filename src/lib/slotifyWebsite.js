const SLOTIFY_WEBSITE_API_URL =
  import.meta.env.VITE_SLOTIFY_WEBSITE_API_URL ||
  "https://slotify-staging-e9eb5befb5bd.herokuapp.com/api/public/website/alikhanyan-studio-2";

/** Field key defined in Slotify SuperAdmin for Alikhanyan's Project About us. */
export const ABOUT_US_FIELD_KEY = "alikhanyan_project_about_us";

/** Field key for the Moments gallery (Images type). */
export const MOMENTS_FIELD_KEY = "alikhanyan_project_moments";

export const ABOUT_US_FALLBACK =
  "Alikhanyan’s Project Orchestra-ն հիմնադրվել է 2019 թվականին՝ մեկ նպատակով․ ստեղծել բարձրակարգ, կենդանի երաժշտություն, որը ոչ միայն հնչում է, այլև զգացվում է։";

/** Fallback Moments images if CMS has none / request fails. */
export const MOMENTS_FALLBACK = [
  {
    src: "https://res.cloudinary.com/ds06qiycz/image/upload/v1781946536/artur_playing_ij2viy.jpg",
    alt: "Artur playing guitar",
  },
  {
    src: "https://res.cloudinary.com/ds06qiycz/image/upload/v1781946537/two_singers_jhdvmd.jpg",
    alt: "Two singers on stage",
  },
  {
    src: "https://res.cloudinary.com/ds06qiycz/image/upload/v1781946537/a_singer_an1gfb.jpg",
    alt: "Solo singer performing",
  },
  {
    src: "https://res.cloudinary.com/ds06qiycz/image/upload/v1781946634/hero_oizcgy.jpg",
    alt: "Band performance on stage",
  },
  {
    src: "https://res.cloudinary.com/ds06qiycz/image/upload/v1781946538/Artur_playing_keyboard_zf3x1m.jpg",
    alt: "Artur playing keyboard",
  },
];

/**
 * @param {unknown} value
 * @returns {string[]}
 */
export function normalizeImageUrls(value) {
  if (Array.isArray(value)) {
    return value.filter((u) => typeof u === "string" && u.trim()).map((u) => u.trim());
  }
  if (typeof value === "string" && value.trim()) {
    const trimmed = value.trim();
    if (trimmed.startsWith("[")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          return parsed
            .filter((u) => typeof u === "string" && u.trim())
            .map((u) => u.trim());
        }
      } catch {
        /* ignore */
      }
    }
    return [trimmed];
  }
  return [];
}

/**
 * @param {string[]} urls
 * @returns {{ src: string, alt: string }[]}
 */
export function urlsToMomentImages(urls) {
  return urls.map((src, index) => ({
    src,
    alt: `Moment ${index + 1}`,
  }));
}

/** Shared in-flight / cached fields so About + Moments only hit the API once. */
let fieldsPromise = null;

/**
 * @returns {Promise<Record<string, unknown>>}
 */
export async function fetchSlotifyWebsiteFields() {
  if (!fieldsPromise) {
    fieldsPromise = (async () => {
      const response = await fetch(SLOTIFY_WEBSITE_API_URL);
      if (!response.ok) {
        throw new Error(`Website content request failed (${response.status})`);
      }
      const data = await response.json();
      return data?.fields ?? {};
    })().catch((err) => {
      fieldsPromise = null;
      throw err;
    });
  }
  return fieldsPromise;
}
