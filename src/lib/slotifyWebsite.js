const SLOTIFY_WEBSITE_API_URL =
  import.meta.env.VITE_SLOTIFY_WEBSITE_API_URL ||
  "https://slotify-staging-e9eb5befb5bd.herokuapp.com/api/public/website/alikhanyan-studio-2";

/** Field key defined in Slotify SuperAdmin for Alikhanyan's Project About us. */
export const ABOUT_US_FIELD_KEY = "alikhanyan_project_about_us";

export const ABOUT_US_FALLBACK =
  "Alikhanyan’s Project Orchestra-ն հիմնադրվել է 2019 թվականին՝ մեկ նպատակով․ ստեղծել բարձրակարգ, կենդանի երաժշտություն, որը ոչ միայն հնչում է, այլև զգացվում է։";

/**
 * @returns {Promise<Record<string, string | null>>}
 */
export async function fetchSlotifyWebsiteFields() {
  const response = await fetch(SLOTIFY_WEBSITE_API_URL);
  if (!response.ok) {
    throw new Error(`Website content request failed (${response.status})`);
  }
  const data = await response.json();
  return data?.fields ?? {};
}
