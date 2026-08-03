const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
  throw new Error(
    "VITE_CLOUDINARY_CLOUD_NAME is missing from .env",
  );
}

interface CloudinaryImageOptions {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "limit" | "scale";
  gravity?: "auto" | "center";
  aspectRatio?: string;
}

export const getCloudinaryImageUrl = (
  publicId: string,
  options: CloudinaryImageOptions = {},
) => {
  const {
    width,
    height,
    crop = "limit",
    gravity = "auto",
    aspectRatio,
  } = options;

  const transformations = [
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    width || height ? `c_${crop}` : null,
    crop === "fill" ? `g_${gravity}` : null,
    aspectRatio ? `ar_${aspectRatio}` : null,
  ]
    .filter(Boolean)
    .join(",");

  const resizePart = transformations
    ? `${transformations}/`
    : "";

  return [
    `https://res.cloudinary.com/${cloudName}`,
    "image/upload",
    resizePart,
    "f_auto",
    "q_auto",
    publicId,
  ].join("/");
};

interface CloudinaryVideoOptions {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "limit" | "scale";
  gravity?: "auto" | "center";
}

export const getCloudinaryVideoUrl = (
  publicId: string,
  options: CloudinaryVideoOptions = {},
) => {
  const {
    width,
    height,
    crop = "limit",
    gravity = "auto",
  } = options;

  const transformations = [
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    width || height ? `c_${crop}` : null,
    crop === "fill" ? `g_${gravity}` : null,
  ]
    .filter(Boolean)
    .join(",");

  const resizePart = transformations
    ? `${transformations}/`
    : "";

  return [
    `https://res.cloudinary.com/${cloudName}`,
    "video/upload",
    resizePart,
    "f_auto",
    "q_auto",
    publicId,
  ].join("/");
};