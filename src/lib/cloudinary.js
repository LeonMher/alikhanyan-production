import { Cloudinary } from "@cloudinary/url-gen";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { scale } from "@cloudinary/url-gen/actions/resize";

export const CLOUD_NAME = "ds06qiycz";

const cloudinaryInstances = new Map();

function getCloudinary(cloudName) {
  if (!cloudinaryInstances.has(cloudName)) {
    cloudinaryInstances.set(
      cloudName,
      new Cloudinary({ cloud: { cloudName } })
    );
  }
  return cloudinaryInstances.get(cloudName);
}

const CLOUDINARY_URL_RE =
  /^https?:\/\/res\.cloudinary\.com\/([^/]+)\/image\/upload\/(.+)$/;

export function parseCloudinaryUrl(url) {
  const match = url.match(CLOUDINARY_URL_RE);
  if (!match) return null;

  const cloudName = match[1];
  let path = match[2];

  const versionPartIndex = path.search(/(^|\/)v\d+\//);
  if (versionPartIndex > 0) {
    path = path.slice(versionPartIndex + (path[versionPartIndex] === "/" ? 1 : 0));
  }

  const publicId = path.replace(/\.[^/.]+$/, "");
  return { cloudName, publicId };
}

export function buildOptimizedImage(url, width = 400) {
  const parsed = parseCloudinaryUrl(url);
  if (!parsed) return null;

  const cld = getCloudinary(parsed.cloudName);
  return cld
    .image(parsed.publicId)
    .format(autoFormat())
    .quality("auto")
    .resize(scale().width(width));
}
