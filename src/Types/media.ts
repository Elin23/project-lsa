export interface CloudinaryImageAsset {
  publicId: string;
  secureUrl?: string;
  width?: number;
  height?: number;
  format?: string;
}

export interface CloudinaryVideoAsset {
  publicId: string;
  secureUrl?: string;
  posterPublicId?: string;
  width?: number;
  height?: number;
  duration?: number;
  format?: string;
}