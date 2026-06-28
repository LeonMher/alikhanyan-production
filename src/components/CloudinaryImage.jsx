import { AdvancedImage } from "@cloudinary/react";
import { buildOptimizedImage } from "../lib/cloudinary";

const CloudinaryImage = ({ src, width = 400, alt = "", ...props }) => {
  const cldImg = buildOptimizedImage(src, width);

  if (!cldImg) {
    return <img src={src} alt={alt} {...props} />;
  }

  return <AdvancedImage cldImg={cldImg} alt={alt} {...props} />;
};

export default CloudinaryImage;
