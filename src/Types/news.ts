export interface NewsImage {
  url: string;
  alt: string;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  content?: string;
  publishedAt: string;
  images: NewsImage[];
}