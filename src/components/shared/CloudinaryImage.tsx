import type { ImgHTMLAttributes } from "react";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

interface CloudinaryImageProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "src" | "srcSet"
  > {
  publicId: string;
  alt: string;
  widths?: number[];
  priority?: boolean;
  crop?: "fill" | "fit" | "limit" | "scale";
  aspectRatio?: string;
}

const CloudinaryImage = ({
  publicId,
  alt,
  widths = [480, 768, 1200, 1600, 1920],
  sizes = "100vw",
  priority = false,
  crop = "limit",
  aspectRatio,
  className = "",
  ...props
}: CloudinaryImageProps) => {
  const sortedWidths = [...widths].sort(
    (a, b) => a - b,
  );

  const fallbackWidth =
    sortedWidths.find((width) => width >= 1200) ??
    sortedWidths.at(-1) ??
    1200;

  const srcSet = sortedWidths
    .map(
      (width) =>
        `${getCloudinaryImageUrl(publicId, {
          width,
          crop,
          aspectRatio,
        })} ${width}w`,
    )
    .join(", ");

  return (
    <img
      src={getCloudinaryImageUrl(publicId, {
        width: fallbackWidth,
        crop,
        aspectRatio,
      })}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
      {...props}
    />
  );
};

export default CloudinaryImage;