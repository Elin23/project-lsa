// src/Types/news.ts

export interface NewsImage {
  url: string;
  alt: string;
  publicId?: string;
}

export interface NewsItem {
  _id: string;
  category: string;
  title: string;
  shortDescription: string;
  content?: string;
  publishedAt: string;
  image: NewsImage;
  isFeatured?: boolean;
  displayOrder?: number;
}