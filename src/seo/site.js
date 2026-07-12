/** Canonical site URL used for sitemap, Open Graph, and JSON-LD. */
export const SITE_URL = "https://alikhanyan.netlify.app";

export const SITE_NAME = "Alikhanyan Production";

export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/ddoaufnnz/image/upload/v1778778442/alikhanyan_hero_updated_pjtbzv.jpg";

export const DEFAULT_DESCRIPTION =
  "Alikhanyan Production — music studio, Alikhanyan's Project orchestra, and Avos School in Yerevan. Recording rooms, live performances, and music education.";

/** Per-route SEO (title, description). Paths without a match use the home defaults. */
export const ROUTE_SEO = {
  "/": {
    title: "Alikhanyan Production | Music Studio, Orchestra & School in Yerevan",
    description: DEFAULT_DESCRIPTION,
  },
  "/alikhanyans-project": {
    title: "Alikhanyan's Project Orchestra | Live Music in Yerevan",
    description:
      "Alikhanyan's Project Orchestra — high-quality live music founded in 2019. Meet the artists, watch performances, and discover partners in Yerevan, Armenia.",
  },
  "/alikhanyan-studio": {
    title: "Alikhanyan Studio | Music Recording Rooms in Yerevan",
    description:
      "Book music practice and recording rooms at Alikhanyan Studio on Mashtots Avenue, Yerevan. Open 24/7 with multiple rooms for bands and artists.",
  },
  "/avosschool": {
    title: "Avos School | Music Lessons in Yerevan",
    description:
      "Avos School by Alikhanyan Production — music lessons, teachers, and after-school programs in Yerevan, Armenia.",
  },
  "/alikhanyan-studio/3d-tour": {
    title: "Alikhanyan Studio 3D Tour | Virtual Walkthrough",
    description:
      "Take a 3D virtual tour of Alikhanyan Studio music rooms in Yerevan.",
  },
  "/avosschool/3d-tour": {
    title: "Avos School 3D Tour | Virtual Walkthrough",
    description:
      "Take a 3D virtual tour of Avos School by Alikhanyan Production.",
  },
  "/about-details": {
    title: "About Alikhanyan's Project | Alikhanyan Production",
    description:
      "Learn more about Alikhanyan's Project Orchestra and Alikhanyan Production in Yerevan.",
  },
};
